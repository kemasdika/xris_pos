import React,{useEffect} from 'react'
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
export default function DetailCart({anchor}) { 
    const dispatch = useDispatch()
    const {carts} = useSelector((state) => state.cart)
    const classes = useStyles()
    const history = useHistory()
    const [state, setState] = React.useState({
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
    return (
        <div className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}
        >
            <Typography className={classes.customText}>CURRENT ORDER (4)</Typography>
            <Divider variant='fullWidth' className={classes.customDivider}></Divider>
            <div className={classes.orderIdSection}>
                <Typography>Order ID #123123</Typography>
                <Typography>Rabu, 27 Mei 2021 | 18:30</Typography>
            </div>
            <Divider variant='fullWidth' className={classes.customDivider}></Divider>
            <div className={``}>
                {
                    carts.map((list, idx)=> (
                        <ProductDetailCart key={idx} data={list}/>
                    ))
                }
            </div>
            <Divider variant='fullWidth' className={classes.customDivider}></Divider>
            <SummaryCart/>
            <div className={classes.orderProduct}>
                <Typography className={classes.customButton}>Add More</Typography>
                <Typography className={classes.customButton1} onClick={goToCheckout}>CHECK OUT</Typography>
            </div>
      </div>
    )
}

