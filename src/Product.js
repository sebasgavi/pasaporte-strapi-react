import * as React from 'react';
import { Paper } from '@material-ui/core';

const Product = ({ name, image }) => {
    return <Paper>
        <img width="100px" src={image} alt=""/>
        {name}
    </Paper>;
}

export default Product;