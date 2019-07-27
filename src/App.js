import React from 'react';
import './App.css';
import Product from './Product';
import request from 'superagent';
import { Grid, Button } from '@material-ui/core';

const serverBase = 'http://192.168.130.2:1337';

function App() {

  const [ products, setProducts ] = React.useState([]);
  const [ categories, setCategories ] = React.useState([]);

  const [ current, setCurrent ] = React.useState('');

  React.useEffect(() => {
    
    let filter = '';
    if(current){
      filter += '?category.id=' + current;
    }
    request.get(serverBase + '/products' + filter)
      .then((response) => {
        console.log('productos');
        setProducts(response.body);
      });

  }, [current]);

  React.useEffect(() => {
    request.get(serverBase + '/categories')
      .then((response) => {
        console.log('categorias');
        response.body.push({
          id: '',
          name: 'Todos',
        });
        setCategories(response.body);
      });
  }, []);
  

  return (
    <div className="App">
{current}
      {categories.map((category) => {
        return <Button key={category.id}
          variant={current === category.id ? 'contained' : 'text'}
          color="primary"
          onClick={() => {
            setCurrent(category.id)
          }}>{category.name}</Button>
      })}

      <Grid container spacing={2}>
        {products.map((product) => {
          if(product.images.length === 0) return null;
          
          return <Grid item xs={4} key={product.id}>
            <Product name={product.name} 
              image={serverBase + product.images[0].url}></Product>
          </Grid>
        })}
      </Grid>
    </div>
  );
}

export default App;
