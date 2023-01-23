import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Box, Container, Stack, Typography } from '@mui/material';
// components
import ProjectsList from 'src/sections/project/ProjectsList';
// mock
import { connect } from 'react-redux';
import { get_project, get_projects } from '../redux/actions/projects';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// ----------------------------------------------------------------------

const ProjectsPage = ({
  get_projects,
  projects
}) => {
  const [openFilter, setOpenFilter] = useState(false);

  useEffect(() => {
    get_projects(12)
  }, [])

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <>
      <Helmet>
        <title> Projects - Giovanni Borgogno - Portfolio</title>
      </Helmet>

      <Container>
    <Box sx={{display: 'flex'}}>

        <Link to='/'>
          <ArrowBackIcon sx={{ color: "#5BE9B9", mt: 6 }} />
        </Link>
        <Typography variant="h4" sx={{ mt: 5, mx: 2 }}>
          Projects:
        </Typography>
    </Box>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            
          </Stack>
        </Stack>
        {projects !== null && projects && <>
          <ProjectsList projects={projects} />
        </>}
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
})(ProjectsPage)