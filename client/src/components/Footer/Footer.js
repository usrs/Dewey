  
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from'@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Copyright from '../Footer/Copyright.js';

/*
const media = 
{
  xs: (styles) => `
  @media only screen and (max-width: 480px){
    ${styles} 
  }`
}

const responsiveStyles = makeStyles((theme) =>
  {
    xs:
    `@media only screen and (max-width: 480px){${theme}}`
  }
)*/

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
      width: "100%",
      marginTop: 'auto',
      // marginLeft: 'auto',
      // marginRight: 'auto',
      backgroundColor: 'white',
    },
    spacing:
    {
        margin: 'auto',
        backgroundColor: 'white',
        fontColor: '#E44D2E',
    },
    link: {
      color: "#E44D2E"
    }
  }
));


const StickyFooter = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

  const homeRedirect = () => {
    window.location = '/Homepage'
  }

    const aboutRedirect = () => {
      window.location = './AboutUs'
    }

    return (
        
      <div className={classes.root}>
        <CssBaseline />
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Button onClick={homeRedirect} className={classes.link}>Home</Button>
              <Button onClick={aboutRedirect} className={classes.link}>About Us</Button>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Copyright />
            </Grid>
          </Container>
        </footer>
      </div>
    );
  }

  export default StickyFooter