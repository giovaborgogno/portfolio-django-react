import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// components
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
import { connect } from 'react-redux';
import { get_project, get_projects } from '../redux/actions/projects';
import { useEffect } from 'react';

// ----------------------------------------------------------------------

const ProductsPage = ({
  get_projects,
  projects
}) => {
  const [openFilter, setOpenFilter] = useState(false);

  useEffect(()=>{
    get_projects(12)
  },[])

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> Dashboard: Products | Minimal UI </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>
        {projects !== null && projects && <>
        <ProductList products={projects} />
        </>}
        <ProductCartWidget />
      </Container>
    </>
  );
}

const mapStateToProps = state => ({
  projects: state.Projects.projects
})

export default connect(mapStateToProps, {
  get_project,
  get_projects
})(ProductsPage)