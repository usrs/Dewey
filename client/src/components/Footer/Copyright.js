import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';



//Need to update link
const Copyright = () =>
{
    return (
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        <Link color="inherit" href="">
          Dewey
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

export default Copyright


