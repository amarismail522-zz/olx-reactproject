import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ItemsProduct from './ItemsProduct';

export default function Items() {
  return (
    <Container>
      <div>
        <div style={{ fontSize: "26px", textAlign: "left", marginTop: "35px", marginBottom:"10px" }}>
          <>Fresh Recomendations</>
        </div>
        <div className="freshProducts">
          <ItemsProduct className="item" />
          <ItemsProduct className="item" />
          <ItemsProduct className="item" />
          <ItemsProduct className="item" />
         

        </div>
      </div>
    </Container>

  );
}
