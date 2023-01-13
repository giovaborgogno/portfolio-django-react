import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/label';
import { ColorPreview } from '../../../components/color-utils';
import { Link as RouterLink } from 'react-router-dom';

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  transition: 'transform 250ms',
  '&:hover':{
    transform: 'scale(0.9)',
    cursor: 'pointer'
  }
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  // const { name, photo_1, price, colors, status, priceSale } = product;
  const { id, name, photo_1, category } = product;

  return (
    <Card 
    >
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {/* {status && (
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )} */}
        <RouterLink to={`/projects/detail/${id}`}>
        <StyledProductImg alt={name} src={`${process.env.REACT_APP_API_URL}/${photo_1}`} />
        </RouterLink>
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        {/* <Link color="inherit" underline="hover" href={`/projects/detail/${id}`}> */}
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        {/* </Link> */}

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {/* <ColorPreview colors={colors} /> */}
          <Typography variant="subtitle1">
            
            {category}
          </Typography>
          <RouterLink to={`/projects/detail/${id}`} sx={{textDecoration: 'none'}} style={{textDecoration: 'none'}}>
          <Button /* variant="contained" */ 
          sx={{ color:'#6E07F3', '&:hover' : {backgroundColor: "#6E07F3", color: 'white'} }}
          >Detail</Button>
          </RouterLink>
        </Stack>
      </Stack>
    </Card>
  );
}
