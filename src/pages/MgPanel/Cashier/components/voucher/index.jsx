import React from 'react'
import Fade from '@material-ui/core/Fade';
import useStyles from './styles'
import CloseIcon from '@material-ui/icons/Close';
import { Paper, Typography,Divider } from '@material-ui/core';
export default function Voucher({open, close}) {
    const classes = useStyles()
    const handleClose = () => {
        close(false)
    }
    return (
        <div>
        <Fade in={open}>
            <Paper className={classes.paper}>
                <div className={classes.headerVoucher}>
                    <Typography>SELECT VOUCHER</Typography>
                    <CloseIcon onClick={handleClose}/>
                </div>
                <Divider></Divider>
                <Typography className={classes.customText}>NO VOUCHER AVAILABLE</Typography>
            </Paper>
        </Fade>
        </div>
    )
}


