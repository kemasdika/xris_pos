import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
modal: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
paper: {
 width: 500,
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
        cursor: 'pointer'
        }
},
customText: {
      marginTop: '1rem',
      fontWeight: '700',
      width: '50%'
    },
}));


export default useStyles