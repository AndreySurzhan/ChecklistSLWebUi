import React from 'react';
import Checkbox from '../common/components/Checkbox';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import MoreButtonBlock from '../common/containers/MoreButtonBlock';
import Translation from '../components/Translation';
import ElementDialog from '../common/components/ElementDialog';
import Typography from '@material-ui/core/Typography';
import * as checklistActions from '../actions/checklistActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    itemText: {
        width: '100%',
        fontWeight: 600,
        height: 40,
        lineHeight: 2.5
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    translations: {
        padding: 0,
        paddingTop: theme.spacing.unit / 3,
        paddingBottom: theme.spacing.unit / 3
    }
});

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            item: Object.assign({}, this.props.item),
            openElementDialog: false
        };

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleDelete = item => event => {
        event.stopPropagation();
        this.props.actions.deleteItem(item);
    };

    handleEdit = event => {
        event.stopPropagation();
        this.setState({
            openElementDialog: true
        });
    };

    handleCheckboxChange = event => {
        const item = Object.assign({}, this.props.item);
        item.isChecked = event.target.checked;

        this.props.actions.updateItem(item);

        this.setState({
            item: item
        });
    };

    handleOkClick = item => event => {
        this.props.actions.updateItem(item);
        this.setState({
            openElementDialog: false
        });
    };

    onTextInputChange = event => {
        const item = Object.assign({}, this.state.item);

        item.text = event.target.value;

        this.setState({
            item: item
        });
    };

    handleCloseElementDialog = event => {
        this.setState({
            openElementDialog: false,
            item: this.props.item
        });
    };

    render() {
        const { classes } = this.props;
        const item = this.props.item;
        const options = [
            {
                text: 'Delete',
                handleClick: this.handleDelete(item)
            },
            {
                text: 'Edit',
                handleClick: this.handleEdit
            }
        ];

        return (
            <React.Fragment>
                <Checkbox checked={item.isChecked} handleChange={this.handleCheckboxChange} />
                <div className={classes.item}>
                    <Typography className={classes.itemText} variant="subtitle1">
                        {item.text}
                    </Typography>
                    <Divider light />
                    <List className={classes.translations}>
                        {item.translations.map((translation, i) => (
                            <Translation key={i} translation={translation} />
                        ))}
                    </List>
                </div>
                <MoreButtonBlock options={options} />
                <ElementDialog
                    name="item"
                    handleClose={this.handleCloseElementDialog}
                    open={this.state.openElementDialog}
                    handleOkButtonClick={this.handleOkClick(this.state.item)}
                    text={this.state.item.text}
                    handleChange={this.onTextInputChange}
                    isNew={false}
                />
            </React.Fragment>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(checklistActions, dispatch)
    };
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Item));
