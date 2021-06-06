import React, {useState,useEffect} from 'react'
import useStyles from './styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import xrisLogo from './../../../assets/images/xris-logo.PNG'
import { TextField, Typography } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import {login} from './../../../controllers/_actions/UserAction'
import Loader from './../../../components/Loading'

export default function SignIn() {
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles()
    const {isLogin, isLoading} = useSelector((state) => state.user)
    const [state, setState] = useState({
        username: "",
        password: ""
    })
    const [error,setError] = useState('')
    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
    }
    useEffect(() => {
        isLogin ? history.push('/menu') : history.push('/login')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogin])
    const handleSubmit = (e) => {
        e.preventDefault()
        if(state.username === '') {
            return setError('please type your name')
        }else if(state.password === '') {
            return setError('please type your password')
        }
        dispatch(login(state))
        history.push('/menu')
    }

    return (
        <div>
            {isLoading &&<Loader></Loader>}
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
                                <TextField name='username' size='small' id="outlined-basic" label="Username" variant="outlined" className={classes.text} onChange={handleChange}/>
                                <TextField type='password' name='password' size='small' id="outlined-basic" label="Password" variant="outlined" className={classes.text} onChange={handleChange}/> 
                                {
                                    error !== null ? <Typography color='error'>{error}</Typography> : ''
                                }
                                <Button type='submit' variant="contained" className={classes.button}>Login</Button>
                            </form>    
                        </CardContent>
                    </div>                  
                </Card>
             </div>
        </div>
    )
}


