import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 200,
        maxWidth: 210,
        margin: '1rem 1rem'
      },
      cardContent: {
          padding: '0 1rem'
      },
      cartBtn: {
        textAlign: 'center',
        width: '100%',
        color: '#ffffff',
        fontWeight: '700',
        fontSize: '13px',
        cursor: 'pointer',
        
      },
      cartBtn1: {
        textAlign: 'center',
        width: '100%',
        color: 'gray',
        fontWeight: '700',
        fontSize: '13px',
        cursor: 'pointer',
        
      },
      cartAction: {
        background: '#D43F40',
        padding: '7px',
        marginTop: '5px',
        '&:hover': {
            backgroundColor: '#C1100E',
            borderColor: '#0062cc',
          }
    },
    cartAction1: {
      background: '#DDDDDD',
      padding: '7px',
      marginTop: '5px',
      '&:hover': {
          backgroundColor: '#DEDEDE',
          borderColor: '#0062cc',
        }
  }
}));


export default useStyles