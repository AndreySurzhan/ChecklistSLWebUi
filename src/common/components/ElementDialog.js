import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

const ElementDialog = ({ name, classes, open, handleOkButtonClick, handleClose, isNew, text, handleChange, errors }) => {
    return (
        <Dialog
            onBackdropClick={handleClose}
            onEscapeKeyDown={handleClose}
            disableEscapeKeyDown={false}
            disableBackdropClick={false}
            open={open}
            aria-labelledby={`clsl-form-dialog-${name}`}
        >
            <DialogTitle id={`clsl-form-title-${name}`}>{isNew ? `Add new ${name}` : `Change ${name}`}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id={`clsl-form-input-${name}`}
                    label={isNew ? `New ${name}` : `Change ${name}`}
                    type="text"
                    fullWidth
                    value={text}
                    onChange={handleChange}
                    error={!!errors.modalInput}
                    helperText = {errors.modalInput} 
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleOkButtonClick} color="primary">
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
};

ElementDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    handleOkButtonClick: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    isNew: PropTypes.bool.isRequired
};

export default withStyles(styles)(ElementDialog);
