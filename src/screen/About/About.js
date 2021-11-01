import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Color from '../../util/Color';

import RedBG from '../../assets/Homepage/RedBG.svg';
import Reading from '../../assets/Homepage/reading.svg';


function About() {
  return (
    <div>
    <p className={css(styles.aboutUS)}>About LingoMate </p>

    <div className={css(styles.container)}>
        <img src={RedBG} alt="" className={css(styles.RedBG)} />
        <div>
        <div className={css(styles.picBAlignment)}>
            <img src={Reading} alt="" className={css(styles.readingBook)} />
        </div>
        <div className={css(styles.picCAlignment)}>
            <div className={css(styles.textBorder)}>
                <p className={css(styles.textBox)}>
                Ever want to learn a new language but never had the time or the money? 
                Maybe you want real world experience?
                </p>
                <p className={css(styles.textBox)}>
                We are here to help you. At LingoMate, we match you with people who are either native speakers
                of the lanaguage you're trying to learn or are also trying to learn the same language. Do you what's
                the best part of it? It's all completely free! No more are you required to pay for a course to learn
                or struggle once you meet a native speaker.
                </p>
                <p className={css(styles.textBox)}>
                LingoMate was first thought of by a group of students, all with different nationalities, so we know
                how to help you. We are here to help you. At LingoMate, you're here to learn a new language, and we are 
                there to help you at every step of the way! 
                </p>
            </div>
        </div>
        </div>
    </div>
    </div>

    );
}

const styles = StyleSheet.create({
    RedBG: {
        width: '80%',
        height: '100%',
        paddingLeft: '20%',
    },
    container: {
        position: 'relative',
    },
    picAlignment: {
        position: 'absolute',
        top: '10px',
        left: '8px',
    },
    textAlignment: {
        position: 'absolute',
        bottom: '-280px',
        left: '8px',
        paddingLeft: '25%',
        width: '50%',
        paddingBottom: '-10%'
    },
    text: {
        font: '45px Asap Condensed',
        color: '#fff',
    },

    aboutUS: {
        font: '50px Hermeneus One',
        color: Color.black,
        textAlign: 'center',
    },


    picBAlignment: {
        position: 'absolute',
        top: '40%',
        left: '30%',
        transform: 'translate(-50%, -50%)',
    },
    picCAlignment: {
        position: 'absolute',
        top: '40%',
        left: '70%',
        transform: 'translate(-50%, -50%)',
    },
    readingBook: {
        width: '100%',
        height: '100%',
    },
    textBox: {
        font: '23px Poppins',
        color: Color.black,
    },
    textBorder: {
        border: '2px solid #000',
        borderRadius: '5px',
        paddingLeft: '6%',
        paddingRight: '2%',
        width: '567px',
        height: '466px',
        background: '#fff',
    },
});


export default About;
