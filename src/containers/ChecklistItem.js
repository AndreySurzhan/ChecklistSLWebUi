import React from "react";
import TextElement from "../common/components/TextElement";
import MoreButtonBlock from "../common/containers/MoreButtonBlock";
import { withStyles } from "@material-ui/core/styles";
import * as checklistActions from '../actions/checklistActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

const styles = theme => ({
    isActive: {
        color: "#FFFFFF",
        backgroundColor: "#455A64"
    }   
});

class ChecklistItem extends React.Component {    
    constructor(props, context) {
        super(props, context);

        this.state = {
            checklist: Object.assign({}, this.props.checklist)
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.handleShare = this.handleShare.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleDelete = checklist => event => {
        this.props.actions.deleteChecklist(checklist);
    };

    handleEdit = checklist => event => {
        console.log("Edit Checklist", checklist);
    };

    handleShare = checklist => event => {
        console.log("Share Checklist", checklist);
    };

    handleClick = checklist => event => {
        this.props.actions.selectChecklist(checklist);
    };

    render() {
        const { classes } = this.props;
        const checklist = this.props.checklist;
        const options = [
            {
                text: "Delete",
                handleClick: this.handleDelete(checklist)
            },
            {
                text: "Edit",
                handleClick: this.handleEdit(checklist)
            },
            {
                text: "Share",
                handleClick: this.handleShare(checklist)
            }
        ];

        return (
            <React.Fragment>
                <div style={{width: '100%'}} onClick={this.handleClick(checklist)}>
                    <TextElement className={checklist.isActive ? classes.isActive : ''} text={checklist.name} />
                </div>
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

ChecklistItem.propTypes = {
    checklist: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ChecklistItem));