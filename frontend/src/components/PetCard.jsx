// src/components/PetCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

export default function PetCard({ pet, onClick, showContactLink = false }) {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pet.imageUrl}
          alt={pet.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pet.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Raza: {pet.race}<br />
            Edad: {pet.age}<br />
            Tamaño: {pet.size}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {showContactLink ? (
          <Link to="/contacto">
            <Button size="small" color="primary">
              Quiero Adoptar
            </Button>
          </Link>
        ) : (
          <Button size="small" color="primary">
            + Info
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

PetCard.propTypes = {
  pet: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
  showContactLink: PropTypes.bool,
};
