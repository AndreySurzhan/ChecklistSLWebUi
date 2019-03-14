import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import LogoutButtonBlock from "./LogoutButtonBlock";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        backgroundColor: "#455A64",
        padding: theme.spacing.unit * 2,
        width: "100%"
    },
    gridRow: {
        display: "inline-flex"
    },
    avatar: {
        alignSelf: "center",
        width: theme.spacing.unit * 10,
        height: theme.spacing.unit * 10
    },
    typography: {
        color: "#FFFFFF",
        alignSelf: "center",
        marginLeft: theme.spacing.unit * 2
    }
});

const UserSummary = ({ classes, user, handleLogoutClick }) => {
    return (
        <div className={classes.root}>
            <div className={classes.gridRow}>
                <Avatar
                    src={user.avatar || null}
                    className={classes.avatar}
                    alt="User's Profile Summary"
                >
                    {user.avatar
                        ? null
                        : user.username.charAt(0)}
                </Avatar>
                <Typography className={classes.typography} variant="h6">
                    {user.username}
                </Typography>
            </div>
            <LogoutButtonBlock handleClick={handleLogoutClick}/>
        </div>
    );
};

export default withStyles(styles)(UserSummary);
