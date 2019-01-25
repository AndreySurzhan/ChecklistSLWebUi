import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const styles = theme => ({
    root: {
        backgroundColor: '#0097A7'
    },
    avatar: {
        margin: '20px',
        width: 80,
        height: 80
    }
});

class UserSummary extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Grid container direction="row" justify="flex-start" alignItems="center" className={classes.root}>
                <Avatar src={this.props.user.avatar || null} className={classes.avatar} alt="User's Profile Summary">
                    {this.props.user.avatar ? null : this.props.user.username.charAt(0)}
                </Avatar>
                <Typography variant="h6">{this.props.user.username}</Typography>
            </Grid>
        );
    }
}

export default withStyles(styles)(UserSummary);
