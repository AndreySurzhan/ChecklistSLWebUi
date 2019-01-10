import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = ['Edit', 'Delete', 'Share'];

class MoreButton extends React.Component {
    state = {
        anchorEl: null
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div style={{ display: 'inline-block' }}>
                <IconButton aria-label='More' onClick={this.handleClick}>
                    <MoreVertIcon />
                </IconButton>
                <Menu anchorEl={anchorEl} open={open} onClose={this.handleClose}>
                    {options.map(option => (
                        <MenuItem key={option} onClick={this.handleClose}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }
}

export default MoreButton;
