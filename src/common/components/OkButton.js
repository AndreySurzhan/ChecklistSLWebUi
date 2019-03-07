import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Done from '@material-ui/icons/Done';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        alignSelf: "center"
    },
    button: {
        margin: theme.spacing.unit / 4,
        padding: theme.spacing.unit / 3
    }
});

const OkButton = ({classes, handleClick}) => {
    return (
    <div className={classes.root}>
        <IconButton onClick={handleClick} className={classes.button}>
            <Done />
        </IconButton>
    </div>);
};

export default withStyles(styles)(OkButton);