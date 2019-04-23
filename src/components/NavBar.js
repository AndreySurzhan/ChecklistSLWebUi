import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Drawer from './Drawer';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: "#455A64"
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    title: {}
});

const NavBar = ({classes, user, toggleDrawer, openDrawer, drawerOptions}) => {
        return (
            <div>
                <AppBar position="static" className={classes.root}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                            <MenuIcon onClick={toggleDrawer} />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            ChecklistSL
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer open={openDrawer} buttons={drawerOptions} user={user} toggleDrawer={toggleDrawer}/>
            </div>
        );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
    openDrawer: PropTypes.bool.isRequired,
    drawerOptions: PropTypes.array.isRequired
};

export default withStyles(styles)(NavBar);
