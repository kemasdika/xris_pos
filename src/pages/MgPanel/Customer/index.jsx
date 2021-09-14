import React,{useState} from 'react'
import Fade from '@material-ui/core/Fade';
import useStyles from './styles'
import CloseIcon from '@material-ui/icons/Close';
import memberPic from './../../../assets/images/member-pic.PNG'
import { Paper, Typography,Divider, TextField } from '@material-ui/core';
export default function Customer({open, close,member}) {
    const classes = useStyles()
    const [customerCode, setCustomerCode] = useState('')
    const [error, setError] = useState('')
    const handleClose = () => {
        close(false)
    }
    const handleChange = (e) => {
        setCustomerCode(e.target.value)
    }
    const handleSubmit = () => {
        if(customerCode !== '1011') {
            setError('incorect cutomer code or phone number')
        } else {
            setError('')
            close(false)
            member({
                'name': 'Roro Daniela',
                'image': memberPic,
                'member': 'Gold Member',
                'link': 'UNLINK' 
            })
        }
    }
    return (
        <div>
        <Fade in={open}>
            <Paper className={classes.paper}>
                <div className={classes.headerVoucher}>
                    <div></div>
                    <CloseIcon onClick={handleClose}/>
                </div>
                <Typography className={classes.customText}>Link Customer</Typography>
                <Typography className={classes.customText1}>Insert registered customer code or scan customer QR</Typography>
                <TextField onChange={handleChange} variant='outlined' size="small" label='Customer Code or Phone Number'></TextField>
                {error !== '' &&
                <Typography color='error'>{error}</Typography>
                }
                <Typography onClick={handleSubmit} className={classes.customButton}>Link Customer</Typography>
                <Typography className={classes.customButton1}>+ Register New Customer</Typography>
            </Paper>
        </Fade>
        </div>
    )
}



