import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import LogoutButton from "./LogoutButton";
import IconButton from '@material-ui/core/IconButton';
import Language from '@material-ui/icons/Language';
import { withStyles } from "@material-ui/core/styles";
import { PropTypes } from 'prop-types';

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
    },
    languageIcon: {
        float: "right",
        padding: 0
    },
});

const UserSummary = ({ classes, user, handleLogoutClick, handleLanguagesButtonClick }) => {
    return (
        <div className={classes.root}>
            <IconButton 
                className={classes.languageIcon} 
                aria-label="Change Languages"
                id="clsl-change-language-button"
                onClick={handleLanguagesButtonClick}>
                <Language fontSize="large"/>
            </IconButton>
            <div className={classes.gridRow}>
                <Avatar
                    src={user.avatar || null}
                    className={classes.avatar}
                    alt="User's Profile Summary"
                >
                    {user.avatar
                        ? null
                        : user.username.charAt(0).toUpperCase()}
                </Avatar>
                <Typography className={classes.typography} variant="h6">
                    {user.username}
                </Typography>
            </div>
            <LogoutButton handleClick={handleLogoutClick}/>
        </div>
    );
};

UserSummary.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    handleLogoutClick: PropTypes.func.isRequired,
    handleLanguagesButtonClick: PropTypes.func.isRequired
};

export default withStyles(styles)(UserSummary);
