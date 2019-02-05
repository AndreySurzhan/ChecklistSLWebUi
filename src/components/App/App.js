import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        backgroundColor: '#CFD8DC !important',
        minHeight: '100vh'
    }
});

class App extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div id="clsl-container" className={classes.root}>
                {this.props.children}
            </div>
        );
    }
}

export default withStyles(styles)(App);
