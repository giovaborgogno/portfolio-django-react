import PropTypes from 'prop-types';
// @mui
import { Box, Card,Typography, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import { Link as RouterLink } from 'react-router-dom';

// ----------------------------------------------------------------------

const StyledProjectImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  transition: 'transform 250ms',
  '&:hover': {
    transform: 'scale(0.9)',
    cursor: 'pointer'
  }
});

// ----------------------------------------------------------------------

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default function ProjectCard({ project }) {
  const { id, name, photo_1, category } = project;

  return (
    <Card
    >
      <Box sx={{ pt: '100%', position: 'relative' }}>

        <RouterLink to={`/projects/detail/${id}`}>
          <StyledProjectImg alt={name} src={`${process.env.REACT_APP_API_URL}/${photo_1}`} />
        </RouterLink>
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Typography variant="subtitle2" noWrap>
          {name}
        </Typography>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1">

            {category}
          </Typography>
          <RouterLink to={`/projects/detail/${id}`} sx={{ textDecoration: 'none' }} style={{ textDecoration: 'none' }}>
            <Button
              sx={{ color: '#6E07F3', '&:hover': { backgroundColor: "#5BE9B9", color: 'white' } }}
            >Detail</Button>
          </RouterLink>
        </Stack>
      </Stack>
    </Card>
  );
}
