import React from 'react'
import useStyles from './styles'
import { Divider, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
export default function ProductDetailCart() {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.orderProduct}>
                <DeleteIcon color='error'></DeleteIcon>
                <div className={classes.productName}>
                    <Typography className={classes.customText}>Shampooo</Typography>
                    <Typography className={classes.customText1}>@100.000</Typography>
                </div>
                <div>
                    <div className={classes.minPlusQty}>
                        <Typography className={classes.minPlus}>-</Typography>
                        <Typography className={classes.qtyCount}>1</Typography>
                        <Typography className={classes.minPlus}>+</Typography>
                    </div>
                    <Typography>100.000</Typography>
                </div>
            </div>
            <Divider/>
        </div>
    )
}


