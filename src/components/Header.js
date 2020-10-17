import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Logotyp_OLX_ from './Logotyp_OLX_.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
 
}));


export default function Header() {
  const classes = useStyles();

  return (
    <div className="customNav">
    <div>
      <Toolbar>
        <div className="logo">
            <img src={Logotyp_OLX_}  alt="logo"/>
        </div>
        <div>
          <input placeholder="Pakistan" className="textfield" />
        </div>
      </Toolbar>
    </div>
    </div>
  );
}
