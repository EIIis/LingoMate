import React from 'react';
import './App.css';
import Homepage from './screen/HomePage/Homepage';
import Profile from './screen/ProfilePage/Profile';
import NavBar from './components/NavBar';
import Form from './screen/FormPage/Form';
import About from './screen/About/About';
import Login from './screen/Login/Login';
// import Chat from './screen/ChatPage/Chat';

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
