import React from 'react';
import Button from '@material-ui/core/Button';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {},
    button: {}
});

class LogoutButtonBlock extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Button size="small" variant="outlined" onClick={this.props.handleClick} className={classes.button}>
                    <ExitToApp fontSize="small" />
                    Logout
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(LogoutButtonBlock);
