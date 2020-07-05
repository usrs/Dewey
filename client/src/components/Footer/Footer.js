  
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Copyright from '../Footer/Copyright.js';


const Colors =
{
  footerGeneral: {main : '#D8CFD1',},
  sectionSelection: {main: '#00B596',}
}
const useStyles = makeStyles((theme) =>
({
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
}));


const StickyFooter = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        
        <div className={classes.root}>
        <CssBaseline />
        <footer className={classes.footer}>
          <Container maxWidth="sm">
              
            <BottomNavigation value={value} onChange={(event, newValue) => {setValue(newValue);}} showLabels className={classes.spacing}>

                <BottomNavigationAction label="Home" href=""/>
                <BottomNavigationAction label="About Us" href=""/>
                <BottomNavigationAction label="Contact Us" href=""/>

            </BottomNavigation>
            <Copyright />
            </Container>
        </footer>
        </div>
    );
  }

  export default StickyFooter