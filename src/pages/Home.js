import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, Container, Typography, Link, Stack, Divider, Card, ListItem, List, ListItemIcon, ListItemText } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import { upperCase } from 'lodash';

// ------------ redux/actions
import { get_project, get_projects } from '../redux/actions/projects';
import { get_education } from '../redux/actions/education';
import { get_experience } from '../redux/actions/experience';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import ContactForm from 'src/components/home/ContactForm';
import { ProductCartWidget, ProductList } from 'src/sections/@dashboard/products';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

const StyledContent = styled('div')(({ theme }) => ({
  // maxWidth: 480,
  margin: 'auto',
  // minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(5, 0),
}));



// ----------------------------------------------------------------------

const Home = ({
  get_project,
  get_projects,
  projects,
  get_education,
  get_experience,
  experience,
  education,
}) => {
  const theme = useTheme();

  useEffect(() => {
    // window.scrollTo(0, 0);
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
          {/* <Typography variant="h3" paragraph>
            Backend Developer 
          </Typography> */}

          {/* <Typography  variant="h3"sx={{ color: 'text.secondary' }}> */}
          <Typography variant="h3" sx={{ color: '#5BE9B9' }}>
            I'm a Backend Developer & Marketing Specialist
          </Typography>

          <Box
            component="img"
            src="/assets/images/hero-devices.svg"
            // src="/assets/illustrations/illustration_404.svg"
            sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
          />

          {/* <Button to="#" size="large" variant="contained" component={RouterLink} > */}
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
              My name is Giovanni, I am on my 5th semester studying Systems Engineering. I am Software Developer and Marketing Specialist.

              Tools & Frameworks: React, Redux, Tailwind CSS, Python/Django, JavaScript/Node.Js, PHP, PostgreSQL, C++, Facebook Ads, Google Ads. <br />

              Leadership skills and team person.

              <Grid container>
                <Grid item xs={12} sm={6}>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <ArrowForwardIosIcon sx={{color:"#5BE9B9"}} />
                      </ListItemIcon>
                      <ListItemText primary="Python - Django" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ArrowForwardIosIcon sx={{color:"#5BE9B9"}} />
                      </ListItemIcon>
                      <ListItemText primary="JavaScript - Node.js" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ArrowForwardIosIcon sx={{color:"#5BE9B9"}} />
                      </ListItemIcon>
                      <ListItemText primary="PHP" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ArrowForwardIosIcon sx={{color:"#5BE9B9"}} />
                      </ListItemIcon>
                      <ListItemText primary="React - Redux" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ArrowForwardIosIcon sx={{color:"#5BE9B9"}} />
                      </ListItemIcon>
                      <ListItemText primary="Tailwind CSS - Material UI" />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <ArrowForwardIosIcon sx={{color:"#5BE9B9"}} />
                      </ListItemIcon>
                      <ListItemText primary="Solidity - Web3" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ArrowForwardIosIcon sx={{color:"#5BE9B9"}} />
                      </ListItemIcon>
                      <ListItemText primary="MySQL - PostgreSQL" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ArrowForwardIosIcon sx={{color:"#5BE9B9"}} />
                      </ListItemIcon>
                      <ListItemText primary="C++" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ArrowForwardIosIcon sx={{color:"#5BE9B9"}} />
                      </ListItemIcon>
                      <ListItemText primary="Facebook Ads - Google Ads" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ArrowForwardIosIcon sx={{color:"#5BE9B9"}} />
                      </ListItemIcon>
                      <ListItemText primary="Open to Work Remotely" />
                    </ListItem>

                  </List>
                </Grid>
              </Grid>
            </Typography>

          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 5 }}>
          <Grid item xs={12} sm={12} md={4} >
            <AppWidgetSummary title="Web development using the most recent frameworks & SEO optimization." total={'Web Development'} icon={'ant-design:code-filled'}
              sx={{
                transition: 'transform 250ms',
                '&:hover': {
                  transform: 'scale(0.9)',
                }
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <AppWidgetSummary title="dApps and smart contracts development based on Ethereum." total={'Blockchain Development'} color="info" icon={'cib:bitcoin'}
              sx={{
                transition: 'transform 250ms',
                '&:hover': {
                  transform: 'scale(0.9)',
                }
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <AppWidgetSummary title="Focused in your potential clients." total={'Marketing & Adversting'} color="warning" icon={'cib:google-ads'}
              sx={{
                transition: 'transform 250ms',
                '&:hover': {
                  transform: 'scale(0.9)',
                }
              }}
            />
          </Grid>


        </Grid>

        {/* <Container sx={{ mt: 10 }}> */}
        <Typography variant="h4" sx={{ mt: 10, textAlign: 'center' }}>
          Portfolio
        </Typography>
        <Container maxWidth='md'>


          <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>
            These are some of the latest projects I've worked on. Built with different technologies such as React, PHP, Python/Django, WordPress. In addition, I have planned marketing and advertising strategies in them.
          </Typography>
        </Container>

        {projects !== null && projects && <>
          <ProductList products={projects} sx={{ my: 2 }} />
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


        <Grid container spacing={3} sx={{ pt: 16 }} name='contactsection' id="contactsection">
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ px: 2.5, py: 3}}>
              <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
                <Box
                  component="img"
                  src="/assets/illustrations/illustration_contact.png"
                  // sx={{ width: 100, position: 'absolute', top: -50 }}
                />

                <Box sx={{ textAlign: 'center' }}>
                  <Typography gutterBottom variant="h6">
                   Like what you see?
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Thank you for visiting my website, I would love to work with you. Contact me.
                  </Typography>
                </Box>

                
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={8} >
            <Card>
              <StyledContent sx={{ px: 3 }} >
                <Typography variant="h4" gutterBottom>
                  Get in touch
                </Typography>

                <Typography variant="body2" >
                  Send me an email, I appreciate your message.
                </Typography>



                <Divider sx={{ my: 3 }}>

                </Divider>

                <ContactForm />
              </StyledContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 5 }}>

          <Grid item xs={12} md={6} lg={8}>

            {experience !== null && experience &&
              <>
                <AppNewsUpdate
                  title="Professional Experience"
                  list={experience}
                />
              </>}

          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            {education !== null && education &&
              <>
                <AppOrderTimeline
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