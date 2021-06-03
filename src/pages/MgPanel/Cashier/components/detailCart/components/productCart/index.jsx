import React,{useEffect} from 'react'
import useStyles from './styles'
import { Divider, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch} from 'react-redux'
import {minusCart, addToCart, removeCart} from './../../../../../../../controllers/_actions/CartAction'
import {rupiah} from './../../../../../../../helpers/rupiahConverter'
export default function ProductDetailCart({data}) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const minCart = () => {
        dispatch(minusCart(data.id))
    }
    const plusCart = () => {
        dispatch(addToCart(data.Product.id))
    }
    const handleRemoveCart = () => {
        dispatch(removeCart(data.id))
    }
    let sumQty = data.Product.price * data.quantity
    return (
        <div>
            <div className={classes.orderProduct}>
                <DeleteIcon onClick={handleRemoveCart} color='error' style={{cursor:'pointer'}}></DeleteIcon>
                <div className={classes.productName}>
                    <Typography className={classes.customText}>{data.Product.name}</Typography>
                    <Typography className={classes.customText1}>@{rupiah(data.Product.price)}</Typography>
                </div>
                <div>
                    <div className={classes.minPlusQty}>
                        <Typography className={classes.minPlus} onClick={minCart}>-</Typography>
                        <Typography className={classes.qtyCount}>{data.quantity}</Typography>
                        <Typography className={classes.minPlus}  onClick={plusCart}>+</Typography>
                    </div>
                    <Typography>{rupiah(sumQty)}</Typography>
                </div>
            </div>
            <Divider/>
        </div>
    )
}


