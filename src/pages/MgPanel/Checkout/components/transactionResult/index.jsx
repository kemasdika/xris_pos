import React from 'react'
import Fade from '@material-ui/core/Fade';
import useStyles from './styles'
import { Button, Divider, Paper, TextField, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SummaryCart from './../../../Cashier/components/detailCart/components/summaryCart'
import cashImg from './../../../../../assets/images/cashImg.PNG'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

export default function TransactionResult({openResult,closeResult}) {
    const classes = useStyles()
    const handleResult = (e) => {
        e.preventDefault()
        closeResult(false)
    }
    const handleClose = () => {
        closeResult(false)
    }
    return (
        <Fade in={openResult}>
            <Paper className={classes.paper}>
                <div className={classes.headerPayment}>
                    <Typography>Payment</Typography>
                    <CloseIcon onClick={handleClose}/>
                </div>
                <Typography className={classes.customText}>Payment Summary</Typography>
                <Divider></Divider>
                <SummaryCart></SummaryCart>
                <div className={classes.customDevider}></div>
                <Button className={classes.customButton} onClick={handleResult}>Done</Button>
            </Paper>
        </Fade>
    )
}
