import React from 'react'
import Header from '../../../components/Header/Header'
import Footer from './components/footer'
import Categories from './components/categories'
import useStyles from './styles'
import SearchBarcode from './components/search'
import ListProduct from './components/listProduct'
import './style.css'
import productImg from './../../../assets/images/product.PNG'
const list = [{
    listName: 'All Product',
    listProduct: [{
        name: 'Product Name',
        inStock: 30,
        price: 15000,
        image: `${productImg}`
    },{
        name: 'Product Name',
        inStock: 30,
        price: 15000,
        image: `${productImg}`
    },{
        name: 'Product Name',
        inStock: 30,
        price: 15000,
        image: `${productImg}`
    },{
        name: 'Product Name',
        inStock: 30,
        price: 15000,
        image: `${productImg}`
    },{
        name: 'Product Name',
        inStock: 30,
        price: 15000,
        image: `${productImg}`
    },{
        name: 'Product Name',
        inStock: 30,
        price: 15000,
        image: `${productImg}`
    },{
        name: 'Product Name',
        inStock: 30,
        price: 15000,
        image: `${productImg}`
    },{
        name: 'Product Name',
        inStock: 30,
        price: 15000,
        image: `${productImg}`
    },{
        name: 'Product Name',
        inStock: 30,
        price: 15000,
        image: `${productImg}`
    },{
        name: 'Product Name',
        inStock: 30,
        price: 15000,
        image: `${productImg}`
    }]
}]

export default function Cashier() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Header/>
            <div className={classes.category}>
                <Categories/>
                <SearchBarcode/>
            </div>
            <div className={`product`}>
                {
                    list.map((product,idx)=> (
                        <ListProduct key={idx} product={product}/>
                    ))
                }
            </div>
            <Footer/>
        </div>
    )
}


