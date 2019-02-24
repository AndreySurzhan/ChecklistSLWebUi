import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        width: "100%",
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        paddingTop: theme.spacing.unit / 2,
        paddingBottom: theme.spacing.unit / 2
    }
});

const TextElement = ({ classes, text, children }) => {
    return (
        <Card className={classes.root}>
            <Typography variant="h6">{text}</Typography>
            {children}
        </Card>
    );
};

export default withStyles(styles)(TextElement);
