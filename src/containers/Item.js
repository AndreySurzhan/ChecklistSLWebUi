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
import * as validate from '../utils/validate';

const styles = theme => ({
    itemText: {
        width: '100%',
        fontWeight: 600,
        height: 40,
        lineHeight: 2.5
    },
    checked: {
        color: '#adafad',
        textDecoration: 'line-through'
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
            openElementDialog: false,
            errors: {}
        };

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleOkClick = this.handleOkClick.bind(this);
        this.onTextInputChange = this.onTextInputChange.bind(this);
        this.handleCloseElementDialog = this.handleCloseElementDialog.bind(this);
        this.formIsValid = this.formIsValid.bind(this);
    }

    handleDelete(event) {
        event.stopPropagation();
        this.props.actions.deleteItem(this.state.item);
    }

    handleEdit(event) {
        event.stopPropagation();
        this.setState({
            openElementDialog: true
        });
    }

    handleCheckboxChange(event) {
        const item = Object.assign({}, this.props.item);
        item.isChecked = event.target.checked;

        this.props.actions.updateItem(item);

        this.setState({
            item: item
        });
    }

    handleOkClick(event) {
        if (!this.formIsValid()) {
            return;
        }

        this.props.actions.updateItem(this.state.item);
        this.setState({
            openElementDialog: false
        });
    }

    onTextInputChange(event) {
        const item = Object.assign({}, this.state.item);

        item.text = event.target.value;

        this.setState({
            item: item,
            errors: {
                modalInput: ''
            }
        });
    }

    handleCloseElementDialog(event) {
        this.setState({
            openElementDialog: false,
            item: this.props.item
        });
    }

    formIsValid() {
        let errors = {};
        let isValid = true;

        if (!validate.isNotEmpty(this.state.item.text)) {
            errors.modalInput = 'Item text should not be empty';
            isValid = false;
        }

        this.setState({ errors });

        return isValid;
    }

    render() {
        const { classes } = this.props;
        const item = this.props.item;
        const options = [
            {
                text: 'Delete',
                handleClick: this.handleDelete
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
                    <Typography
                        className={`${classes.itemText} ${item.isChecked ? classes.checked : ''}`}
                        variant="subtitle1"
                    >
                        {item.text}
                    </Typography>
                    <Divider light />
                    <List className={classes.translations}>
                        {item.translations.map((translation, i) => (
                            <Translation checked={item.isChecked} key={i} translation={translation} />
                        ))}
                    </List>
                </div>
                <MoreButtonBlock options={options} />
                <ElementDialog
                    name="item"
                    handleClose={this.handleCloseElementDialog}
                    open={this.state.openElementDialog}
                    handleOkButtonClick={this.handleOkClick}
                    text={this.state.item.text}
                    handleChange={this.onTextInputChange}
                    isNew={false}
                    errors={this.state.errors}
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
