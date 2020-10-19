import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Logotyp_OLX_ from './Logotyp_OLX_.png'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },

}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
        <div className="customNav">
          <Toolbar>
            <Grid item xs={1}>
              <div className="logo" style={{ display: "inline-flex" }}>
                <img src={Logotyp_OLX_} alt="logo" />
              </div>
            </Grid>
            <Grid item xs={2}>

              <div className="location-item">
                <span className="search-span1"><SearchIcon style={{ fontSize: "34px" }} /></span>
                <input placeholder="Pakistan" className="textfield" />
                <span className="expandless-icon">
                  <button className="btn-dropdown">
                    <ExpandMoreIcon style={{ fontSize: "34px" }} />
                  </button>
                </span>
              </div>
            </Grid>
            <Grid item xs={5}>
              <div className="location-item1">

                <input placeholder="Find Cars, Mobile Phones and more..." className="textfield" />

                <span className="search-span2 "><SearchIcon style={{ fontSize: "34px" }} /></span>

              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="user-section">
                <button className="user-icon">
                <ModeCommentOutlinedIcon  style={{fontSize: "28px"}} />
                </button>
                <button className="user-icon">
                <NotificationsNoneOutlinedIcon  style={{fontSize: "28px"}} />
                </button>
                
                <button className="user-icon">
                <AccountCircleIcon  style={{fontSize: "28px"}} />
                <ExpandMoreIcon style={{ fontSize: "34px", paddingTop:"0px" }} />
                </button>
                <button className="sell-icon">
                  + SELL
                  {/* <span style={{fontSize: "25px"}}>+</span> SELL */}
                </button>
              </div>
             </Grid>
          </Toolbar>
        </div>

      </Grid>
    </div>
  );
}

