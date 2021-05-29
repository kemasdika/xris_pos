import { Divider, Paper, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import ListProductSummary from './components/product'
export default function ProductSummary() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Paper>
                <Typography>PRODUCT SUMMARY</Typography>
                <Divider variant='fullWidth' className={classes.customDivider}></Divider>
                <div className={classes.listproduct}>
                    {
                        [1,2,3,4,5].map((list,idx) => (
                            <ListProductSummary key={idx}/>
                        ))
                    }
                </div>
                <Divider variant='fullWidth' className={classes.customDivider}></Divider>
                <div className={classes.subtotal}>
                    <Typography>SUBTOTAL</Typography>
                    <Typography>Rp. 500.000</Typography>
                </div>
            </Paper>
        </div>
    )
}

