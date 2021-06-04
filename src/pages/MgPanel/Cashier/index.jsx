import React, {useEffect, useState} from 'react'
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
import {useDispatch, useSelector} from 'react-redux'
export default function Cashier() {
    const classes = useStyles()
    const [search, setSearch] = useState('')
    const {products} = useSelector((state) => state.product)
    const filterProduct = products.filter( product => {
        return product.name.toLowerCase().includes(search.toLowerCase())
    })    
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
                <SearchBarcode setSearch={setSearch}/>
            </div>
            <div className={`product`}>
                <ListProduct data={filterProduct}/>
            </div>
            <Footer/>
        </div>
    )
}



