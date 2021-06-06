import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import CropFreeIcon from '@material-ui/icons/CropFree';
import useStyles from './styles'
import CustomModal from './../../../../../components/Modal'
import Barcode from '../barcode';

export default function SearchBarcode({setSearch}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const handleChange = (e) => {
      setSearch(e.target.value)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Product.."
        inputProps={{ 'aria-label': 'search product' }}
        onChange={handleChange}
      />
      <IconButton className={classes.iconButton} aria-label="barcode" onClick={handleOpen}>
        <CropFreeIcon />
      </IconButton> 
      <CustomModal openModal={open} body={<Barcode open={open} close={close => {setOpen(close)}}/>}/>
    </Paper>
  );
}