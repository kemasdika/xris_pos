import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import CardProduct from './CardProduct'
import './style.css'

export default function ListProduct({product}) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.head}>
                <Typography className={classes.headTitle}>{product.listName}</Typography>
                {/* <Button className={classes.headButton} size= 'small'>see all</Button> */}
            </div>
            <Grid container spacing={3}>
                {
                    product.listProduct.map((data,idx)=> (
                        <Grid item md={2} xs={6}>
                            <CardProduct key={idx} data={data}/>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}


