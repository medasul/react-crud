import React from 'react';
import ApiService from 'services/api-service';
import * as Styled from './styled';
import ProductCard from './product-card';
import { Button, Container, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import { projectColors } from 'assets/variables';

const HomePage = () => {
 const [products, setProducts] = React.useState<ProductModel[]>([]);

 const navigate = useNavigate();

 // gale tuscias masyvas- nurodom dependency masyve, kad priklausomybiu nebus. Tai prives prie to, kad si useEffect funkcija vyks tik pirmaji komponento uzsikrovimo karta

 // jame aprasomas pirmasis parsiuntimas
 React.useEffect(() => {
  (async () => {
    const fetchedProducts = await ApiService.fetchProducts();
    setProducts(fetchedProducts);
  })();
}, []);

return (
  <Stack sx = {{ backgroundColor: projectColors.bg, height: '100vh',}}>
  <Container sx={{ mt: 2, }}>
    <Button variant="contained"
      sx={{
        mt: 3,
        color: projectColors.light,
        backgroundColor: projectColors.primary,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: projectColors.primary,
          color: projectColors.secondary,

        },
      }}
      onClick={() => navigate(routes.ProductFormPage)}>
       New Product
      </Button>
    <Styled.ProductsGrid>
      {products.map((productProps) => (<ProductCard key={productProps.id} {...productProps} />))}
    </Styled.ProductsGrid>
  </Container>
  </Stack>
);
  
};

export default HomePage;
