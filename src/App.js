import React from 'react';
import './App.css';
import Product from './Product';
import request from 'superagent';
import { Grid } from '@material-ui/core';

const serverBase = 'http://192.168.130.2:1337';

function App() {

  const [ products, setProducts ] = React.useState([]);

  React.useEffect(() => {
    
    request.get(serverBase + '/products')
      .then((response) => {
        console.log(response.body);
        setProducts(response.body);
      });

  }, []);
  

  return (
    <div className="App">
      <Grid container spacing={2}>
        {products.map((product) => {
          if(product.images.length === 0) return null;
          
          return <Grid item xs={4}>
            <Product name={product.name} 
              image={serverBase + product.images[0].url}></Product>
          </Grid>
        })}
      </Grid>
    </div>
  );
}

export default App;
