import React from 'react';
import Button from '@material-ui/core/Button';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { withStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';

const styles = theme => ({
    root: { marginTop: theme.spacing.unit * 2 },
    button: {}
});

const LogoutButton = ({ classes, handleClick }) => {
    return (
        <div className={classes.root}>
            <Button size="small" variant="outlined" onClick={handleClick} className={classes.button}>
                <ExitToApp fontSize="small" />
                Logout
            </Button>
        </div>
    );
};

LogoutButton.propTypes = {
    classes: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default withStyles(styles)(LogoutButton);
