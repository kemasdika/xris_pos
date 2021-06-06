import React,{useRef, useState} from 'react'
import Fade from '@material-ui/core/Fade';
import useStyles from './styles'
import CloseIcon from '@material-ui/icons/Close';
import { Paper, Typography,Divider } from '@material-ui/core';
import QrReader from 'react-qr-reader'
export default function Barcode({open, close}) {
    const classes = useStyles()
    const handleClose = () => {
        close(false)
    }
    const [scanResultWebCam, setScanResultWebCam] = useState('')
    const handleErrorWebCam = (error) => {
        console.log(error)
    }
    const handleScanWebCam = (result) => {
        if (result) {
            setScanResultWebCam(result)
        }
    }
    return (
        <div>
        <Fade in={open}>
            <Paper className={classes.paper}>
                <div className={classes.headerVoucher}>
                    <Typography>Scan Barcode</Typography>
                    <CloseIcon onClick={handleClose}/>
                </div>
                <Divider></Divider>
                {/* <Typography className={classes.customText}>NO VOUCHER AVAILABLE</Typography> */}
                <QrReader 
                delay={300}
                style={{width: '100%'}}
                onError={handleErrorWebCam}
                onScan={handleScanWebCam}
                />
            </Paper>
        </Fade>
        </div>
    )
}


