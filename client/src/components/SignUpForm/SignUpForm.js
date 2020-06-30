import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        '& > *': {
            margin: theme.spacing(1),
        },
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}))

const SignUpForm = () => {
    const classes = useStyles()

    return (
        <div>
            <h1>Sign Up Here</h1>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="outlined-required"
                        label="username"
                        defaultValue="username"
                        variant="outlined"
                    />
                    <Button
                        variant="outlined"
                        label="signInBtn"
                        color="primary"
                        href="#outlined-buttons">
                        Sign-Up
      </Button>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="outlined-required"
                        label="password"
                        defaultValue="password"
                        variant="outlined"
                    />
                    <Button
                        variant="outlined"
                        label="signInBtn"
                        color="primary"
                        href="#outlined-buttons">
                        Password
        </Button>
                </Grid>
            </Grid>
        </div>

    )
}

export default SignUpForm