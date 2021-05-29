import React from 'react'
import useStyles from './styles'
import productImg from './../../../../../../../assets/images/product.PNG'
import { Divider, Typography } from '@material-ui/core'
export default function ListProductSummary() {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.root}> 
                <img src={productImg} alt='product' width='70px' height='70px'></img>
                <Typography className={classes.productTitle}>Shampo</Typography>
                <Typography>100.000</Typography>
                <Typography>x1</Typography>
                <Typography>100.000</Typography>
            </div>
            <Divider></Divider>
        </div>
    )
}


