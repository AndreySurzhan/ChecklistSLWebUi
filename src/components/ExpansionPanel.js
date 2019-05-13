
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import { withStyles } from '@material-ui/core/styles';

const borderStyle = '1px solid rgba(0,0,0,.125)';
const styles = theme => ({
    root: {
        border: borderStyle,
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0
        },
        '&:before': {
            display: 'none'
        }
    },
    expanded: {
        margin: 'auto'
    }
});

export default withStyles(styles)(MuiExpansionPanel);
