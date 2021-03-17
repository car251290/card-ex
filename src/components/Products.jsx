
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './Product/styles';
const products = [
    {id:1,name:'Shoes',description:"running shoes",price:"$30",image:'https://images.unsplash.com/photo-1423347673683-ccdb7f6a948f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE1OTI4NTIx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'},
    {id:2,name:'Tennis',description:"casual occation",price:"$60",image:'https://images.unsplash.com/photo-1423347673683-ccdb7f6a948f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE1OTI4NTIx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'},
    {id:3,name:'Laptop',description:"Great tool lap",price:"$50",image:'https://images.unsplash.com/photo-1423347673683-ccdb7f6a948f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE1OTI4NTIx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'},
    {id:4,name:'Bycle',description:"ready for summer",price:"$400",image:'https://images.unsplash.com/photo-1423347673683-ccdb7f6a948f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE1OTI4NTIx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'},
    {id:5,name:'Iphone11',description:"Iphone 11 better than 10",price:"$1200",image:'https://images.unsplash.com/photo-1423347673683-ccdb7f6a948f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE1OTI4NTIx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'},
    {id:5,name:'Iphone12',description:"12 a nice number for phone",price:"$1300",image:'https://images.unsplash.com/photo-1423347673683-ccdb7f6a948f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE1OTI4NTIx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'}];

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>

    );
};


export default Products;