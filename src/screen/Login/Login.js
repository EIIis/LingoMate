import React from 'react';
import SignUp from '../../components/SignUp';
import { Container } from 'react-bootstrap';
import { StyleSheet, css } from 'aphrodite';
import { AuthProvider } from '../../context/AuthContext';

function Login(){
    return(
        <AuthProvider>
            <Container className={css(styles.container)}>
                <div className={css(styles.login)}>
                    <SignUp />
                </div>
            </Container>
        </AuthProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        textDecorationLine: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    login: {
        width: '100%',
        maxWidth: '400px',
    },
})

export default Login;
