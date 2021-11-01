import React from 'react';
import './App.css';
import Homepage from './screen/HomePage/Homepage';
import Profile from './screen/ProfilePage/Profile';
import NavBar from './components/NavBar';
import Form from './screen/FormPage/Form';
import About from './screen/About/About';
import Login from './screen/Login/Login';
// import Chat from './screen/ChatPage/Chat';
import Dashboard from "./components/Dashboard"
import LoginForm from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"

import { css, StyleSheet } from 'aphrodite';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class App extends React.Component {
    render() {
        return (
            <main className={css(styles.container)}>
                <BrowserRouter>
                <NavBar />
                    <Switch>
                    <Route exact path="/home" component={Homepage} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/form" component={Form} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/login" component={Login} />
                    {/* <Route exact path='/chat' component={Chat}/> */}
                    <PrivateRoute exact path="/" component={Dashboard} />
                    <PrivateRoute path="/update-profile" component={UpdateProfile} />
                    {/*<Route path="/signup" component={Signup} />*/}
                    <Route path="/loginform" component={LoginForm} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                    </Switch>
                </BrowserRouter>
            </main>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        overflowX: 'hidden',
    },
});

export default App;
