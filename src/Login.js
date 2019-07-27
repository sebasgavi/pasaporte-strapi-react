import * as React from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import './Login.css';

const Login = () => {
    return <Grid container justify="center">
        <Grid item xs={6}>
            <Paper className="login-form">
                <h1>Iniciar Sesión</h1>
                <form>
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
                    <Button color="primary" variant="contained">Entrar</Button>
                </form>
            </Paper>
        </Grid>
    </Grid>;
}

export default Login;