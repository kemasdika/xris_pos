import { Divider, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

export default function SummaryCart() {
    const classes = useStyles()
    return (
        <div>
            <div>
                <div className={classes.cartSub} >
                    <Typography>Subtotal</Typography>
                    <Typography>Rp 500.000,-</Typography>
                </div>
                <div className={classes.cartSub}>
                    <Typography>Discount</Typography>
                    <Typography>Rp 0,-</Typography>
                </div>
                <div className={classes.cartSub}>
                    <Typography>Tax 10%</Typography>
                    <Typography>Rp 50.000,-</Typography>
                </div>
            </div>
            <Divider/>
            <div>
                <div className={classes.cartSub} >
                    <Typography className={classes.cartTextTotal}>Total</Typography>
                    <Typography className={classes.cartTextTotal}>Rp 550.000,-</Typography>
                </div>
                <div className={classes.cartSub}>
                    <Typography>Total item 5</Typography>
                    <Typography>Total Quantity 5</Typography>
                </div>
            </div>
        </div>
    )
}
