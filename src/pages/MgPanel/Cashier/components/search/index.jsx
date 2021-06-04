import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import CropFreeIcon from '@material-ui/icons/CropFree';
import useStyles from './styles'

export default function SearchBarcode({setSearch}) {
  const classes = useStyles();
  const handleChange = (e) => {
      setSearch(e.target.value)
  }
  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Product.."
        inputProps={{ 'aria-label': 'search product' }}
        onChange={handleChange}
      />
      <IconButton className={classes.iconButton} aria-label="barcode">
        <CropFreeIcon />
      </IconButton>
    </Paper>
  );
}