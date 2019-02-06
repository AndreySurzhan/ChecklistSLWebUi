import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

class CheckboxBlock extends React.Component {
    state = {
        checked: this.props.checked
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        return (
            <Checkbox color="primary" onChange={this.handleChange('checked')} checked={this.state.checked} />
        );
    }
}

export default CheckboxBlock;
