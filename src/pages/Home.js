import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, Container, Typography, Stack} from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections


// ------------ redux/actions
import { get_project, get_projects } from '../redux/actions/projects';
import { get_education } from '../redux/actions/education';
import { get_experience } from '../redux/actions/experience';


import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

// ------------------- sections
import ListTools from 'src/sections/home/ListTools';
import ProjectsList from 'src/sections/project/ProjectsList';
import GetInTouch from 'src/sections/home/GetInTouch';
import Experience from 'src/sections/home/Experience';
import Education from 'src/sections/home/Education';
import Services from 'src/sections/home/Services'

const StyledContent = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(5, 0),
}));


// ----------------------------------------------------------------------

const Home = ({
  get_projects,
  projects,
  get_education,
  get_experience,
  experience,
  education,
}) => {
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
    get_projects(4);
    get_education();
    get_experience();
  }, [])

  return (
    <>

      <Helmet>
        <title>Home - Giovanni Borgogno - Portfolio</title>
        <meta name="description" content="Giovanni Borgogno Portfolio, view all projects" />
      </Helmet>

      <Container maxWidth="xl">
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h1" paragraph>
            Giovanni Borgogno
          </Typography>
          
          <Typography variant="h3" sx={{ color: '#5BE9B9' }}>
            I'm a Backend Developer & Marketing Specialist
          </Typography>

          <Box
            component="img"
            src="/assets/images/hero-devices.svg"
            sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
          />

          <ScrollLink activeClass="active" to='contactsection'
            spy={true} smooth={true} offset={50} duration={500}>
            <Button to="#contact" size="large" variant="contained" component={RouterLink}
              sx={{ backgroundColor: '#5BE9B9', '&:hover': { backgroundColor: "#6E07F3" } }}
            >
              Get in touch
            </Button>
          </ScrollLink>
        </StyledContent>
      </Container>

      <Container >
        <Typography variant="h4" sx={{ mt: 10, mb: 10, textAlign: 'center' }}>
          Hi, Nice to meet you,
        </Typography>
        <Grid container spacing={3} sx={{ alignItems: 'center' }}>
          <Grid item xs={12} md={6} lg={4}>

            <img src='/assets/images/avatars/avatar_default.jpg' style={{borderRadius: "2%"}} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>

            <Typography sx={{ color: 'text.secondary', textAlign: 'justify' }}>
              My name is Giovanni, I am on my 5th semester studying Systems Engineering. I am Full Stack Developer specialized in Python Django Rest Framework & React with Redux and Marketing Specialist.

              <br />

              Leadership skills and team person.
              <br />
              Tools & Frameworks:

              <ListTools />
            </Typography>

          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 5 }}>
          <Grid item xs={12} sm={12} md={4} >
            <Services title="Web development using the most recent frameworks & SEO optimization." total={'Web Development'} icon={'ant-design:code-filled'}
              sx={{
                transition: 'transform 250ms',
                '&:hover': {
                  transform: 'scale(0.9)',
                }
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Services title="dApps and smart contracts development based on Ethereum." total={'Blockchain Development'} color="info" icon={'cib:bitcoin'}
              sx={{
                transition: 'transform 250ms',
                '&:hover': {
                  transform: 'scale(0.9)',
                }
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Services title="Focused in your potential clients." total={'Marketing & Adversting'} color="warning" icon={'cib:google-ads'}
              sx={{
                transition: 'transform 250ms',
                '&:hover': {
                  transform: 'scale(0.9)',
                }
              }}
            />
          </Grid>


        </Grid>

        <Typography variant="h4" sx={{ mt: 10, textAlign: 'center' }}>
          Portfolio
        </Typography>
        <Container maxWidth='md'>
          <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>
            These are some of the latest projects I've worked on. Built with different technologies such as React, PHP, Python/Django, WordPress. In addition, I have planned marketing and advertising strategies in them.
          </Typography>
        </Container>

        {projects !== null && projects && <>
          <ProjectsList projects={projects} sx={{ my: 2 }} />
        </>}

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" >
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ mt: 2, mr: 2 }}>
            <RouterLink to={'/projects'} style={{ textDecoration: 'none', color: '#6E07F3', }} >

              <Button size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}>
                View all
              </Button>
            </RouterLink>

          </Stack>
        </Stack>

        <GetInTouch />

        <Grid container spacing={3} sx={{ mt: 5 }}>

          <Grid item xs={12} md={6} lg={8}>

            {experience !== null && experience &&
              <>
                <Experience
                  title="Professional Experience"
                  list={experience}
                />
              </>}

          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            {education !== null && education &&
              <>
                <Education
                  title="Education"
                  list={education}
                />
              </>}

          </Grid>


        </Grid>
      </Container>
    </>
  );
}

const mapStateToProps = state => ({
  projects: state.Projects.projects,
  education: state.Education.education,
  experience: state.Experience.experience
})

export default connect(mapStateToProps, {
  get_project,
  get_projects,
  get_education,
  get_experience
})(Home)