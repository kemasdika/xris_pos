import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100vw',
        width: '100vw',
        height: '70vh',
        // background: '#ffffff',
        margin: '1rem 0'
      },
    head: {
        margin: '0 1rem',
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    headTitle: {
        fontWeight: '700',
        color: '#213243',
        fontSize: '20px'
    },
    headButton: {
        background: '#D43F40',
        color: '#f4f4f4',
        fontSize: '10px',
        '&:hover': {
            backgroundColor: '#C1100E',
            borderColor: '#0062cc',
          }
    }
}));


export default useStyles