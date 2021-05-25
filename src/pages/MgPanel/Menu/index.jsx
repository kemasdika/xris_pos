import React from 'react'
import Header from './../../../components/Header/Header'
import Card from './components/Cards'
import useStyles from './styles'
import cashierIcon from './../../../assets/icons/cashier-machine.png'
import setting from './../../../assets/icons/setting.png'

const cardList = [
    {
    image: setting,
    title: 'Setting'
    },
    {
    image: cashierIcon,
    title: 'Cashier'
    },
]
export default function Menu() {
    const classes = useStyles()
    return (
        <div>
            <Header/>
            <div className={classes.root}>
                {
                    cardList.map((list, idx) =>(
                        <Card key={idx} list={list}></Card>
                    ))
                }
            </div>
        </div>
    )
}
