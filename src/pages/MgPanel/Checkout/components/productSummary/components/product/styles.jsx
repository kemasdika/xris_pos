import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem'
  },
  productTitle: {
    width: '40%',
    overflow: 'hidden'
  }
}));


export default useStyles