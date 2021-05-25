import { Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './sytles'
import memberPic from './../../../../../assets/images/member-pic.PNG'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
export default function Footer() {
    const classes = useStyles()
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
                    <Typography className={classes.customButton}>See Detail</Typography>
                    <Typography className={classes.customButton1}>CHECK OUT</Typography>
                </div>
            </div>
        </div>
    )
}

