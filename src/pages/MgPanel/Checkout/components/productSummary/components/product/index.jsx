import React from 'react'
import useStyles from './styles'
import { Divider, Typography } from '@material-ui/core'
import {rupiah} from './../../../../../../../helpers/rupiahConverter'
export default function ListProductSummary({data}) {
    const classes = useStyles()
    const sumQty = data.Product.price*data.quantity
    return (
        <div>
            <div className={classes.root}> 
                <img src={data.Product.image_url} alt='product' width='70px' height='70px'></img>
                <Typography className={classes.productTitle}>{data.Product.name}</Typography>
                <Typography>{rupiah(data.Product.price)}</Typography>
                <Typography>x{data.quantity}</Typography>
                <Typography>{rupiah(sumQty)}</Typography>
            </div>
            <Divider></Divider>
        </div>
    )
}


