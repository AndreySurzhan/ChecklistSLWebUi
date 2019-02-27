import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'inline-flex',
        width: '100%',
        marginBottom: theme.spacing.unit / 2,
        marginTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit / 2,
        paddingLeft: theme.spacing.unit / 2
    },
    button: {
        alignSelf: 'center',
        margin: '10px 5px 0 10px',
        border: '1px solid',
        borderRadius: '4px',
        padding: 5
    },
    input: {
        margin: '0 10px 0 5px',
        width: '100%'
    }
});

const AddNewElement = ({ element, classes }) => {
    return (
        <form id={element.id} className={classes.root}>
            <IconButton
                id={element.buttonId}
                aria-label={element.lable}
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={element.onClickAddElement}
            >
                <PlaylistAdd />
            </IconButton>
            <TextField
                className={classes.input}
                multiline
                id={element.textInputId}
                label={element.lable}
                name={element.name}
                type="text"
                placeholder={element.placeholder}
                value={element.value}
                onChange={element.onTextInputChange}
                margin="normal"
                fullWidth={true}
            />
        </form>
    );
};

AddNewElement.propTypes = {
    classes: PropTypes.object.isRequired,
    element: PropTypes.shape({
        onClickAddElement: PropTypes.func.isRequired,
        onTextInputChange: PropTypes.func.isRequired
    }).isRequired
};

export default withStyles(styles)(AddNewElement);
