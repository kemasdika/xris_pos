import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
modal: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
paper: {
 width: 400,
 height: 'auto',
 padding: '1rem',
 display:'flex',
 flexDirection: 'column',
justifyContent: 'center',
textAlign: 'center',
},
headerVoucher: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& > *': {
        color: '#89929B',
        fontWeight: '700',
        cursor: 'pointer'
        }
},
customText: {
      fontWeight: '700',
      fontSize: '28px'
    },
    customText1: {
        margin: '1rem 2rem'
      },
      customButton: {
        background: '#D43F40',
        padding: '5px',
        color: '#ffffff',
        borderRadius: '4px',
        margin: '1rem 0 2rem 0',
        cursor: 'pointer'
      },
      customButton1: {
        color: '#D43F40',
        cursor: 'pointer'
      },
}));


export default useStyles