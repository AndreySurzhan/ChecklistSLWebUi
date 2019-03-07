import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import InputBase  from '@material-ui/core/InputBase';
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

const renderTestField = (handleChange, text, className) => {
    return (<InputBase
        onClick={(event) => {event.stopPropagation()}}
        className={className}
        multiline
        type="text"
        value={text}
        onChange={handleChange}
        autoFocus
        fullWidth={true}
    />)
}

const TextElement = ({ className, classes, text, children, handleChange, editMode}) => {
    return (
        <Card className={[classes.root, className].join(' ')}>
            {editMode ? renderTestField(handleChange, text, classes.input): <Typography variant="h6">{text}</Typography>}
            {children}
        </Card>
    );
};

export default withStyles(styles)(TextElement);
