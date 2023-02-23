import React from 'react';
import {
  Stack,
  Typography,
  Button,
} from '@mui/material';
import HiveIcon from '@mui/icons-material/Hive';
import { projectColors } from 'assets/variables';
import { useNavigate, useParams } from 'react-router-dom';
import routes from 'navigation/routes';
import useProduct from 'hooks/use-product';
import ImagesField from './images-field';
import InventoryField from './inventory-field';
import PriceField from './price-field';
import TitleField from './title-field';
import * as Styled from './styled';
import { getProductFormValues } from './helpers';

const ProductFormPage = () => {
  const { id } = useParams();
  const [product, loadingProductData] = useProduct(id);

  // po duomenu sukurimo nuvesti i pagr. page
  const navigate = useNavigate();

  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);

  // priimame event, kad submittinus nepersikrautu page is naujo kas karta

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const values = getProductFormValues(formRef.current);
      console.log('Vykdomas sukūrimas');
      console.log(values);

      // gauti sekanti id is json server

      fetch('http://localhost:5024/products')
        .then((response) => response.json())
        .then((data) => {
          // randu auksciausia id is json server duomenu
          const maxId = Math.max(...data.map((product: any) => Number(product.id)));

          // nustatau id
          const newProduct = {
            id: String(maxId + 1),
            ...values,
          };
          // sukurimas

          fetch('http://localhost:5024/products', {
            method: 'POST',
            //  Indicates that the request body format is JSON
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct), // body: JSON.stringify(values)
          }).then((response) => {
            if (response.ok) {
              alert('Produktas sukurtas');
              formRef.current?.reset();
              // nuveda i pradini
              navigate(routes.HomePage);
            } else {
              alert('Produktas nesukurtas');
            }
          });
        });
      // error catch
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Error on form submit. Contact system administrator.');
      }
    }
  };

  if (loadingProductData) return null;

  console.log('ATNAUJINAME DUOMENIS');
  console.log(product);

  return (
    <Styled.PageLayout>
      <Styled.Paper
        elevation={6}
      >
        <Stack
          sx={{ gap: 2, alignItems: 'center' }}
          component="form"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <HiveIcon sx={{ fontSize: 60, color: projectColors.primary }} />
          <Typography variant="h4" sx={{ color: projectColors.primary }}>Create new product</Typography>

          <TitleField />
          <PriceField />
          <InventoryField />
          <ImagesField />

          <Button
            variant="contained"
            sx={{
              backgroundColor: projectColors.primary,
              '&:hover':
            {
              backgroundColor: projectColors.primary,
              color: projectColors.hoverAndActive,
            },
            }}
            size="large"
            fullWidth
            type="submit"
          >
            Create
          </Button>
        </Stack>
      </Styled.Paper>
    </Styled.PageLayout>
  );
};

export default ProductFormPage;
