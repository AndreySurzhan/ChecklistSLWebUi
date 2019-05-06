import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress  from '@material-ui/core/CircularProgress';

const styles = {
    root: { 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

const ProgressBar = props => {
    const { classes, ...others } = props;
    
    return (
        <div className={classes.root}>
            <CircularProgress {...others}/>
        </div>
    );
};

ProgressBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProgressBar);
