import { makeStyles } from "@material-ui/core";
// import bgFile from '../../assets/images/3139154.jpg'
// import palette from "../../assets/";

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    maxWidth: '100vw',
    maxHeight: '100vh',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#bb371a',
    overflow: 'hidden'
  },
  card: {
    maxWidth: 500,
    padding: '1rem',
  },
  cardContent: {
    display: 'flex',
    justifyContent:'center',
    alignContent: 'center',
    flexDirection: 'column',
    marginBottom: '1rem'
  },
  media: {
    width: "10rem",
    height: "5rem",
    margin: "1rem",
    alignSelf: 'center'
  },
  form: {
      display: 'flex',
      flexDirection: 'column'
  },
  text: {
      width: '20rem',
      fontSize: '1rem',
      marginBottom: '1rem',
  },
  button: {
      background: '#bb371a',
      color: '#f4f4f4',
      '&:hover': {
        background: "#bb371a",
     },
  }


}));


export default useStyles