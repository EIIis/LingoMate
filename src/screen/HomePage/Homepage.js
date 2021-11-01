import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Color from '../../util/Color';

import BlueBG from '../../assets/Homepage/BlueBG.svg';



function HomePage(){
    return(
    
        <div className={css(styles.container)}>
        <img src={BlueBG} alt="blueBackground" className={css(styles.BlueBG)} />
        <div className={css(styles.textAlignment)}>
            <p className={css(styles.text)}>Get matched with a peer and start learning a new language today. </p>
            <p className={css(styles.text)}>And you know the best part? It's completely free and always will be</p>
            <button className={css(styles.button)} onClick={() => { alert('You clicked the button!');}}>
                Get Matches
            </button>
        </div>
    </div>
    );
}

const styles = StyleSheet.create({
    BlueBG: {
        width: '80%',
        height: '150%',
        position: 'relative',    
        top: '0',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    textAlignment: {
        position: 'absolute',
        left: '8px',
        paddingLeft: '25%',
        width: '70%',
    },
    text: {
        font: '45px Asap Condensed',
        color: '#fff',
    },
    button: {
        background: Color.getstartedbutton,
        color: 'white',
        textAlign: 'center',
        width: '40%',
        height: 98,
        borderWidth: 0,
        borderRadius: 30,
        font: '35px Rubik',
        transition: 'transform 450ms',
        ':hover': {
            transform: 'scale(0.97)',
        },
    },
});


export default HomePage;
