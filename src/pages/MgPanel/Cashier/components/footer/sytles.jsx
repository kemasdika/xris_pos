import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    maxWidth: '100vw',
    marginTop: '85vh',
    maxHeight: '15vh',
    width: '100vw',
    height: '15vh',
    background: '#ffffff',
    position: 'fixed',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 -5px 15px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)'
  },
  customerSection: {
      display: 'flex',
      alignItems: 'center'
  },
  customerInfo: {
    marginLeft: '1rem'
  },
  customText: {
    color: '#B8BDC3',
    fontSize: '15px'
  },
  customText1: {
    fontSize: '15px',
    fontWeight: '900',
    color: '#222831',
  },
  customText2: {
    fontSize: '11px',
    fontWeight: '900',
    color: '#222831',
    background: '#FDA71C',
    textAlign: 'center',
    padding: '3px',
    margin: '0 5px 0 0',
    borderRadius: '5px'
  },
  customText3: {
    fontSize: '15px',
    color: '#317BC6',
    cursor:'pointer'
  },
  customText4: {
    fontSize: '15px',
    color: '#222831',
    padding: '19px',
    textAlign: 'center',
    fontWeight: '900',
    border : '3px dashed #B0B0B0',
    borderRadius: '5px'
  },
  customerVoucher: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: '1rem',
    cursor: 'pointer'
  },
  cartSection: {
      display: 'flex',
      alignItems: 'center'
  },
  cartInfo: {
     margin: '2rem' 
  },
  cartIcon: {
      fontSize: '4rem',
      color: '#2FD588'
  },
  customText5: {
    fontWeight: '700',
    fontSize: '20px'
  },
  itemPrice: {
      display: 'flex',
      flexDirection: 'column',
  },
  checkoutInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '0 1rem 0 0'
  },
  customButton: {
      border: '1px solid #1CBC5D',
      background: '#EFF5F1',
      color: '#49C87D',
      textAlign: 'center',
      fontSize: '12px',
      padding: '5px',
      cursor: 'pointer'
  },
  customButton1: {
    background: '#00B449',
    color: '#f4f4f4',
    textAlign: 'center',
    fontSize: '15px',
    padding: '10px',
    marginTop: '5px',
    cursor: 'pointer'
    }
}));


export default useStyles