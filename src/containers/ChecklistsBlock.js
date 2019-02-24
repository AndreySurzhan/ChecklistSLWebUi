import React from 'react';
import AddNewElement from '../common/containers/AddNewElement';
import ChecklistsList from '../components/ChecklistsList';
import * as checklistActions from '../actions/checklistActions';
import ChecklistApi from '../api/checklistApi';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

class ChecklistsBlock extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.textInputValue = '';
        this.state = {
            checklist: {
                name: '',
                isActive: true,
                items: [],
                users: []
            }
        };
        this.checklsitApi = new ChecklistApi();
    }

    onClickAddElement = event => {
        this.checklsitApi
            .creatChecklist(this.state.checklist)
            .then(checklist => {                
                // set previous checklist to inactive 
                this.setState({
                    checklist
                });
                this.props.actions.addChecklist(this.state.checklist);
                this.textInputValue = '';
            })
            .catch(e => {
                console.log(e);
            });
    };

    onTextInputChange = event => {
        this.textInputValue = event.target.value;
        this.setState({
            checklist: {
                name: this.textInputValue
            }
        });
    };

    render() {
        const addNewChecklistElementProps = {
            id: 'clsl-add-new-checklist-form',
            textInputId: 'clsl-add-new-checklist-text-input',
            buttonId: 'clsl-add-new-checklist-button',
            name: 'newChecklistInput',
            placeholder: 'Type in New Checklist Name',
            lable: 'Add New Checklist',
            onClickAddElement: this.onClickAddElement,
            onTextInputChange: this.onTextInputChange,
            value: this.textInputValue
        };

        return (
            <div id="cl-checklists-container">
                <AddNewElement element={addNewChecklistElementProps} />
                <ChecklistsList checklists={this.props.checklists} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        checklists: state.checklists
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(checklistActions, dispatch)
    };
}

ChecklistsBlock.propTypes = {
    checklists: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ChecklistsBlock));
