import React, {useEffect, useState} from 'react'
import Header from '../../../components/Header/Header'
import Footer from './components/footer'
import Categories from './components/categories'
import useStyles from './styles'
import SearchBarcode from './components/search'
import ListProduct from './components/listProduct'
// import {fetchProduct,newProduct} from './../../../controllers/_actions/ProductAction'
import {fetchCart,minusCart} from './../../../controllers/_actions/CartAction'
import listNewProduct from './../../../config/collection/product.json'
import './style.css'
import {useProduct} from './../../../hooks'
// import productImg from './../../../assets/images/product.PNG'
import {useDispatch, useSelector} from 'react-redux'
export default function Cashier() {
    const classes = useStyles()
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [products, setProducts] = useProduct(setIsLoading, setError)
    const [search, setSearch] = useState('')
    // const {products} = useSelector((state) => state.product)
    const {transaction} = useSelector((state) => state.payment)
    const filterProduct = products.filter( product => {
        return product.name.toLowerCase().includes(search.toLowerCase())
    })
    const dispatch = useDispatch()
    useEffect(() => {
        setProducts()
    }, [setProducts])
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



