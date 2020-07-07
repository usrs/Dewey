import React, { useContext, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { Collapse, Navbar, NavbarToggler, Alert } from 'reactstrap'
import SignUpContext from '../../utils/SignUpContext'
import Logo from '../../Logo/deweyWhite.png'

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
        background: "white",
        // border: "1px",
        borderColor: "E44D2E",
        borderRadius: "5px"
    },
    button: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(17),
        color: "#E44D2E"
    },
    text: {
        textAlign: 'center',
        textSize: "",
        color: "black",
        marginLeft: theme.spacing(1),
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
    },
    login: {
        color: "white",
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(13)
    },
    what: {
        color: "white",
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(15)
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    alert: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(10)
    },
    alertText: {
        color: "#E44D2E"
    },
    link: {
        fontWeight: "bold",
        color: "#E44D2E",
        textDecoration: "underline"
    }
}))

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    modalTitle: {
        color: "#E44D2E"
    }
})

const DialogTitle = withStyles(styles)((props) => {
        const { children, classes, onClose, ...other } = props
        return (
            <MuiDialogTitle disableTypography className={classes.root} {...other}>
                <Typography variant="h6">{children}</Typography>
                {onClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </MuiDialogTitle>
        )
    })

const SignUpForm = props => {
    const classes = useStyles()
    const {
        name,
        email,
        username,
        password,
        handleInputSignUpChange,
        handleSignUpSubmit,
        handleLoginDivert
    } = useContext(SignUpContext)

    

    const DialogContent = withStyles((theme) => ({
        root: {
            padding: theme.spacing(2),
        },
    }))(MuiDialogContent)

    
        const [open, setOpen] = React.useState(false)

        const handleClickOpen = () => {
            setOpen(true)
        }
        const handleClose = () => {
            setOpen(false)
        }
        

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (

        <>
        <div>
            <Avatar alt="Dewey" src={Logo} className={classes.large} />
            {/* <h1 className={classes.text}>Dewey</h1> */}
            <h3 className={classes.text}>Sign Up</h3>
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
                        type="password"
                        value={password}
                        onChange={handleInputSignUpChange}
                    />
                    </Grid>
                    <Grid>
                    <Button
                        className={classes.button}
                        variant="contained"
                        label="signUpBtn"
                        // color="primary"
                        href="#outlined-buttons"
                        onClick={
                           handleSignUpSubmit,
                           toggleNavbar
                            }>
                        join dewey
                    </Button>
                        <Collapse isOpen={!collapsed} className={classes.alert}>
                            <Alert color="light" className={classes.alertText}>
                                Success! please login <a href="/Login" className="alert-link" className={classes.link}>here</a>
                            </Alert>
                        </Collapse>
                    <Button 
                        className={classes.login}
                        onClick={handleLoginDivert}>
                        Already a user? Login
                    </Button>
                </Grid>
            </Grid>
        </div>
        <div>
                <Button className={classes.what} variant="text" color="primary" onClick={handleClickOpen}>
                    What is dewey?
                </Button>
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        What is Dewey?
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom className={classes.modalTitle}>
                            Dewey is your online personal library. It allows you to keep track of all of your books and is perfect for the reader that has a large collection lining their shelves at home. Simply search for your book by name or ISBN and save it to your digital library! It's that easy.
                        </Typography>
                    </DialogContent>
                </Dialog>
        </div>
    </>
    )
}

export default SignUpForm