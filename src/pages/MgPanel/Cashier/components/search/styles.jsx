import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        margin: '8.5vh 1rem 0 1rem',
        display: 'flex',
        alignItems: 'center',
        width: '40vw',
        height: '5vh'
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        fontSize: '10px'
      },
      iconButton: {
        padding: 10,
      }
}));


export default useStyles