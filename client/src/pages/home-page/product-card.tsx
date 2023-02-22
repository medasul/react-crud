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
import * as Styled from './styled';

type ProductCardProps = ProductModel;

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  inventory,
  images,
  price,
}) => 

{const navigate = useNavigate();

  return (
    <Stack sx={{ boxShadow: 4 }}>
      <Img src={images[0]} alt="" sx={{ aspectRatio: '1.42', width: 1 }} />
      <Styled.ProductCardContent>
        <Box sx={{ flexGrow: 1 }}>
 
          <Styled.ProductCardInventory>{inventory}</Styled.ProductCardInventory>

          <Styled.ProductCardBottomContent>
            <Typography sx={{ fontSize: '1.3rem', fontWeight: 600 }}>{title}</Typography>
            <Box sx={{ fontSize: '1.3rem', color: 'primary.main', fontWeight: 600 }}>{price}</Box>
          </Styled.ProductCardBottomContent>

        </Box>

        <Button color="primary" variant="outlined" sx={{ mt: 3 }} onClick={() => navigate(routes.SingleProductPage.createLink(id))}>View</Button>
      </Styled.ProductCardContent>
    </Stack>
);}

export default ProductCard;
