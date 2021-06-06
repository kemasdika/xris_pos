import React,{useState} from 'react'
import Fade from '@material-ui/core/Fade';
import useStyles from './styles'
import { Button, Divider, Paper, TextField, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SummaryCart from './../../../Cashier/components/detailCart/components/summaryCart'
import cashImg from './../../../../../assets/images/cashImg.PNG'
import {customerCash} from './../../../../../controllers/_actions/PaymentAction'
import {useDispatch, useSelector} from 'react-redux'
import CustomModal from './../../../../../components/Modal'
import PaymentMethod from './components/paymentMethod'
export default function Payment({open,close,openResult}) {
    const {totalAmount} = useSelector((state) => state.cart)
    const classes = useStyles()
    const dispatch = useDispatch()
    const [amount,setAmount] = useState(0)
    const [error, setError] = useState('')
    const [openPayment, setOpenPayment] = useState(false)
    const [state, setState] = React.useState({
        right: false,
      });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [anchor]: open });
      };
    const handlePayment = (e) => {
        e.preventDefault()
        if(amount < totalAmount || amount === 0) {
            setError('amount is less than total amount')
        }else if(totalAmount === 0){
            setError('no item to pay')
        }else {
            openResult(true);
            dispatch(customerCash(amount))
            close(false)
        }
    }
    const handleClose = () => {
        close(false)
    }
    const handleChange = (e) => {
        console.log(e.target.value)
        setAmount(e.target.value)
    }
    const handleOpen = () => {
        setOpenPayment(true)
    }
    return (
        <div>

        <Fade in={open}>
            <Paper className={classes.paper}>
                <div className={classes.headerPayment}>
                    <Typography>Payment</Typography>
                    <CloseIcon onClick={handleClose}/>
                </div>
                <div>
                    <Typography className={classes.customText}>Payment Method</Typography>
                    <div className={classes.paymentMethod}>
                        <img src={cashImg} width='40px' alt="" />
                        <Typography className={classes.customText}>Cash Method</Typography>
                        <Typography className={classes.customText1} onClick={handleOpen} >Other Payment</Typography>
                    </div>
                </div>
                <div className={classes.customDevider}></div>
                <Typography className={classes.customText}>Payment Summary</Typography>
                <Divider></Divider>
                <SummaryCart></SummaryCart>
                <div className={classes.customDevider}></div>
                <form onSubmit={handlePayment}>
                    <Typography className={classes.customText2}>Cash Amount</Typography>
                    <TextField type='number' size='small' id="outlined-basic" onChange={handleChange} className={classes.customInput} variant="outlined"></TextField>
                    {
                        error !== '' ?
                        <Typography color="error">{error}</Typography> : ''
                    }
                    <Button className={classes.customButton} type='submit'>Pay</Button>
                </form>
            </Paper>
        </Fade>
        <CustomModal openModal={openPayment} body={<PaymentMethod open={openPayment} close={close => {setOpenPayment(close)}}/>} />
        </div>
    )
}
