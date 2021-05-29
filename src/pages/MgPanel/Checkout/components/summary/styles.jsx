import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    maxWidth: '100vw',
    maxHeight: '100vh',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: '#F3F3F7',
    '& > *': {
        margin: '10vh 1rem',
        width: '40vw',
        height: 'auto',
        padding: '1rem'
      },
  },
  customDivider: {
    height: '2px',
    background: '#CBCFD2',
    margin: '0.5rem 0'
  },
  orderProduct: {
    display:'flex',
    justifyContent: 'space-between'
 },
 customButton: {
   width: '100%',
   textAlign: 'center',
   background: '#00B449',
   color: '#FFFFFF',
   padding: '10px 0',
   margin: '1rem 0',
   cursor: 'pointer'
 },
 customButton1: {
  width: '100%',
  textAlign: 'center',
  background: '#EFF5F1',
  color: '#00B449',
  border: '1px solid #00B449',
  padding: '10px 0',
  margin: '1rem 0',
  cursor: 'pointer'
},customButton2: {
  width: '100%',
  textAlign: 'center',
  background: '#FFE7E6',
  color: '#DA5657',
  border: '1px solid #DA5657',
  padding: '10px 0',
  margin: '1rem 0',
  cursor: 'pointer'
},
modal: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
}));


export default useStyles