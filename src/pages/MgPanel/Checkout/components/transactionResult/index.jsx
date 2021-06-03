import React from 'react'
import Fade from '@material-ui/core/Fade';
import useStyles from './styles'
import { Button, Divider, Paper, TextField, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SummaryCart from './../../../Cashier/components/detailCart/components/summaryCart'
import {rupiah} from './../../../../../helpers/rupiahConverter'
import {removeCart} from './../../../../../controllers/_actions/CartAction'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
export default function TransactionResult({openResult,closeResult}) {
    const {customerCash} = useSelector((state) => state.payment)
    const {totalAmount, carts} = useSelector((state) => state.cart)
    const history = useHistory()
    const dispatch = useDispatch()
    const change = customerCash - totalAmount
    const classes = useStyles()
    const handleResult = async() => {
        try{
            await carts.map((list) => {
                dispatch(removeCart(list.id))
            })
            history.push('/cashier')
            closeResult(false)
        } catch(err) {
            console.log(err)
        }
    }
    const handleClose = async() => {
        try{
            await carts.map((list) => {
                dispatch(removeCart(list.id))
            })
            history.push('/cashier')
            closeResult(false)
        } catch(err) {
            console.log(err)
        }
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
                <Divider></Divider>
                <div className={classes.customText1}>
                    <Typography>Cash Amount</Typography>
                    <Typography>{rupiah(customerCash)}</Typography>
                </div>
                <div className={classes.customText2}>
                    <Typography>Change</Typography>
                    <Typography>{rupiah(change)}</Typography>
                </div>
                <Button className={classes.customButton} onClick={handleResult}>Done</Button>
            </Paper>
        </Fade>
    )
}
