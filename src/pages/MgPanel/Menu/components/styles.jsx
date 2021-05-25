import { makeStyles } from "@material-ui/core";
// import bgFile from '../../assets/images/3139154.jpg'
// import palette from "../../assets/";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '5rem  0 0 5rem',
        minWidth: 275,
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer'
      },
      text: {
        fontWeight: '700'
      }
}));


export default useStyles