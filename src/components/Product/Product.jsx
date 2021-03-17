import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton,Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';


//this restracture the products objects
const Product = ({product}) => {
    const classes = useStyles();
    //console.log(product)
   
    return (
        <div>
        <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image} title={product.name} />
        <CardContent>
            <div className={classes.cardContent}>
                <Typography cariant='h5' gutterBottom>
                    {product.name}
                </Typography>
                <Typography cariant='h5' gutterBottom>
                    {product.price}
                </Typography>
            </div>

            <Typography variant="body2" color="textSecondary">{product.description }</Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="Add to Cart">
                <AddShoppingCart />
            </IconButton>
            <Button variant="contained" color="primary" disableElevation>“Add to Cart</Button>
        </CardActions>
    </Card>
        </div>
        
        
    )
};

export default Product