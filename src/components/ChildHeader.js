import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

          <Grid item xs={12}>
            <div style={{fontWeight:"bold", marginLeft:"70px", textAlign:"left", display:"flex"}}>
              <span style={{color:"#002f34", cursor:"pointer"}}>ALL CATOGERIES</span>
              <span><ExpandMoreIcon className="allcat-icon" style={{ fontSize: "34px", top:"0px",color:"#002f34"}} /></span>
           <div><span className="items-cat"><button>Mobile Phones</button></span>
               <span className="items-cat"><button>Cars</button></span>
               <span className="items-cat"><button>Motorcycles</button></span>
               <span className="items-cat"><button>Houses</button></span>
               <span className="items-cat"><button>TV-Video-Audio</button></span>
               <span className="items-cat"><button>Tablets</button></span>
               <span className="items-cat"><button>Land & Plots</button></span></div>
              
            </div>
           

           
          </Grid>
          {/* <Grid item xs={}>
          <div className="zero">
               
            </div>
          </Grid> */}



        </div>

      </Grid>
    </div>
  );
}

