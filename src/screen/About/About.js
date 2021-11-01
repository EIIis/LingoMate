import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Color from '../../util/Color';

import RedBG from '../../assets/Homepage/RedBG.svg';
import Reading from '../../assets/Homepage/reading.svg';


function About() {
  return (
    <div>
    <p className={css(styles.aboutUS)}>About Us</p>

    <div className={css(styles.container)}>
        <img src={RedBG} alt="" className={css(styles.RedBG)} />
        <div>
        <div className={css(styles.picBAlignment)}>
            <img src={Reading} alt="" className={css(styles.readingBook)} />
        </div>
        <div className={css(styles.picCAlignment)}>
            <div className={css(styles.textBorder)}>
                <p className={css(styles.textBox)}>
                Ever want to learn a new language but never had the time or the money? Maybe you want real world experience?
                </p>
                <p className={css(styles.textBox)}>
                Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. 
                </p>
                <p className={css(styles.textBox)}>
                Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. 
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
        paddingLeft: '50%',
    },
    container: {
        position: 'relative',
        // textAlign: 'left',
    },
    picAlignment: {
        position: 'absolute',
        top: '10px',
        left: '8px',
    },
    People: {
        width: '65%',
        height: '40%',
        paddingLeft: '2%',
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


/*
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.background,
    },
    title: {
        width: '100%',
        height: '10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.background,
    },
    content: {
        width: '100%',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.background,
    },
    
});
*/

export default About;
