import React from 'react';
import TextElement from '../common/components/TextElement';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreButtonBlock from '../common/containers/MoreButtonBlock';
import ItemsList from '../components/ItemsList';
import Typography from '@material-ui/core/Typography';
import OkButton from '../common/components/OkButton';
import { withStyles } from '@material-ui/core/styles';
import * as checklistActions from '../actions/checklistActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

const styles = theme => ({
    isActive: {
        color: '#FFFFFF',
        backgroundColor: '#455A64'
    }
});


const ExpansionPanel = withStyles({
    root: {
      border: '1px solid rgba(0,0,0,.125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
    },
    expanded: {
      margin: 'auto',
    },
  })(MuiExpansionPanel);
  
  const ExpansionPanelSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0,0,0,.03)',
      borderBottom: '1px solid rgba(0,0,0,.125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(props => <MuiExpansionPanelSummary {...props} />);
  
  ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';
  
  const ExpansionPanelDetails = withStyles(theme => ({
    root: {
      padding: theme.spacing.unit * 2,
    },
  }))(MuiExpansionPanelDetails);
  

class ChecklistItem extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            checklist: Object.assign({}, this.props.checklist),
            editMode: false
        };

        this.handleEdit = this.handleEdit.bind(this);
        this.handleShare = this.handleShare.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleOkClick = this.handleOkClick.bind(this);
        this.onTextInputChange = this.onTextInputChange.bind(this);
    }

    handleDelete = checklist => event => {
        this.props.actions.deleteChecklist(checklist);
    };

    handleEdit = event => {
        this.setState({
            editMode: true
        });
    };

    handleShare = checklist => event => {
        console.log('Share Checklist', checklist);
    };

    handleOkClick = checklist => event => {
        this.props.actions.updateChecklist(checklist);
        this.setState({
            editMode: false
        });
    };

    onTextInputChange = event => {
        const checklist = Object.assign({}, this.state.checklist);

        checklist.name = event.target.value;

        this.setState({
            checklist: checklist
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
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <TextElement
                        handleChange={this.onTextInputChange}
                        editMode={this.state.editMode}
                        text={checklist.name}
                        textOnChange={this.state.checklist.name}
                    />
                    {this.state.editMode ? (
                        <OkButton handleClick={this.handleOkClick(this.state.checklist)} />
                    ) : (
                        <MoreButtonBlock options={options} />
                    )}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {checklist.items.length > 0 ? (
                        <ItemsList items={checklist.items} />
                    ) : (
                        <Typography>Checklist is empty.</Typography>
                    )}
                </ExpansionPanelDetails>
            </ExpansionPanel>
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
