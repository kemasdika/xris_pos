import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    orderProduct: {
       display:'flex',
       justifyContent: 'space-between',
       margin: '0.5rem 0'
    },
    customText: {
        fontWeight: '700',
        marginBottom: '0.5rem'
    },
    customText1: {
        color: '#CAD7DE',
        fontSize: '0.9em',
        marginBottom: '0.5rem'
    },
    minPlusQty: {
        display: 'flex',
        marginBottom: '0.5rem'
    },
    minPlus: {
      padding: '0.1rem 0.8rem',
      background: '#CAD7DE'
    },
    qtyCount: {
      padding: '0.1rem 0.8rem',
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)'
    },
    productName: {
      width: '70%',
      overFlow: 'hidden'
    }
}));


export default useStyles