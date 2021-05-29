import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles'
import productImg from './../../../../../../assets/images/product.PNG'

export default function CardProduct() {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={productImg}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="subtitle1" component="h3">
              Product Name
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                in stock 30
            </Typography>
            <Typography variant="h7" component="h3">
              Rp 15.000
            </Typography>
          </CardContent>
        <CardActions className={classes.cartAction}>
            <Typography className={classes.cartBtn}>Add to cart</Typography>
        </CardActions>
      </Card>
    )
}
