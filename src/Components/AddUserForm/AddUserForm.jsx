import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

export default function AddressForm({ setIsOpen, addUser }) {
    const [formData, setFormData] = useState({
        id: Math.floor(Math.random() * 10000),
        firstname: "",
        lastName: "",
        address: "",
        status: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(() => {
            return {
                firstName: "",
                lastName: "",
                address: "",
                status: ""
            }
        })
        addUser(formData);
        setIsOpen(false);
    }

    return (
        <>
            <Container maxWidth="sm">
                <Typography variant="h6" gutterBottom>
                    Shipping address
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="fname"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="lname"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address"
                                name="address"
                                label="Address"
                                fullWidth
                                autoComplete="billing address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="status"
                                name="status"
                                label="Status"
                                fullWidth
                                autoComplete="status"
                                value={formData.status}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className=""
                            >
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>
    );
}
