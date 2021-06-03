import React, {useEffect} from 'react'
import Header from '../../../components/Header/Header'
import Footer from './components/footer'
import Categories from './components/categories'
import useStyles from './styles'
import SearchBarcode from './components/search'
import ListProduct from './components/listProduct'
import {fetchProduct} from './../../../controllers/_actions/ProductAction'
import {fetchCart,minusCart} from './../../../controllers/_actions/CartAction'
import './style.css'
// import productImg from './../../../assets/images/product.PNG'
import {useDispatch} from 'react-redux'
export default function Cashier() {
    const classes = useStyles()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchCart())
    }, [minusCart])
    return (
        <div className={classes.root}>
            <Header/>
            <div className={classes.category}>
                <Categories/>
                <SearchBarcode/>
            </div>
            <div className={`product`}>
                <ListProduct/>
            </div>
            <Footer/>
        </div>
    )
}



