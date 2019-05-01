import React from 'react';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import MoreButtonBlock from '../common/containers/MoreButtonBlock';
import ItemsList from '../components/ItemsList';
import Typography from '@material-ui/core/Typography';
import InputBase  from '@material-ui/core/InputBase';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import IconButton from '@material-ui/core/IconButton';
import ElementDialog from '../common/components/ElementDialog';
import { withStyles } from '@material-ui/core/styles';
import * as checklistActions from '../actions/checklistActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

const styles = theme => ({
    checklistName: {
        width: '100%'
    },
    newItemForm: {
        display: 'flex',
        flexDirection: 'row'
    },
    itemInput: {
        width: '100%',
        marginLeft: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit
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
        },
        paddingRight: 0
    },
    content: {
        '&$expanded': {
            margin: '12px 0'
        },
        '&>:last-child': {
            paddingRight: 0
        }
    },
    expanded: {}
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: 0,
        display: 'flex',
        flexDirection: 'column'
    }
}))(MuiExpansionPanelDetails);

class ChecklistItem extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            checklist: Object.assign({}, this.props.checklist),
            item: Object.assign({}, this.props.item),
            openElementDialog: false
        };

        this.handleEdit = this.handleEdit.bind(this);
        this.handleShare = this.handleShare.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleOkClick = this.handleOkClick.bind(this);
        this.onChecklistInputChange = this.onChecklistInputChange.bind(this);
        this.onItemInputChange = this.onItemInputChange.bind(this);
    }

    handleDelete = checklist => event => {
        event.stopPropagation();
        this.props.checklistActions.deleteChecklist(checklist);
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
        this.props.checklistActions.updateChecklist(checklist);
        this.setState({
            openElementDialog: false
        });
    };

    onChecklistInputChange = event => {
        const checklist = Object.assign({}, this.state.checklist);

        checklist.name = event.target.value;

        this.setState({
            checklist: checklist
        });
    };

    onItemInputChange = event => {
        this.setState({
            item: {
                text: event.target.value
            }
        });
    };

    handleCloseElementDialog = event => {
        this.setState({
            openElementDialog: false,
            checklist: this.props.checklist
        });
    };

    handleClickAddItem =  checklist => event => {
        const item = Object.assign({}, this.state.item);

        item.translations = [];
        item.isChecked = false;
        item.checklist = checklist._id;

        this.setState({
            item: item
        });

        this.props.itemActions.addItem(item);

        this.setState({
            item: {
                text: ''
            }
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
                    <ExpansionPanelSummary>
                        <Typography className={classes.checklistName} variant="h6">
                            {checklist.name}
                        </Typography>
                        <MoreButtonBlock options={options} />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <form className={classes.newItemForm}>
                            <IconButton aria-label="Add New Item Button" onClick={this.handleClickAddItem(checklist)}>
                                <PlaylistAddIcon />
                            </IconButton>
                            <InputBase
                                autoFocus
                                label="Add New Item"
                                className={classes.itemInput}
                                type="text"
                                value={this.state.item.text}
                                onChange={this.onItemInputChange}
                                placeholder='Add New Item'
                                />
                        </form>
                        <ItemsList items={checklist.items} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ElementDialog
                    name="checklist"
                    handleClose={this.handleCloseElementDialog}
                    open={this.state.openElementDialog}
                    handleOkButtonClick={this.handleOkClick(this.state.checklist)}
                    text={this.state.checklist.name}
                    handleChange={this.onChecklistInputChange}
                    isNew={false}
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
        item
    };
}

function mapDispatchToProps(dispatch) {
    return {
        checklistActions: bindActionCreators(checklistActions, dispatch),
        itemActions: bindActionCreators(checklistActions, dispatch)
    };
}

ChecklistItem.propTypes = {
    checklist: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    checklistActions: PropTypes.object.isRequired,
    itemActions: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ChecklistItem));
