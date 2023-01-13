
import { Container, Box, Typography, Link, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';




export default function Footer() {
//     const styles = useTheme((theme) => ({
//         rootBox: {
//           [theme.breakpoints.down('md')]: {
//             justifyContent: 'center'
//           }
//         },
//         footerNav: {
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'center',
//           marginRight: 'auto',
//           marginLeft: theme.spacing(3),
//           marginBottom: theme.spacing(0),
      
//           [theme.breakpoints.down('md')]: {
//             width: '100%',
//             marginLeft: 'auto',
//             marginTop: theme.spacing(3),
//             marginBottom: theme.spacing(2),
//           }
//         },
//         footerLink: {
//           marginLeft: theme.spacing(3),
//           marginRight: theme.spacing(3),
//           [theme.breakpoints.down('md')]: {
//             marginBottom: theme.spacing(2),
//           }
//         },
//       }));
//   const classes = styles();

//   const content = {
//     // 'brand': { image: 'nereus-assets/img/nereus-light.png', width: 110 },
//     'copy': '© 2020 Nereus All rights reserved.',
//     'link1': 'First Link',
//     'link2': 'Second Link',
//     'link3': 'Third Link',
//     'link4': 'Fourth Link',
//     // ...props.content
//   };

//   let brand;

//   if (content.brand.image) {
//     brand = <img src={ content.brand.image } alt="" width={ content.brand.width } />;
//   } else {
//     brand = content.brand.text || '';
//   }

  return (
    <footer >
        <Box >
            
      <Container maxWidth="lg" >
      <Divider sx={{ borderStyle: 'dashed' }} />
        <Box py={6} display="flex" flexWrap="wrap" alignItems="center" justifyContent='center'  className={''}>
            <Typography>
            © {new Date().getFullYear()} Giovanni Borgogno |
            </Typography>
            <Typography>
            | Built with Django Rest & React Redux
            </Typography>
         </Box>
      </Container>
        </Box>
    </footer>
  );
}