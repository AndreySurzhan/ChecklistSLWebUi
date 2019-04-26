import React from 'react';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreButtonBlock from '../common/containers/MoreButtonBlock';
import ItemsList from '../components/ItemsList';
import Typography from '@material-ui/core/Typography';
import ElementDialog from '../common/components/ElementDialog';
import { withStyles } from '@material-ui/core/styles';
import * as checklistActions from '../actions/checklistActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

const styles = theme => ({
    checklistName: {
        width: '100%'
    }
});

const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0,0,0,.125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0
        },
        '&:before': {
            display: 'none'
        }
    },
    expanded: {
        margin: 'auto'
    }
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0,0,0,.03)',
        borderBottom: '1px solid rgba(0,0,0,.125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56
        }
    },
    content: {
        '&$expanded': {
            margin: '12px 0'
        }
    },
    expanded: {}
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: 0
    }
}))(MuiExpansionPanelDetails);

class ChecklistItem extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            checklist: Object.assign({}, this.props.checklist),
            openElementDialog: false
        };

        this.handleEdit = this.handleEdit.bind(this);
        this.handleShare = this.handleShare.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleOkClick = this.handleOkClick.bind(this);
        this.onTextInputChange = this.onTextInputChange.bind(this);
    }

    handleDelete = checklist => event => {
        event.stopPropagation();
        this.props.actions.deleteChecklist(checklist);
    };

    handleEdit = event => {
        event.stopPropagation();
        this.setState({
            openElementDialog: true
        });
    };

    handleShare = checklist => event => {
        event.stopPropagation();
        console.log('Share Checklist', checklist);
    };

    handleOkClick = checklist => event => {
        this.props.actions.updateChecklist(checklist);
        this.setState({
            openElementDialog: false
        });
    };

    onTextInputChange = event => {
        const checklist = Object.assign({}, this.state.checklist);

        checklist.name = event.target.value;

        this.setState({
            checklist: checklist
        });
    };

    handleCloseElementDialog = event => {
        this.setState({
            openElementDialog: false,
            checklist: this.props.checklist
        });
    };

    render() {
        const { classes } = this.props;
        const checklist = this.props.checklist;
        const options = [
            {
                text: 'Delete',
                handleClick: this.handleDelete(checklist)
            },
            {
                text: 'Edit',
                handleClick: this.handleEdit
            },
            {
                text: 'Share',
                handleClick: this.handleShare(checklist)
            }
        ];

        return (
            <React.Fragment>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.checklistName} variant="h6">
                            {checklist.name}
                        </Typography>
                        <MoreButtonBlock options={options} />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        {checklist.items.length > 0 ? (
                            <ItemsList items={checklist.items} />
                        ) : (
                            <Typography align="center" variant="subheading">
                                Checklist is empty.
                            </Typography>
                        )}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ElementDialog
                    name="checklist"
                    handleClose={this.handleCloseElementDialog}
                    open={this.state.openElementDialog}
                    handleOkButtonClick={this.handleOkClick(this.state.checklist)}
                    text={this.state.checklist.name}
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

ChecklistItem.propTypes = {
    checklist: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ChecklistItem));
