import * as React from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import './Login.css';
import request from 'superagent';
import { serverBase } from './config';

const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        request.post(serverBase + '/auth/local')
            .send({
                identifier: event.target.email.value,
                password: event.target.password.value
            })
            .then(console.log)
    }

    return <Grid container justify="center">
        <Grid item xs={6}>
            <Paper className="login-form">
                <h1>Iniciar Sesión</h1>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="email"
                        label="Correo Electrónico"
                        fullWidth
                        margin="normal"
                        />
                    <TextField
                        id="password"
                        label="Contraseña"
                        type="password"
                        fullWidth
                        margin="normal"
                        />
                    <Button color="primary" variant="contained" type="submit">Entrar</Button>
                </form>
            </Paper>
        </Grid>
    </Grid>;
}

export default Login;