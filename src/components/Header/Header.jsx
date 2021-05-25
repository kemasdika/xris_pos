import React from 'react'
import useStyles from './styles'
import { withStyles } from '@material-ui/core/styles';
import xrisLogoWb from './../../assets/images/xris-logo-wb.PNG'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
      background: '#2E3548'
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: '#2E3548',
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

export default function Header() {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div className={classes.root}>
            <img src={xrisLogoWb} alt="" className={classes.leftImage} />
            <div className={classes.rightMenu}>
                <div>
                <Button
                    endIcon={<ArrowDropDownIcon/>}
                    onClick={handleClick}
                    size="small"
                    className={classes.button}
                >
                    Admin
                </Button>
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <StyledMenuItem>
                    <ListItemIcon>
                        <ExitToAppIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                    </StyledMenuItem>
                </StyledMenu>
            </div>
            <div className={classes.rightBotMenu}>
                <FiberManualRecordIcon className={classes.syncIcon} />
                <Typography className={classes.syncText}>sync</Typography>
            </div>
        </div>
    </div>
    )
}
