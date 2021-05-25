import React from 'react'
import useStyles from './styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import xrisLogo from './../../../assets/images/xris-logo.PNG'
import { TextField } from '@material-ui/core';
import {useHistory} from 'react-router-dom'

export default function SignIn() {
    const history = useHistory()
    const classes = useStyles()
    const handleSubmit = (e) => {
        e.preventDefault()
        history.push('/menu')
    }
    return (
        <div>
             <div className={classes.root}>
                <Card className={classes.card}>  
                    <div className={classes.cardContent}>
                        <CardMedia
                            className={classes.media}
                            image={xrisLogo}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <form className={classes.form} onSubmit={handleSubmit}>
                                <TextField size='small' id="outlined-basic" label="Username" variant="outlined" className={classes.text} />
                                <TextField size='small' id="outlined-basic" label="Password" variant="outlined" className={classes.text}/> 
                                <Button type='submit' variant="contained" className={classes.button}>Login</Button>
                            </form>    
                        </CardContent>
                    </div>                  
                </Card>
             </div>
        </div>
    )
}


