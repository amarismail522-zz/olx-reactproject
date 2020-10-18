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
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

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
                    <ExpandLessIcon style={{ fontSize: "34px" }} />
                  </button>
                </span>
              </div>
            </Grid>
            <Grid item xs={5}>
              <div className="location-item1">

                <input placeholder="Pakistan" className="textfield" />

                <span className="search-span2 "><SearchIcon style={{ fontSize: "34px" }} /></span>

              </div>
            </Grid>
            <Grid item xs={4}>
              hi
        </Grid>
          </Toolbar>
        </div>

      </Grid>
    </div>
  );
}
// export default function Header() {
//   const classes = useStyles();

//   return (
//     <div className="customNav">
//       <div>
//         <Toolbar>
//           <div className="logo">
//             <img src={Logotyp_OLX_} alt="logo" />
//           </div>
//           <div className="location-item">
//             <span className="search-span1"><SearchIcon style={{ fontSize: "34px" }} /></span>
//             <input placeholder="Pakistan" className="textfield" />
//             <span className="expandless-icon">
//               <button className="btn-dropdown">
//                 <ExpandLessIcon style={{ fontSize: "34px" }} />
//               </button>
//             </span>
//           </div>
//           <div className="location-item">
//             <span className="search-span1"><SearchIcon style={{ fontSize: "34px" }} /></span>
//             <input placeholder="Pakistan" className="textfield" />
//             <span className="expandless-icon">
//               <button className="btn-dropdown">
//                 <ExpandLessIcon style={{ fontSize: "34px" }} />
//               </button>
//             </span>
//           </div>
//           <div className="location-item">
//             <span className="search-span1"><SearchIcon style={{ fontSize: "34px" }} /></span>
//             <input placeholder="Pakistan" className="textfield" />
//             <span className="expandless-icon">
//               <button className="btn-dropdown">
//                 <ExpandLessIcon style={{ fontSize: "34px" }} />
//               </button>
//             </span>
//           </div>
//         </Toolbar>
//       </div>
//     </div>
//   );
// }
