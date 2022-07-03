import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// estilo
import './ItemCard.css'
// Link
import {Link} from 'react-router-dom'

const ItemCard =({items})=> {
  return (
    <Card className="mainCard">
      <Link to={`/detail/${items.id}`}>

      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={items.img}
          alt={items.tit}
          className="carImg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="cardTit">
          {items.tit}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {items.desc}
          </Typography>

          <Typography variant="h6" className="cardPrice">
            $ {items.price}
          </Typography>

        </CardContent>
      </CardActionArea>

      </Link>
    </Card>
  );
}
export default ItemCard