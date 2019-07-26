import * as React from 'react';

const Product = ({ name, image }) => {
    return <div>
        <img width="100px" src={image} alt=""/>
        {name}
    </div>;
}

export default Product;