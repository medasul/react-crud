import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
} from '@mui/material';
import Img from 'components/ui/img';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import { projectColors } from 'assets/variables';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import * as Styled from './styled';

type ProductCardProps = ProductModel;

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  inventory,
  images,
  price,
}) => {
  const navigate = useNavigate();

  let isInStock = false;
  if (inventory.units !== 0) { isInStock = true; }

  const handleDelete = () => {
    //  DELETE uzklausa i API kad istrintu
    fetch(`http://localhost:5024/products/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        console.log('Product deleted successfully');
        navigate(routes.HomePage, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <Stack sx={{ boxShadow: 4, backgroundColor: projectColors.secondary, position: 'relative' }}>
      <Styled.ActionButtons>
        <Button
          variant="contained"
          color="warning"
          size="small"
          sx={{ minWidth: 'initial', p: 0.5 }}
          title="Update"
          onClick={() => navigate(routes.UpdateProductPage.createLink(id))}
        >
          <EditIcon />
        </Button>
        <Button
          variant="contained"
          color="error"
          size="small"
          sx={{ minWidth: 'initial', p: 0.5 }}
          title="Delete"
          onClick={handleDelete}
        >
          <DeleteIcon />
        </Button>
      </Styled.ActionButtons>
      <Img src={images[0]} alt="" sx={{ aspectRatio: '1.42', width: 1 }} />
      <Styled.ProductCardContent>
        <Box sx={{ flexGrow: 1 }}>

          <Styled.ProductCardInventory>
            {' '}
            {inventory.status}
            {' '}
            {isInStock ? `(${inventory.units})` : false}

          </Styled.ProductCardInventory>

          <Styled.ProductCardBottomContent>
            <Typography sx={{ fontSize: '1.3rem', fontWeight: 600, color: projectColors.dark }}>{title}</Typography>
            <Box sx={{ fontSize: '1.3rem', color: projectColors.primary, fontWeight: 600 }}>{price}</Box>
          </Styled.ProductCardBottomContent>

        </Box>

        <Button
          variant="outlined"
          sx={{
            mt: 3,
            color: projectColors.primary,
            borderColor: projectColors.primary,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              borderColor: projectColors.primary,
              backgroundColor: projectColors.primary,
              color: projectColors.secondary,

            },
          }}
          onClick={() => navigate(routes.SingleProductPage.createLink(id))}
        >
          View

        </Button>
      </Styled.ProductCardContent>
    </Stack>
  );
};

export default ProductCard;
