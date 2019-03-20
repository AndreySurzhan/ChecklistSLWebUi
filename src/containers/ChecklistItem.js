import React from "react";
import TextElement from "../common/components/TextElement";
import MoreButtonBlock from "../common/containers/MoreButtonBlock";
import OkButton from '../common/components/OkButton';
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
            checklist: Object.assign({}, this.props.checklist),
            editMode: false
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.handleShare = this.handleShare.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleOkClick = this.handleOkClick.bind(this);
        this.onTextInputChange = this.onTextInputChange.bind(this);
    }

    handleDelete = checklist => event => {
        this.props.actions.deleteChecklist(checklist);
    };

    handleEdit =  event => {
        this.setState({
            editMode: true
        });
    };

    handleShare = checklist => event => {
        console.log("Share Checklist", checklist);
    };

    handleClick = checklist => event => {
        this.props.actions.selectChecklist(checklist);
    };

    handleOkClick = checklist => event => {
        this.props.actions.updateChecklist(checklist);
        this.setState({
            editMode: false
        });
    }

    onTextInputChange = event => {
        const checklist = Object.assign({}, this.state.checklist)

        checklist.name = event.target.value;

        this.setState({
            checklist: checklist
        });
    }

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
                handleClick: this.handleEdit
            },
            {
                text: "Share",
                handleClick: this.handleShare(checklist)
            }
        ];

        return (
            <React.Fragment>
                <div style={{width: '100%'}} onClick={this.handleClick(checklist)}>
                    <TextElement 
                        handleChange={this.onTextInputChange}
                        editMode={this.state.editMode} 
                        className={checklist.isActive ? classes.isActive : ''} 
                        text={checklist.name} 
                        textOnChange={this.state.checklist.name}/>
                </div>
                {this.state.editMode ? <OkButton handleClick={this.handleOkClick(this.state.checklist)}/> : <MoreButtonBlock options={options} />}
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
    classes: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ChecklistItem));