import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, Container, Typography, Link, Stack, Divider, Card } from '@mui/material';
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
import { useEffect } from 'react';
import { connect } from 'react-redux';
import ContactForm from 'src/components/home/ContactForm';
import { ProductCartWidget, ProductList } from 'src/sections/@dashboard/products';

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
}) => {
  const theme = useTheme();

  useEffect(() => {
    // window.scrollTo(0, 0);
    get_projects(4);
  }, [])

  return (
    <>
      
      <Helmet>
        <title>Giovanni - Portfolio</title>
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
          <Button to="#contact" size="large" variant="contained" component={RouterLink} 
          sx={{ backgroundColor: '#6E07F3', '&:hover' : {backgroundColor: "#5BE9B9"} }} >
            Contact me
          </Button>
        </StyledContent>
      </Container>



      
      <Container >
        <Typography variant="h4" sx={{ mt: 10, mb: 5, textAlign: 'center' }}>
          Hi, Nice to meet you,
        </Typography>
        <Container maxWidth='md' sx={{ mb: 5 }}>


          <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>
            My name is Giovanni, I am on my 5th semester studying Systems Engineering. I am Software Developer and Marketing Specialist.

            Tools & Frameworks: React, Redux, Tailwind CSS, Python/Django, JavaScript/Node.Js, PHP, PostgreSQL, C++, Facebook Ads, Google Ads. <br />

            Leadership skills and team person.
          </Typography>
        </Container>

        <Grid container spacing={3} >
          <Grid item xs={12} sm={12} md={4} >
            <AppWidgetSummary  title="Web development using the most recent frameworks & SEO optimization." total={'Web Development'} icon={'ant-design:code-filled'}
            sx={{transition: 'transform 250ms',
            '&:hover':{
              transform: 'scale(0.9)',
            }}}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <AppWidgetSummary title="dApps and smart contracts development based on Ethereum." total={'Blockchain Development'} color="info" icon={'cib:bitcoin'} 
            sx={{transition: 'transform 250ms',
            '&:hover':{
              transform: 'scale(0.9)',
            }}}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <AppWidgetSummary title="Focused in your potential clients." total={'Marketing & Adversting'} color="warning" icon={'cib:google-ads'} 
            sx={{transition: 'transform 250ms',
            '&:hover':{
              transform: 'scale(0.9)',
            }}}
            />
          </Grid>


        </Grid>

        <Container sx={{ my: 10 }}>
          <Typography variant="h4" sx={{ mb: 5 , textAlign: 'center'}}>
            Portfolio
          </Typography>
          <Container maxWidth='md'>
            
          
          <Typography  sx={{ color: 'text.secondary', textAlign: 'center'}}>
            These are some of the latest projects I've worked on. Built with different technologies such as React, PHP, Python/Django, WordPress. In addition, I have planned marketing and advertising strategies in them.

            In my GitHub you can see all the repositories and other projects I worked.

            Press the project for more info.
          </Typography>
          </Container>

          {projects !== null && projects && <>
            <ProductList products={projects} sx={{ my:2}}/>
          </>}
          <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
            <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 2, mr: 2 }}>
              <RouterLink to={'/projects'} style={{textDecoration: 'none', color: '#6E07F3', }} >

                View more projects
              </RouterLink>
              {/* <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort /> */}
            </Stack>
          </Stack>
          {/* <ProductCartWidget /> */}
        </Container>

        <Container maxWidth='sm' id="contact">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Sign in to Minimal
            </Typography>

            <Typography variant="body2" sx={{ mb: 5 }}>
              Don’t have an account? {''}
              <Link variant="subtitle2">Get started</Link>
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
              </Button>

              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
              </Button>

              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} />
              </Button>
            </Stack>

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                OR
              </Typography>
            </Divider>

            <ContactForm />
          </StyledContent>
        </Container>

        <Grid container spacing={3}>


          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>



          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid>
        </Grid>
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
})(Home)