
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        padding: 0,
        display: 'flex',
        flexDirection: 'column'
    }
});

export default withStyles(styles)(MuiExpansionPanelDetails);
