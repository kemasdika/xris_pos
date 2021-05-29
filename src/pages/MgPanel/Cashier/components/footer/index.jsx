import { Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './sytles'
import memberPic from './../../../../../assets/images/member-pic.PNG'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DetailCart from './../detailCart'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'

export default function Footer() {
    const classes = useStyles()
    const history = useHistory()
    const [state, setState] = React.useState({
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [anchor]: open });
      };
    const onChekout = () => {
        history.push('/checkout')
    }
    return (
        <div className={classes.root}>
            <div className={classes.customerSection}>
                <div className={classes.customerInfo}>
                    <Typography className={classes.customText}>CUSTOMER INFORMATION</Typography>
                    <div className={classes.customerSection}>
                        <img width="60px" src={memberPic} alt=""/>
                        <div>
                            <Typography className={classes.customText1}>Roro Daniela</Typography>
                            <Typography className={classes.customText2}>Gold Member</Typography>
                            <Typography className={classes.customText3}>UNLINK</Typography>
                        </div>
                    </div>
                </div>
                <div className={classes.customerVoucher}>
                    <Typography className={classes.customText} >SELECT VOUCHER</Typography>
                    <Typography className={classes.customText4}>5 VOUCHER</Typography>
                </div>
            </div>
            <div className={classes.cartSection} >
                <div className={classes.cartInfo} >
                    <Typography className={classes.customText}>CART INFORMATION</Typography>
                    <div className={classes.cartSection}>
                        <ShoppingCartIcon className={classes.cartIcon}/>
                        <div className={classes.itemPrice}>
                            <Typography className={classes.customText5}>Total Item (s) 5</Typography>
                            <Typography className={classes.customText5}>75.000,-</Typography>
                        </div>
                    </div>
                </div>
                <div className={classes.checkoutInfo}>
                    <Typography onClick={toggleDrawer('right', true)} className={classes.customButton}>See Detail</Typography>
                    <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
                        {DetailCart('right')}
                    </Drawer>
                    <Typography className={classes.customButton1} onClick={onChekout}>CHECK OUT</Typography>
                </div>
            </div>
        </div>
    )
}

