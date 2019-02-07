import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        paddingTop: theme.spacing.unit / 2,
        paddingBottom: theme.spacing.unit / 2
    }
});

class TextElement extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.root}>
                <Typography variant="h6">
                    {this.props.text}
                </Typography>
                {this.props.children}
            </Card>
        );
    }
}

export default withStyles(styles)(TextElement);
