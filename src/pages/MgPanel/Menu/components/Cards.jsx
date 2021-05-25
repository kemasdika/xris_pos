import React from 'react'
import useStyles from './styles'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useHistory} from 'react-router-dom'

export default function Cards({list}) {
    const classes = useStyles()
    const history = useHistory()
    const handleClick = () => {
        history.push(`/${list.title.toLowerCase()}`)
    }
    return (
        <Card className={classes.root}>
        <CardContent onClick={handleClick}>
            <img src={list.image} alt=""  />
            <Typography className={classes.text}>{list.title}</Typography>
        </CardContent>
      </Card>
    )
}
