import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: 250
    }
});

const DrawerList = ({ classes, buttons }) => {
    return (
        <div className={classes.root}>
            <List>
                {buttons.map((buttonOption, index) => (
                    <ListItem button key={buttonOption.text} onClick={buttonOption.handleClick}>
                        <ListItemText primary={buttonOption.text} />
                        <ListItemIcon>{buttonOption.icon}</ListItemIcon>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

DrawerList.propTypes = {
    classes: PropTypes.object.isRequired,
    buttons: PropTypes.array.isRequired
};

export default withStyles(styles)(DrawerList);
