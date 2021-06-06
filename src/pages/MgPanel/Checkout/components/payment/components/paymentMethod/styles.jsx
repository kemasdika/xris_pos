import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
modal: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
paper: {
 width: 300,
 height: 'auto',
 padding: '1rem'
},
headerVoucher: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& > *': {
        color: '#89929B',
        fontWeight: '700',
        marginBottom: '1rem',
        cursor: 'pointer',
        fontSize: '12px'
        }
},
customText: {
      marginTop: '1rem',
      fontSize: '13px',
      width: '80%',
      color: '#89929B'
    },
  customTextMethod: {
    marginTop: '1rem',
    fontSize: '13px',
    fontWeight: '700',
    width: '80%',
  },
    paymentMethod: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer'
    },
    imagePayment: {
      opacity: '0.5'
    }
}));


export default useStyles