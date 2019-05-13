import React from 'react';
import ExpansionPanel from './ExpansionPanel';
import ExpansionPanelSummary from './ExpansionPanelSummary';
import ExpansionPanelDetails from './ExpansionPanelDetails';
import MoreButtonBlock from '../common/containers/MoreButtonBlock';
import ItemsList from '../components/ItemsList';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import Spinner from '../common/components/Spinner';

const borderStyle = '1px solid rgba(0,0,0,.125)';
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
    },
    itemPlaceholder: {
        borderTop: borderStyle,
        minHeight: 48,
        display: 'flex',
        justifyContent: 'center'
    }
});

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ItemInput = withStyles(theme => ({
    error: {
        color: 'red'
    }
}))(InputBase);

const ChecklistItem = ({
    classes,
    checklist,
    moreButtonOptions,
    handleClickAddItem,
    itemText,
    onItemInputChange,
    errors,
    isAddItemApiInProgress
}) => {
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary>
                <Typography className={classes.checklistName} variant="h6">
                    {checklist.name}
                </Typography>
                <MoreButtonBlock options={moreButtonOptions} />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <form className={classes.newItemForm}>
                    <IconButton aria-label="Add New Item Button" onClick={handleClickAddItem}>
                        <PlaylistAddIcon />
                    </IconButton>
                    <ItemInput
                        autoFocus
                        label="Add New Item"
                        className={classes.itemInput}
                        type="text"
                        value={itemText}
                        onChange={onItemInputChange}
                        placeholder={!!errors.newItemForm ? 'Item text should not be empty' : 'Add New Item'}
                        error={!!errors.newItemForm}
                    />
                </form>
                <ItemsList items={checklist.items} />
                {isAddItemApiInProgress ? (
                    <div className={classes.itemPlaceholder}>
                        <Spinner size={24} />
                    </div>
                ) : (
                    undefined
                )}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

ChecklistItem.propTypes = {
    classes: PropTypes.object.isRequired,
    checklist: PropTypes.object.isRequired,
    moreButtonOptions: PropTypes.array.isRequired,
    handleClickAddItem: PropTypes.func.isRequired,
    itemText: PropTypes.string.isRequired,
    onItemInputChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

export default withStyles(styles)(ChecklistItem);
