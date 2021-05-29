import React from 'react'
import Fade from '@material-ui/core/Fade';
import useStyles from './styles'
import { Button, Divider, Paper, TextField, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SummaryCart from './../../../Cashier/components/detailCart/components/summaryCart'
import cashImg from './../../../../../assets/images/cashImg.PNG'
export default function Payment({open,close,openResult}) {
    const classes = useStyles()
    const handlePayment = (e) => {
        e.preventDefault()
        openResult(true);
        close(false)
    }
    const handleClose = () => {
        close(false)
    }
    return (
        <div>

        <Fade in={open}>
            <Paper className={classes.paper}>
                <div className={classes.headerPayment}>
                    <Typography>Payment</Typography>
                    <CloseIcon onClick={handleClose}/>
                </div>
                <div>
                    <Typography className={classes.customText}>Payment Method</Typography>
                    <div className={classes.paymentMethod}>
                        <img src={cashImg} width='40px' alt="" />
                        <Typography className={classes.customText}>Cash Method</Typography>
                        <Typography className={classes.customText1} >Other Payment</Typography>
                    </div>
                </div>
                <div className={classes.customDevider}></div>
                <Typography className={classes.customText}>Payment Summary</Typography>
                <Divider></Divider>
                <SummaryCart></SummaryCart>
                <div className={classes.customDevider}></div>
                <form onSubmit={handlePayment}>
                    <Typography className={classes.customText2}>Cash Amount</Typography>
                    <TextField size='small' id="outlined-basic" className={classes.customInput} variant="outlined"></TextField>
                    <Button className={classes.customButton} type='submit'>Pay</Button>
                </form>
            </Paper>
        </Fade>
        </div>
    )
}
