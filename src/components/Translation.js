import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { SupportedLanguages } from '../utils/enums';
import { withStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';

const styles = theme => ({
    root: {
        padding: 0,
        paddingButtom: theme.spacing.unit / 4,
        paddingTop: theme.spacing.unit / 4
    },
    listItemText: {
        paddingLeft: 0
    },
    checked: {
        color: '#adafad'
    }
});

const Translation = ({ classes, translation, checked }) => {
    return (
        <ListItem className={classes.root}>
            <Typography className={`${checked ? classes.checked : ''}`}>
                {SupportedLanguages.getNameByCode(translation.language)}:&nbsp;
            </Typography>
            <ListItemText
                className={classes.listItemText}
                classes={{secondary : checked ? classes.checked : ''}}
                secondary={translation.translation}
            />
        </ListItem>
    );
};

Translation.propTypes = {
    classes: PropTypes.object.isRequired,
    translation: PropTypes.object.isRequired
};

export default withStyles(styles)(Translation);
