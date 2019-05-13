import React from 'react';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { withStyles } from '@material-ui/core/styles';

const borderStyle = '1px solid rgba(0,0,0,.125)';
const styles = theme => ({
    root: {
        backgroundColor: 'rgba(0,0,0,.03)',
        borderBottom: borderStyle,
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56
        },
        paddingRight: 0
    },
    content: {
        '&$expanded': {
            margin: '12px 0'
        },
        '&>:last-child': {
            paddingRight: 0
        }
    },
    expanded: {}
});

export default withStyles(styles)(props => <MuiExpansionPanelSummary {...props} />);
