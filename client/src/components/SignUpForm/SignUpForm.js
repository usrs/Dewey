import React, { useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import SignUpContext from '../../utils/SignUpContext'
import { TableCell } from '@material-ui/core'
import Box from '@material-ui/core/Box'

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
    },
    input: {
        marginLeft: theme.spacing(11),
        marginTop: theme.spacing(1)
    },
    button: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(19)
    }
}))

const SignUpForm = () => {
    const classes = useStyles()
    const {
        name,
        email,
        username,
        password,
        handleInputSignUpChange,
        handleSignUpSubmit
    } = useContext(SignUpContext)

    return (
        <div>
            <h1>Sign Up Here</h1>
            <Grid container spacing={3}>
                <Grid  item xs={12}>
                    <TextField
                        className={classes.input}
                        required
                        id="outlined-required"
                        label="name"
                        name="name"
                        variant="containfiled"
                        value={name}
                        onChange={handleInputSignUpChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        className={classes.input}
                        id="outlined-required"
                        label="email"
                        name="email"
                        variant="outlined"
                        value={email}
                        onChange={handleInputSignUpChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        className={classes.input}
                        id="outlined-required"
                        label="username"
                        name="username"
                        variant="outlined"
                        value={username}
                        onChange={handleInputSignUpChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        className={classes.input}
                        id="outlined-required"
                        label="password"
                        name="password"
                        variant="outlined"
                        value={password}
                        onChange={handleInputSignUpChange}
                    />
                    </Grid>
                    <Grid>
                    <Button
                        className={classes.button}
                        variant="contained"
                        label="signInBtn"
                        // color="primary"
                        href="#outlined-buttons"
                        onClick={handleSignUpSubmit}>
                        Sign-Up
                    </Button>
                </Grid>
            </Grid>
        </div>

    )
}

export default SignUpForm