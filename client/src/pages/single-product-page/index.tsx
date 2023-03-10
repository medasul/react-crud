import {
  Box, IconButton, Stack, Typography, styled,
} from '@mui/material';
import Img from 'components/ui/img';
import routes from 'navigation/routes';
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import useProduct from 'hooks/use-product';
import { projectColors } from 'assets/variables';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Pagination, Navigation } from 'swiper';
import * as Styled from './styled';

const StyledSwiper = styled(Swiper)({
  width: '100%',
  height: '100%',
  '& .swiper-pagination-bullet': {
    backgroundColor: 'white',
    opacity: 0.5,
  },
  '& .swiper-pagination-bullet-active': {
    opacity: 1,
  },
});

const SingleProductPage = () => {
  const leftArrowRef = React.useRef<HTMLButtonElement | null>(null);
  const rightArrowRef = React.useRef<HTMLButtonElement | null>(null);

  const { id } = useParams();

  // inicijuojamas parsiuntimas
  const [product] = useProduct(id);

  if (id === undefined) return <Navigate to={routes.HomePage} />;
  if (product === undefined) return null;

  return (
    <Stack sx={{ backgroundColor: projectColors.bg, minHeight: '100vh' }}>
      <Box>
        <Box component="pre" display="flex" flexDirection="column" alignItems="center">

          <Typography
            variant="h3"
            sx={{
              mb: 2,
              color: projectColors.primary,
              '@media (max-width: 600px)': {
                fontSize: '2rem',
              },
            }}
          >
            {product.title}

          </Typography>
          <Box sx={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 2,
          }}
          >
            <Typography variant="h5" sx={{ mr: 2 }}>Price:</Typography>
            <Typography variant="h5">{product.price}</Typography>
          </Box>
          <Box sx={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 2,
          }}
          >
            <Typography variant="h5" sx={{ mr: 2 }}>Inventory:</Typography>
            <Typography variant="h5">
              {product.inventory.status}
              {' '}
              (
              {product.inventory.units}
              )

            </Typography>
          </Box>

        </Box>
        <Styled.SwiperImageContent>
          <StyledSwiper
            modules={[Pagination, Navigation]}
            pagination={{ dynamicBullets: true, clickable: true }}
            navigation={{
              enabled: true,
              nextEl: rightArrowRef.current,
              prevEl: leftArrowRef.current,
            }}
          >
            {product.images.map((img) => (
              <SwiperSlide key={img}>
                <Img src={img} sx={{ width: 1, height: 1 }} />
              </SwiperSlide>
            ))}
          </StyledSwiper>
          <Stack sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            zIndex: 3000,
            justifyContent: 'center',
          }}
          >
            <IconButton ref={leftArrowRef}>
              <NavigateBeforeIcon sx={{ color: 'common.white', fontSize: 30 }} />
            </IconButton>
          </Stack>
          <Stack sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            zIndex: 3000,
            justifyContent: 'center',
          }}
          >
            <IconButton ref={rightArrowRef}>
              <NavigateNextIcon sx={{ color: 'common.white', fontSize: 30 }} />
            </IconButton>
          </Stack>
        </Styled.SwiperImageContent>
      </Box>
    </Stack>
  );
};

export default SingleProductPage;
