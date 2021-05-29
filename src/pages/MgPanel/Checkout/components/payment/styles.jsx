import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
modal: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
paper: {
 width: 350,
 height: 'auto',
 padding: '1rem'
},
headerPayment: {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& > *': {
    color: '#89929B',
    fontWeight: '700',
    marginBottom: '1rem'
    }
  },
  customText: {
    fontWeight: '700',
    width: '50%'
  },
  customText1: {
    fontWeight: '700',
    color: '#00B449'
  },
  customText2: {
    fontWeight: '700',
    color: '#3A4958',
    fontSize: '14px'
  },
  paymentMethod: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  customDevider: {
    height: '1.5rem',
    background: '#F3F3F7',
    alignItems: 'center',
    width: 380,
    margin: '1rem 0 1rem -1rem'
  },
  customInput: {
    width: '100%'
  },
  customButton: {
    width: '100%',
    textAlign: 'center',
    background: '#00B449',
    color: '#FFFFFF',
    padding: '10px 0',
    margin: '1rem 0',
    cursor: 'pointer',
    boderRadius: '5px',
    '&:hover': {
      background: '#00B449',
      color: '#FFFFFF',
    }

  },
}));


export default useStyles