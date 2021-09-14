import { Divider, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import ListProductSummary from './components/product'
import {rupiah} from './../../../../../helpers/rupiahConverter'
import {useSelector} from 'react-redux'

const textdata = [{label:'email', size:'small',color:'primary', variant:'outlined',name:'email'},
{label:'password', size:'small',color:'secondary', variant:'filled',name:'password'},
{label:'no telpon', size:'small',color:'primary', variant:'standard',name:'notelpon'},
{label:'alamat', size:'small',color:'primary', variant:'outlined',name:'alamat'}]

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
                {/* {
                    textdata.map((list,idx) => (
                        <TextField key={idx} label={list.label} size={list.size} color={list.color} variant={list.variant} name={list.name}></TextField>
                    ))
                } */}
                <Divider variant='fullWidth' className={classes.customDivider}></Divider>
                <div className={classes.subtotal}>
                    <Typography>SUBTOTAL</Typography>
                    <Typography>{rupiah(totalPrice)}</Typography>
                </div>
            </Paper>
        </div>
    )
}

