import { Typography } from '@material-ui/core'
import React,{useState} from 'react'
import useStyles from './styles'

export default function Categories() {
    const classes = useStyles()
    const categoryList = [
        {name: 'All items'},
        {name: 'Instant Food'},
        {name: 'Beverage'},
        {name: 'Stationary'},
        {name: 'Frozen Food'},
        {name: 'Health'},
        {name: 'Computer'},
        {name: 'Accesories'},
        {name: 'Clothes'},
        {name: 'Kitchen Set'},
    ]
    return (
        <div className={classes.root}>
            {
                categoryList.map((list, idx) => (
                    <Typography key={idx} className={classes.btnCategories}>{list.name}</Typography>
                ))
            }
        </div>
    )
}


