import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        alignSelf: "center"
    },
    button: {
        margin: theme.spacing.unit / 2,
        padding: theme.spacing.unit / 3
    }
});

class MoreButtonBlock extends React.Component {
    state = {
        anchorEl: null
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleOptionClick = fun => event => {
        fun(event);
        this.handleClose();
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <IconButton
                    className={classes.button}
                    aria-label="More"
                    onClick={this.handleClick}
                >
                    <MoreVertIcon fontSize="small" />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}
                >
                    {this.props.options.map((option, i) => (
                        <MenuItem
                            key={i}
                            onClick={this.handleOptionClick(
                                option.handleClick
                            )}
                        >
                            {option.text}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }
}

export default withStyles(styles)(MoreButtonBlock);
