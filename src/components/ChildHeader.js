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
    <div >
      <Grid container >
        <div className="Child-Navbar">

          <Grid item xs={2}>
            <div style={{fontWeight:"bold" }}>
              ALL CATOGERIES
           

            </div>
           

           
          </Grid>
          <Grid item xs={10}>
          <div className="zero">
               <div>
             

            </div>
            </div>
          </Grid>



        </div>

      </Grid>
    </div>
  );
}

