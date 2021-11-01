import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { StyleSheet, css } from 'aphrodite';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from "react-router-dom"



export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try{
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        }catch{
        setError("Failed to create an account")
        }
        setLoading(false)
    }

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className={css(styles.title)}>Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>

                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>

                    <Form.Group id="password-confirm">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required />
                    </Form.Group>
                    <Button disabled={loading} className={css(styles.button)} type="submit">Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className={css(styles.footer)}>
            <p>Already have an account? <Link to="/loginform">Login</Link></p>
        </div>
        </>
  );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginBottom: '4',
    },
    button: {
        width: '100%',
    },
    footer: {
        width: '100%',
        textAlign: 'center',
        marginTop: '2',
    },
})
