import React from 'react';
import TextElement from './TextElement';
import MoreButton from './MoreButton';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'inline-flex',
        width: '100%'
    }
});

class Checklist extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <TextElement element={this.props.checklist} />
                <MoreButton />
            </div>
        );
    }
}

export default withStyles(styles)(Checklist);
