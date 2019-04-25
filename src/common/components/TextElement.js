import React from "react";
import Typography from "@material-ui/core/Typography";
import InputBase  from '@material-ui/core/InputBase';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        width: "100%",
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        paddingTop: theme.spacing.unit / 2,
        paddingBottom: theme.spacing.unit / 2
    },
    input: {
        paddingTop: theme.spacing.unit / 1.5,
        paddingBottom: theme.spacing.unit / 2,
        fontSize: 20
    }
});

const renderTestField = (handleChange, textOnChange, className) => {
    return (<InputBase
        onClick={(event) => {event.stopPropagation()}}
        className={className}
        multiline
        type="text"
        value={textOnChange}
        onChange={handleChange}
        autoFocus
        fullWidth={true}
    />)
}

const TextElement = ({classes, textOnChange, text, children, handleChange, editMode}) => {
    return (
        <div className={classes.root}>
            {editMode ? renderTestField(handleChange, textOnChange, classes.input): <Typography variant="h6">{text}</Typography>}
            {children}
        </div>
    );
};

TextElement.propTypes = {
    classes: PropTypes.object.isRequired,
    textOnChange: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    editMode: PropTypes.bool.isRequired
};

export default withStyles(styles)(TextElement);
