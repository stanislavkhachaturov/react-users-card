import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function AddressForm({ setIsOpenEdit, saveСhangedUser, currentUser }) {
    const classes = useStyles();

    const [user, setUser] = useState(currentUser);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();       
        saveСhangedUser(user);
        setIsOpenEdit(false);
    }
    
    return (
        <>
            <Container maxWidth="sm">
                <Typography variant="h6" gutterBottom>
                    User card
                </Typography>
                <form onSubmit={handleSubmit} className={classes.margin}>
                    <TextField
                        className={classes.margin}
                        label="First name"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleChange}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                        ),
                        }}
                    /> 
                    <TextField
                        className={classes.margin}
                        name="lastName"
                        label="Last Name"
                        value={user.lastName}
                        onChange={handleChange}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                        ),
                        }}
                    />
                    <TextField
                        className={classes.margin}
                        name="address"
                        label="Address"
                        value={user.address}
                        onChange={handleChange}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                        ),
                        }}
                    />
                    <TextField
                        className={classes.margin}
                        name="status"
                        label="Status"
                        value={user.status}
                        onChange={handleChange}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                        ),
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className=""
                    >
                        Save
                    </Button>
                </form>
            </Container>
        </>
    );
}
