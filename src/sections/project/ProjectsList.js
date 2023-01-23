import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import ProjectCard from './ProjectCard';

// ----------------------------------------------------------------------

ProjectsList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default function ProjectsList({ projects, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {projects.map((project) => (
        <Grid key={project.id} item xs={12} sm={6} md={3}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
}
