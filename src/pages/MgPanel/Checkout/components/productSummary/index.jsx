import { Divider, Paper, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import ListProductSummary from './components/product'
import {rupiah} from './../../../../../helpers/rupiahConverter'
import {useSelector} from 'react-redux'
export default function ProductSummary() {
    const classes = useStyles()
    const {carts, totalPrice, cartsCount} = useSelector((state) => state.cart )
    return (
        <div className={classes.root}>
            <Paper>
                <Typography>PRODUCT SUMMARY</Typography>
                <Divider variant='fullWidth' className={classes.customDivider}></Divider>
                <div className={classes.listproduct}>
                    {
                        carts.map((list,idx) => (
                            <ListProductSummary key={idx} data={list}/>
                        ))
                    }
                </div>
                <Divider variant='fullWidth' className={classes.customDivider}></Divider>
                <div className={classes.subtotal}>
                    <Typography>SUBTOTAL</Typography>
                    <Typography>{rupiah(totalPrice)}</Typography>
                </div>
            </Paper>
        </div>
    )
}

