import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import product from './product.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 395,
    maxHeight: 260,
    marginTop:2,
    marginRight:14,
    

  },
  media: {
    height: 140,
  },
});

export default function ItemsProduct() {
  const classes = useStyles();

  return (
    
      
      <Card className={classes.root}>
        <CardActionArea>
          <img src={product} style={{ height: "140px", width: "200px" }} />
          <CardContent>
           <div>
             <h3>
               Rs.24000
             </h3>
             <p>ups used or and aor fjao fjalka </p>
           </div>
          </CardContent>
        </CardActionArea>
      </Card>
   
  );

}
