import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    list: {
      width: 400,
      padding: '1rem'
    },
    fullList: {
      width: 'auto',
      justifyContent: 'space-between'
    },
    customText: {
      fontSize: '1rem',
      fontWeight: '700',
      color: '#C6CBCF'
    },
    customDivider: {
      height: '2px',
      background: '#CBCFD2',
      margin: '0.5rem 0'
    },
    orderIdSection: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    orderProduct: {
       display:'flex',
       justifyContent: 'space-between'
    },
    minPlusQty: {
        display: 'flex'
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
    },
    cartSub : {
      display:'flex',
      justifyContent: 'space-between',
      marginBottom: '0.5rem'
    },
    cartTextTotal : {
      fontWeight: '700',
      fontSize: '1.3em',
      marginTop: '0.5rem'
    },
    customButton: {
      border: '1px solid #1CBC5D',
      background: '#EFF5F1',
      color: '#49C87D',
      textAlign: 'center',
      fontSize: '15px',
      padding: '10px',
      cursor: 'pointer',
      width: 'auto'
  },
  customButton1: {
    background: '#00B449',
    color: '#f4f4f4',
    textAlign: 'center',
    fontSize: '15px',
    padding: '10px',
    cursor: 'pointer',
    width: '70%'
    },
    // products: {
    //   height: 400,
    //   overFlow: 'scroll'
    // },
    // summary: {
    //   backgroundColor: '#ffffff'
    // }
}));


export default useStyles