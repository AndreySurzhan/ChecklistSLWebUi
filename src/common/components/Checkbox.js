import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

const CheckboxBlock = ({checked, handleChange}) => {
    return (
        <Checkbox color='default' onChange={handleChange} checked={checked} />
    );
}

CheckboxBlock.propTypes = {
    checked: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default CheckboxBlock;
