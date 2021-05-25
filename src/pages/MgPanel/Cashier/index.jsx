import React from 'react'
import Header from '../../../components/Header/Header'
import Footer from './components/footer'
import Categories from './components/categories'
import useStyles from './styles'
export default function Cashier() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Header/>
            <Categories/>
            <Footer/>
        </div>
    )
}


