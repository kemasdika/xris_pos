import React from 'react'
import useStyles from './styles'
import Header from './../../../components/Header/Header'
import ProductSummary from './components/productSummary'
import Summary from './components/summary'
export default function Checkout() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Header/>
            <ProductSummary/>
            <Summary/>
        </div>
    )
}
