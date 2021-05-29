import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    cartSub : {
      display:'flex',
      justifyContent: 'space-between',
      marginBottom: '0.5rem'
    },
    cartTextTotal : {
      fontWeight: '700',
      fontSize: '1.3em',
      marginTop: '0.5rem'
    }
}));


export default useStyles