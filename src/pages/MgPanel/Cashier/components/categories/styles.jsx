import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: '10vh',
    maxWidth: '50vw',
    maxHeight: '10vh',
    width: '100vw',
    height: '5vh',
    display: 'flex',
    background: '#F3F3F7',
    overflow: 'hidden'
  },
  btnCategories: {
      background: '#ffffff',
      textAlign: 'center',
      padding: '7px 15px 0px 15px',
      borderRadius: '20px',
      fontSize: '15px',
      fontWeight: '700',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19)',
      cursor: 'pointer',
      marginLeft: '1rem',
  }
}));


export default useStyles