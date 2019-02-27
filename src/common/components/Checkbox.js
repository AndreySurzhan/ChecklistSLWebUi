import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxBlock = ({checked, handleChange}) => {
    return (
        <Checkbox color="primary" onChange={handleChange} checked={checked} />
    );
}

export default CheckboxBlock;
