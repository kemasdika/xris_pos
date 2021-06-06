import React,{useEffect, useState} from 'react'
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';
import useStyles from './styles'
import { Typography } from '@material-ui/core';
import ProductDetailCart from './components/productCart'
import SummaryCart from './components/summaryCart'
import {useHistory} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {fetchCart} from './../../../../../controllers/_actions/CartAction'
import './style.css'
import { v4 as uuidv4 } from 'uuid';
import Clock from './../../../../../components/Clock'
export default function DetailCart({anchor,close}) { 
    const dispatch = useDispatch()
    const [orderId, setOrderId] = useState(uuidv4().slice(0, 8))
    const {carts, cartsCount} = useSelector((state) => state.cart)
    const classes = useStyles()
    const history = useHistory()
    const [state, setState] = useState({
        right: false,
      });
    useEffect(() => {
        dispatch(fetchCart())
    }, [])
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    const goToCheckout = () => {
        history.push('/checkout')
    }
    const handleClose = () => {
        close({right:false})
    }
    return (
        <div className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}
        >
            <Typography className={classes.customText}>CURRENT ORDER ({cartsCount})</Typography>
            <Divider variant='fullWidth' className={classes.customDivider}></Divider>
            <div className={classes.orderIdSection}>
                <Typography>Order ID #{orderId}</Typography>
                <Typography>
                    <Clock/>
                </Typography>
            </div>
            <Divider variant='fullWidth' className={classes.customDivider}></Divider>
            <div className={classes.products}>
                {
                    carts.map((list, idx)=> (
                        <ProductDetailCart key={idx} data={list}/>
                    ))
                }
            </div>
            <Divider variant='fullWidth' className={classes.customDivider}></Divider>
            <div className={classes.summary}>
                <SummaryCart/>
                <div className={classes.orderProduct}>
                    <Typography className={classes.customButton} onClick={handleClose}  >Add More</Typography>
                    <Typography className={classes.customButton1} onClick={goToCheckout}>CHECK OUT</Typography>
                </div>
            </div>
      </div>
    )
}

