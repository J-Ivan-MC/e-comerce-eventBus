import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useCart } from '../../../apis/service';

export default function CartItem({ product }) {
  const { id, title, image, description, price, quantity } = product;
  const { minusItem, plusItem } = useCart(); // Cambio aquí

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={image} />
      </ListItemAvatar>
      <ListItemText id={id} primary={title} />

      <Typography variant="button" display="block" gutterBottom>
        {price}
      </Typography>
      <Button onClick={() => minusItem(product)}>
        <AddIcon />
      </Button>
      <Typography variant="button" display="block" gutterBottom>
        {quantity}
      </Typography>
      <Button onClick={() => plusItem(product)}>
        <RemoveIcon />
      </Button>
    </ListItem>
  );
}
