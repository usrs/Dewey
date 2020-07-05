import React, { useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import SignUpContext from '../../utils/SignUpContext'
import Logo from '../../Logo/deweyGray.png'

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
        marginTop: theme.spacing(1),
        color: 'white'
    },
    button: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(19),
        color: "#E44D2E"
    },
    text: {
        textAlign: 'center',
        textSize: "",
        color: "white",
        marginLeft: theme.spacing(3),
    },
    card: {
        maxWidth: 200,
        display: 'inline-block',
        transform: 'scale(0.8)'
    },
    large: {
        width: theme.spacing(16),
        height: theme.spacing(16),
        marginTop: theme.spacing(3),
        margin: "auto"
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
            <Avatar alt="Dewey" src={Logo} className={classes.large} />
            {/* <h1 className={classes.text}>Dewey</h1> */}
            <h3 className={classes.text}>Welcome to Dewey, your digital library</h3>
            <Grid container spacing={3}>
                <Grid  item xs={12}>
                    <TextField
                        className={classes.input}
                        required
                        id="outlined-required"
                        label="name"
                        name="name"
                        variant="outlined"
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