import { Typography } from '@material-ui/core'
import React,{useState} from 'react'
import useStyles from './sytles'
import memberPic from './../../../../../assets/images/member-pic.PNG'
import guestPic from './../../../../../assets/images/guest.PNG'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DetailCart from './../detailCart'
import Drawer from '@material-ui/core/Drawer';
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {rupiah} from './../../../../../helpers/rupiahConverter'
import CustomModal from './../../../../../components/Modal'
import Voucher from '../voucher'
import Customer from './../../../Customer'
export default function Footer() {
    const classes = useStyles()
    const history = useHistory()
    const {totalPrice, cartsCount} = useSelector((state) => state.cart)
    const [open, setOpen] = useState(false)
    const [link, setLink] = useState(false)
    const [customer, setCustomer] = useState({
        'name': 'Guest',
        'image': guestPic,
        'member': 'Non Member',
        'link': 'LINK'
    },
    )
    const [state, setState] = React.useState({
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [anchor]: open });
      };
    const onChekout = () => {
        history.push('/checkout')
    }
    const handleOpen = () => {
        setOpen(true)
    }
    const handleOpenLink = () => {
        console.log('ini link')
        if(customer.link === 'LINK'){
            setLink(true)
        }else {
            setCustomer({
                'name': 'Guest',
                'image': guestPic,
                'member': 'Non Member',
                'link': 'LINK'
            })
        }
    }
    return (
        <div className={classes.root}>
            <div className={classes.customerSection}>
                <div className={classes.customerInfo}>
                    <Typography className={classes.customText}>CUSTOMER INFORMATION</Typography>
                    <div className={classes.customerSection}>
                        <img width="60px" src={customer.image} alt=""/>
                        <div>
                            <Typography className={classes.customText1}>{customer.name}</Typography>
                            <Typography className={classes.customText2}>{customer.member}</Typography>
                            <Typography className={classes.customText3} onClick={handleOpenLink}>{customer.link}</Typography>
                        </div>
                    </div>
                </div>
                <div className={classes.customerVoucher}>
                    <Typography className={classes.customText} >SELECT VOUCHER</Typography>
                    <Typography className={classes.customText4} onClick={handleOpen}>0 VOUCHER</Typography>
                </div>
            </div>
            <div className={classes.cartSection} >
                <div className={classes.cartInfo} >
                    <Typography className={classes.customText}>CART INFORMATION</Typography>
                    <div className={classes.cartSection}>
                        <ShoppingCartIcon className={classes.cartIcon}/>
                        <div className={classes.itemPrice}>
                            <Typography className={classes.customText5}>Total Item (s) {cartsCount}</Typography>
                            <Typography className={classes.customText5}>{rupiah(totalPrice)}</Typography>
                        </div>
                    </div>
                </div>
                <div className={classes.checkoutInfo}>
                    <Typography onClick={toggleDrawer('right', true)} className={classes.customButton}>See Detail</Typography>
                    <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
                        <DetailCart anchor={'right'} close={close => {setState(close)}}/>
                    </Drawer>
                    <Typography className={classes.customButton1} onClick={onChekout}>CHECK OUT</Typography>
                </div>
            </div>  
            <CustomModal openModal={open} body={<Voucher open={open} close={close => {setOpen(close)}}/>} />
            <CustomModal openModal={link} body={<Customer open={link} close={close => {setLink(close)}} member={member => {setCustomer(member)}}/>} />
        </div>
    )
}

