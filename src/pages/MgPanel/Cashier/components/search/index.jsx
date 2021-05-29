import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CropFreeIcon from '@material-ui/icons/CropFree';
import DirectionsIcon from '@material-ui/icons/Directions';
import useStyles from './styles'

export default function SearchBarcode() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Product.."
        inputProps={{ 'aria-label': 'search product' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <CropFreeIcon />
      </IconButton>
    </Paper>
  );
}