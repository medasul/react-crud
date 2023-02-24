import React from 'react';
import {
  Stack,
  Typography,
  Button,
} from '@mui/material';
import HiveIcon from '@mui/icons-material/Hive';
import { useNavigate, useParams } from 'react-router-dom';
import routes from 'navigation/routes';
import useProduct from 'hooks/use-product';
import ImagesField from './images-field';
import InventoryField from './inventory-field';
import PriceField from './price-field';
import TitleField from './title-field';
import * as Styled from './styled';
import { getProductFormValues } from './helpers';
import { getModeData } from './data';

const ProductFormPage = () => {
  const { id } = useParams();
  const [product, loadingProductData] = useProduct(id);

  const mode = id !== undefined ? 'edit' : 'create';
  const {
    title,
    btnText,
    color,
    colorMain,
  } = getModeData(mode);

  // po duomenu sukurimo nuvesti i pagr. page
  const navigate = useNavigate();

  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);

  // priimame event, kad submittinus nepersikrautu page is naujo kas karta

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const values = getProductFormValues(formRef.current);
      if (mode === 'create') {
        // SUKURIMAS

        fetch('http://localhost:5024/products')
          .then((response) => response.json())
          .then((data) => {
          // randu auksciausia id is json server duomenu
            // eslint-disable-next-line @typescript-eslint/no-shadow
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
                console.log('Product created successfully');
                formRef.current?.reset();
                // nuveda i pradini
                navigate(routes.HomePage);
              } else {
                console.error('Failed to create product');
              }
            });
          });

        // TODO: SUKURIMO PABAIGA
        console.log('Vykdomas sukūrimas');
        console.log(values);
      } else {
        // ATNAUJINIMAS

        fetch(`http://localhost:5024/products/${id}`, {
          method: 'PATCH', // PUT - ANT VIRSAUS
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values), // (values),
        }).then((response) => {
          if (response.ok) {
            console.log('Product updated successfully');
            navigate(routes.HomePage);
          } else {
            console.error('Failed to update product');
          }
        });

        // ATNAUJINIMO PABAIGA
        console.log('Vykdomas atnaujinimas');
        console.log({ id, ...values });
      }

      // gauti sekanti id is json server

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
          <HiveIcon sx={{ fontSize: 60, color: colorMain }} />
          <Typography variant="h4" color={colorMain}>{title}</Typography>

          <TitleField
            color={color}
            defaultTitle={product?.title}
          />
          <PriceField
            color={color}
            defaultPrice={product?.price.slice(0, -1)}
          />
          <InventoryField
            color={color}
            defaultInventory={product?.inventory
               || { status: 'Out of stock', units: 0 }}
          />
          <ImagesField color={color} colorMain={colorMain} defaultImages={product?.images} />

          <Button
            variant="contained"
            color={color}
            size="large"
            fullWidth
            type="submit"
          >
            {btnText}
          </Button>
        </Stack>
      </Styled.Paper>
    </Styled.PageLayout>
  );
};

export default ProductFormPage;
