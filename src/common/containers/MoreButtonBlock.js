import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PropTypes from 'prop-types';
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
        event.stopPropagation(); //prevent clicking parent
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = event => {
        event.stopPropagation(); //prevent clicking parent
        this.setState({ anchorEl: null });
    };

    handleOptionClick = action => event => {
        action(event);
        this.handleClose(event);
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
                            onClick={this.handleOptionClick(option.handleClick)}
                        >
                            {option.text}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }
}


MoreButtonBlock.propTypes = {
    classes: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired
};

export default withStyles(styles)(MoreButtonBlock);
