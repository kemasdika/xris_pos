import React,{useEffect} from 'react'
import useStyles from './styles'
import Header from './../../../components/Header/Header'
import ProductSummary from './components/productSummary'
import Summary from './components/summary'
import {useDispatch} from 'react-redux'
import {fetchCart} from './../../../controllers/_actions/CartAction'
export default function Checkout() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCart())
    },[dispatch])
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Header/>
            <ProductSummary/>
            <Summary/>
        </div>
    )
}
