import React from 'react';
import './App.css';
import Product from './Product';
import request from 'superagent';

function App() {

  const [ products, setProducts ] = React.useState([]);

  React.useEffect(() => {
    
    request.get('http://localhost:1337/products')
      .then((response) => {
        console.log(response.body);
        setProducts(response.body);
      });

  }, []);
  

  return (
    <div className="App">
      <header className="App-header">     
        {products.map((product) => {
          if(product.images.length === 0) return null;
          
          return <Product name={product.name} 
            image={'http://localhost:1337' + product.images[0].url}></Product>
        })}
      </header>
    </div>
  );
}

export default App;
