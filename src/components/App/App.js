import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        backgroundColor: '#CFD8DC',
        minHeight: '100vh'
    }
});

class App extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div id="clsl-container" className={classes.root}>
                <CssBaseline />
                {this.props.children}
            </div>
        );
    }
}

export default withStyles(styles)(App);
