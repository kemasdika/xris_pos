import { Divider, Paper, Typography } from '@material-ui/core'
import React,{useState} from 'react'
import useStyles from './styles'
import SummaryCart from './../../../Cashier/components/detailCart/components/summaryCart'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Payment from './../payment'
import TransactionResult from './../transactionResult'
import {useHistory} from 'react-router-dom'
import {removeCart} from './../../../../../controllers/_actions/CartAction'
import {useSelector,useDispatch} from 'react-redux'

export default function Summary() {
    const history = useHistory()
    const classes = useStyles()
    const [open, setOpen] = useState(false);
    const [openResult, setOpenResult] = useState(false);
    const {carts} = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const handleCloseResult = () => {
        setOpenResult(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleToProduct = () => {
        history.push('/cashier')
    };
    const handleCancelTransaction = async() => {
        try{
            await carts.map((list) => {
                dispatch(removeCart(list.id))
            })
            history.push('/cashier')
        } catch(err) {
            console.log(err)
        }
    }
    return (
        <div className={classes.root}>
            <Paper>
                <Typography>SUMMARY</Typography>
                <Divider variant='fullWidth' className={classes.customDivider}></Divider>
                <div className={classes.orderProduct}>
                    <Typography>Order ID #193421</Typography>
                    <Typography>Rabu, 8 Jan 2021 | 18:30</Typography>
                </div>
                <Divider variant='fullWidth' className={classes.customDivider}></Divider>
                <SummaryCart/>
                <Typography className={classes.customButton} onClick={handleOpen} >SELECT PAYMENT</Typography>
                <Typography className={classes.customButton1} onClick={handleToProduct}>Add More Product</Typography>
                <Typography className={classes.customButton2} onClick={handleCancelTransaction}>Cancel Transaction</Typography>
            </Paper>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Payment open={open} close={close => setOpen(close) } openResult={open => setOpenResult(open)}/>
            </Modal>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openResult}
                onClose={handleCloseResult}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <TransactionResult openResult={openResult} closeResult={closeResult => setOpenResult(closeResult)}/>
            </Modal>
        </div>
    )
}
