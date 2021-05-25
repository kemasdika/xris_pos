import { makeStyles } from "@material-ui/core";
// import bgFile from '../../assets/images/3139154.jpg'
// import palette from "../../assets/";

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    maxWidth: '100vw',
    maxHeight: '7vh',
    width: '100vw',
    height: '7vh',
    background: '#2E3548',
    position: 'fixed',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
      color: '#ffffff',
      fontSize: '10px'
  },
  rightMenu: {
      display: 'flex',
      flexDirection: 'column',
      marginRight: '1rem'
  },
  rightBotMenu:{
    display: 'flex',
    alignItems: 'center',
    marginTop: '-5px',
  },
  syncIcon: {
      color: '#4aa96c',
      fontSize: '1rem'
  },
  syncText: {
      color: '#f4f4f4',
      fontSize: '10px'
  },
  leftImage: {
      width: '5rem',
      height: '2.5rem',
      marginLeft: '1rem'
  }
}));


export default useStyles