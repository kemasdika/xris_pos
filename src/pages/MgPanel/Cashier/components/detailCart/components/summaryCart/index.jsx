import { Divider, Typography } from '@material-ui/core'
import React,{useEffect} from 'react'
import useStyles from './styles'
import {useSelector,useDispatch} from 'react-redux'
import './../../../../../../../helpers/sumQuantity'
import {rupiah} from './../../../../../../../helpers/rupiahConverter'
import {totalAmount} from './../../../../../../../controllers/_actions/CartAction'
export default function SummaryCart() {
    const {carts,totalPrice,cartsCount } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const classes = useStyles()
    let tax = totalPrice*10/100
    let total = totalPrice + tax
    useEffect(() => {
        dispatch(totalAmount(total))
    },[total])
    return (
        <div>
            <div>
                <div className={classes.cartSub} >
                    <Typography>Subtotal</Typography>
                    <Typography>{rupiah(totalPrice)}</Typography>
                </div>
                <div className={classes.cartSub}>
                    <Typography>Discount</Typography>
                    <Typography>Rp 0,-</Typography>
                </div>
                <div className={classes.cartSub}>
                    <Typography>Tax 10%</Typography>
                    <Typography>{rupiah(tax)}</Typography>
                </div>
            </div>
            <Divider/>
            <div>
                <div className={classes.cartSub} >
                    <Typography className={classes.cartTextTotal}>Total</Typography>
                    <Typography className={classes.cartTextTotal}>{rupiah(total)}</Typography>
                </div>
                <div className={classes.cartSub}>
                    <Typography>Total item {cartsCount}</Typography>
                    <Typography>Total Quantity {carts.sum('quantity')}</Typography>
                </div>
            </div>
        </div>
    )
}
