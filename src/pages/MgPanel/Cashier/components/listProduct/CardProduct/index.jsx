import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles'
import {useDispatch} from 'react-redux'
import {addToCart} from './../../../../../../controllers/_actions/CartAction'
import {rupiah} from './../../../../../../helpers/rupiahConverter'
export default function CardProduct({data}) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const handleToCart = () => {
        dispatch(addToCart(data.id))
    }
    return (
        <Card className={classes.root}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={data.image_url}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="subtitle1" component="h3">
              {data.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                in stock {data.stock}
            </Typography>
            <Typography variant="h7" component="h3">
              {rupiah(data.price)}
            </Typography>
          </CardContent>
          {
            data.stock <= 0 ?
            <CardActions className={classes.cartAction1}>
                <Typography className={classes.cartBtn1}>Out Of Stock</Typography>
            </CardActions> :
            <CardActions className={classes.cartAction}>
                <Typography className={classes.cartBtn} onClick={handleToCart}>Add to cart</Typography>
            </CardActions>
          }
      </Card>
    )
}
