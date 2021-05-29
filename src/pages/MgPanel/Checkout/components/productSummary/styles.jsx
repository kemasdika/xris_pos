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
        width: '50vw',
        height: 'auto',
        padding: '1rem'
      },
  },
  customDivider: {
    height: '2px',
    background: '#CBCFD2',
    margin: '0.5rem 0'
  },
  subtotal: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  listproduct: {
    height: 400,
    overflowY: 'scroll'
  }
}));


export default useStyles