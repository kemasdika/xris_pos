import { Button, Grid, Typography } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import useStyles from './styles'
import CardProduct from './CardProduct'
import './style.css'
import { useSelector} from 'react-redux'
import {useProduct} from './../../../../../hooks'
import listNewProduct from './../../../../../config/collection/product.json'

export default function ListProduct({data}) {
    // const {products} = useSelector((state) => state.product)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [products, setProducts] = useProduct(setIsLoading, setError)
    const classes = useStyles()
    console.log(products,'<<<<<<<<<<<<<')
    return (
        <div className={classes.root}>
            <div className={classes.head}>
                <Typography className={classes.headTitle}>All Product</Typography>
                {/* <Button className={classes.headButton} size= 'small'>see all</Button> */}
            </div>
            <Grid container spacing={3}>
                {
                    data.map((list,idx)=> (
                        <Grid item md={2} xs={6}>
                            <CardProduct key={idx} data={list}/>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}


