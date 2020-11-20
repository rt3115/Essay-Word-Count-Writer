import React from 'react';
import { TextField } from "@material-ui/core";
import './writer.css';

export const Writer = ( {onChange = () => {}, value} ) => {

    const handleChange = (event) => {
        onChange(event.target.value);
    }

    return (
        <TextField
        className="textField"
        label="Put sentence here"
        multiline
        value={value}
        onChange={handleChange}
        />
    )
}
