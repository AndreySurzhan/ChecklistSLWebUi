import React from 'react';
import ElementDialog from '../common/components/ElementDialog';
import ChecklistItem from '../components/ChecklistItem';
import { withStyles } from '@material-ui/core/styles';
import * as checklistActions from '../actions/checklistActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import * as validate from '../utils/validate';

const styles = theme => ({});

class ChecklistItemBlock extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            checklist: Object.assign({}, this.props.checklist),
            item: Object.assign({}, this.props.item),
            openElementDialog: false,
            errors: {}
        };

        this.handleEdit = this.handleEdit.bind(this);
        this.handleShare = this.handleShare.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleOkClick = this.handleOkClick.bind(this);
        this.onChecklistInputChange = this.onChecklistInputChange.bind(this);
        this.onItemInputChange = this.onItemInputChange.bind(this);
        this.handleCloseElementDialog = this.handleCloseElementDialog.bind(this);
        this.handleClickAddItem = this.handleClickAddItem.bind(this);
        this.isChecklistModalFormValid = this.isChecklistModalFormValid.bind(this);
        this.IsNewItemFormValid = this.IsNewItemFormValid.bind(this);
    }

    handleDelete(event) {
        event.stopPropagation();
        this.props.checklistActions.deleteChecklist(this.props.checklist);
    }

    handleEdit(event) {
        event.stopPropagation();
        this.setState({
            openElementDialog: true
        });
    }

    handleShare(event) {
        event.stopPropagation();
        console.log('Share Checklist', this.props.checklist);
    }

    handleOkClick(event) {
        if (!this.isChecklistModalFormValid()) {
            return;
        }

        this.props.checklistActions.updateChecklist(this.state.checklist);

        this.setState({
            openElementDialog: false
        });
    }

    onChecklistInputChange(event) {
        const checklist = Object.assign({}, this.state.checklist);

        checklist.name = event.target.value;

        this.setState({
            checklist: checklist,
            errors: {
                modalInput: ''
            }
        });
    }

    onItemInputChange(event) {
        this.setState({
            item: {
                text: event.target.value
            },
            errors: {
                newItemForm: ''
            }
        });
    }

    handleCloseElementDialog(event) {
        this.setState({
            openElementDialog: false,
            checklist: this.props.checklist,
            errors: {
                modalInput: ''
            }
        });
    }

    handleClickAddItem(event) {
        if (!this.IsNewItemFormValid()) {
            return;
        }

        const item = Object.assign({}, this.state.item);

        item.translations = [];
        item.isChecked = false;
        item.checklist = this.props.checklist._id;

        this.setState({
            item: item
        });

        this.props.itemActions.addItem(item);

        this.setState({
            item: {
                text: ''
            }
        });
    }

    isChecklistModalFormValid() {
        let errors = Object.assign({}, this.state.errors);
        let isValid = true;

        errors.modalInput = '';

        if (!validate.isNotEmpty(this.state.checklist.name)) {
            errors.modalInput = 'Checklist name should not be empty';
            isValid = false;
        }

        this.setState({ errors });

        return isValid;
    }

    IsNewItemFormValid() {
        let errors = Object.assign({}, this.state.errors);
        let isValid = true;

        errors.newItemForm = '';

        if (!validate.isNotEmpty(this.state.item.text)) {
            errors.newItemForm = 'Item text should not be empty';
            isValid = false;
        }

        this.setState({ errors });

        return isValid;
    }

    render() {
        const checklist = this.props.checklist;
        const options = [
            {
                text: 'Delete',
                handleClick: this.handleDelete
            },
            {
                text: 'Edit',
                handleClick: this.handleEdit
            },
            {
                text: 'Share',
                handleClick: this.handleShare
            }
        ];

        return (
            <React.Fragment>
                <ChecklistItem
                    checklist={checklist}
                    moreButtonOptions={options}
                    handleClickAddItem={this.handleClickAddItem}
                    itemText={this.state.item.text}
                    onItemInputChange={this.onItemInputChange}
                    errors={this.state.errors}
                    isItemApiInProgress={this.props.isApiItem}
                />
                <ElementDialog
                    name="checklist"
                    handleClose={this.handleCloseElementDialog}
                    open={this.state.openElementDialog}
                    handleOkButtonClick={this.handleOkClick}
                    text={this.state.checklist.name}
                    handleChange={this.onChecklistInputChange}
                    isNew={false}
                    errors={this.state.errors}
                />
            </React.Fragment>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const item = {
        text: '',
        translations: [],
        isChecked: false
    };

    return {
        item,
        isApiChecklist: state.checklists.isApiChecklist,
        isApiItem: state.checklists.isApiItem
    };
}

function mapDispatchToProps(dispatch) {
    return {
        checklistActions: bindActionCreators(checklistActions, dispatch),
        itemActions: bindActionCreators(checklistActions, dispatch)
    };
}

ChecklistItemBlock.propTypes = {
    checklist: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    checklistActions: PropTypes.object.isRequired,
    itemActions: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ChecklistItemBlock));
