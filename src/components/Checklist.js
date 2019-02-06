import React from 'react';
import TextElement from '../common/components/TextElement';
import MoreButtonBlock from '../common/containers/MoreButtonBlock';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'inline-flex',
        width: '100%',
        marginTop: theme.spacing.unit / 2,
        marginBottom: theme.spacing.unit / 2
    }
});

class Checklist extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <TextElement element={this.props.checklist} />
                <MoreButtonBlock />
            </div>
        );
    }
}

export default withStyles(styles)(Checklist);
