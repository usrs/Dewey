  
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Copyright from '../Footer/Copyright.js'

//Need to update the website link in Copyright()
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
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
    spacing:
    {
        width: 500,
    },
    about:
    {
        backgroundColor:
        theme.palette
    }
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