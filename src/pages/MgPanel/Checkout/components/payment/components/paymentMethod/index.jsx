import React from 'react'
import Fade from '@material-ui/core/Fade';
import useStyles from './styles'
import CloseIcon from '@material-ui/icons/Close';
import { Paper, Typography,Divider } from '@material-ui/core';
import cashImage from './../../../../../../../assets/images/cashImg.PNG'
import visaImage from './../../../../../../../assets/images/visa.PNG'
import gopayImage from './../../../../../../../assets/images/gopay.png'
export default function PaymentMethod({open, close}) {
    const classes = useStyles()
    const handleClose = () => {
        close(false)
    }
    const paymentList = [
        {image: cashImage,name: 'Cash',method: true},
        {image: visaImage,name: 'Credit or Debit',method: false},
        {image: gopayImage,name: 'Go Pay',method: false},
    ]
    return (
        <div>
        <Fade in={open}>
            <Paper className={classes.paper}>
                <div className={classes.headerVoucher}>
                    <Typography>SELECT PAYMENT METHOD</Typography>
                    <CloseIcon onClick={handleClose}/>
                </div>
                <Divider></Divider>
                {
                    paymentList.map((list,idx) => (
                    <div key={idx} className={classes.paymentMethod}>
                        {
                            list.method ?
                            <>
                                <img src={list.image} width='40px' alt="" onClick={handleClose}/>
                                <Typography className={classes.customTextMethod} onClick={handleClose}>{list.name}</Typography>
                            </> :
                            <>
                                <img src={list.image} className={classes.imagePayment} width='40px' alt="" />
                                <Typography className={classes.customText}>{list.name}</Typography>
                            </>
                        }
                        <Divider></Divider>
                    </div>
                    ))
                }
            </Paper>
        </Fade>
        </div>
    )
}


