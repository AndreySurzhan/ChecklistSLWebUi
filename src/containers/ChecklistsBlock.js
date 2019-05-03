import React from 'react';
import ChecklistItem from '../containers/ChecklistItem';
import ElementDialog from '../common/components/ElementDialog';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import * as checklistActions from '../actions/checklistActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    addChecklistButton: {
        position: 'fixed',
        top: 24,
        right: 24,
        zIndex: 1100
    }
});

class ChecklistsBlock extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            openElementDialog: false,
            checklist: {
                name: '',
                isActive: true,
                items: [],
                users: []
            }
        };

        this.onTextInputChange = this.onTextInputChange.bind(this);
    }

    handleOkClick = event => {
        this.props.actions.addChecklist(this.state.checklist);
        this.setState({
            openElementDialog: false,
            checklist: {
                name: ''
            }
        });
    };

    onTextInputChange = event => {
        this.setState({
            checklist: {
                name: event.target.value
            }
        });
    };

    handleCloseElementDialog = event => {
        this.setState({
            openElementDialog: false,
            checklist: {
                name: ''
            }
        });
    };

    handAddNewChecklistButtonClick = event => {
        this.setState({
            openElementDialog: true
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div id="cl-checklists-container">
                <Fab
                    color="primary"
                    aria-label="Add checklist"
                    size="medium"
                    className={classes.addChecklistButton}
                    onClick={this.handAddNewChecklistButtonClick}
                >
                    <AddIcon />
                </Fab>
                {this.props.checklists.map(checklist => (
                    <ChecklistItem key={checklist._id} checklist={checklist} />
                ))}
                <ElementDialog
                    name="checklist"
                    handleClose={this.handleCloseElementDialog}
                    open={this.state.openElementDialog}
                    handleOkButtonClick={this.handleOkClick}
                    text={this.state.checklist.name}
                    handleChange={this.onTextInputChange}
                    isNew={true}
                />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        checklists: state.checklists.checklists
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
