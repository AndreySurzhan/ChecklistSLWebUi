import React from "react";
import Checkbox from "../common/components/Checkbox";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import MoreButtonBlock from "../common/containers/MoreButtonBlock";
import Translation from "../components/Translation";
import TextElement from "../common/components/TextElement";
import * as checklistActions from '../actions/checklistActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    translations: {
        padding: 0,
        paddingTop: theme.spacing.unit / 3,
        paddingBottom: theme.spacing.unit / 3
    }
});

const handleDelete = item => event => {
    console.log("Delete Item", item);
};

const handleEdit = item => event => {
    console.log("Edit Item", item);
};

class Item extends React.Component {    
    constructor(props, context) {
        super(props, context);

        this.state = {
            item: Object.assign({}, this.props.item)
        };

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    }

    handleCheckboxChange = event => {
        const item = Object.assign({}, this.state.item);
        item.checked = event.target.checked;
        
        this.props.actions.updateItemSuccess(item);

        this.setState({
            item: item
        });
    }

    render() {
        const { classes } = this.props;
        const item = this.state.item;
        const options = [
            {
                text: "Delete",
                handleClick: handleDelete(item)
            },
            {
                text: "Edit",
                handleClick: handleEdit(item)
            }
        ];

        return (
            <React.Fragment>
                <Checkbox checked={item.checked} handleChange={this.handleCheckboxChange} />
                <TextElement text={item.text}>
                    <Divider light />
                    <List className={classes.translations}>
                        {item.translations.map((translation, i) => (
                            <Translation key={i} translation={translation} />
                        ))}
                    </List>
                </TextElement>
                <MoreButtonBlock options={options} />
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
    classes: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Item));
