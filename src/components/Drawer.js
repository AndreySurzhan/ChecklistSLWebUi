import React from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import DrawerList from './DrawerList';
import UserSummary from './UserSummary';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

const Drawer = ({ classes, open, user, buttons, toggleDrawer}) => {
    return (
        <div>
            <SwipeableDrawer open={open} onClose={toggleDrawer} onOpen={toggleDrawer}>
                <UserSummary id="clsl-user-summary-container" user={user} />
                <DrawerList buttons={buttons}/>
            </SwipeableDrawer>
        </div>
    );
};

Drawer.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    buttons: PropTypes.array.isRequired,
    open: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired
};

export default withStyles(styles)(Drawer);
