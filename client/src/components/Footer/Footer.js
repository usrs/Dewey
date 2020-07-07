  
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Copyright from '../Footer/Copyright.js';
import './Footer.css'

const media = 
{
  xs: (styles) => `
  @media only screen and (max-width: 480px){
    ${styles} 
  }`
}

const responsiveStyles = makeStyles((theme) =>
  {
    root:
    {

    }
    xs: (styles) =>
    `@media only screen and (max-width: 480px){${styles}}`
  }
)

const useStyles = makeStyles((theme) =>
(
  {
    root:
    {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    footer:
    {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor: '#E44D2E',
    },
    spacing:
    {
        width: 500,
        color: '#D8CFD1',
    },
  }
));


const StickyFooter = () => {
    const classes = useStyles();
    const respClasses = responsiveStyles();
    const [value, setValue] = React.useState(0);

    return (
        
        <div className={`classes.root respClasses.root`}>
        <CssBaseline />
        <footer className={`classes.footer respClasses.footer`}>
          <Container maxWidth="sm">
              
            <BottomNavigation value={value} onChange={(event, newValue) => {setValue(newValue);}} showLabels className={`classes.spacing respClasses.spacing`}>

                <BottomNavigationAction label="Home" href="../pages/Homepage/Homepage.js"/>
                <BottomNavigationAction label="About Us" href="../pages/Homepage/index.js"/>
                <BottomNavigationAction label="Contact Us" href="../pages/Homepage/Homepage.js"/>

            </BottomNavigation>
            <Copyright />
            </Container>
        </footer>
        </div>
    );
  }

  export default StickyFooter