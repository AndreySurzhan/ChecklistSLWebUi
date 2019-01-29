import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%'
    },
    typography: {
        margin: '0 5px 0 5px'
    }
});

class TextElement extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.root}>
                <Typography variant="h6" className={classes.typography}>
                    {this.props.element.text || this.props.element.name}
                </Typography>
                {this.props.children}
            </Card>
        );
    }
}

export default withStyles(styles)(TextElement);
