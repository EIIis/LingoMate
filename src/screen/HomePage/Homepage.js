import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Color from '../../util/Color';

import BlueBG from '../../assets/Homepage/BlueBG.svg';
import People from '../../assets/Homepage/people.svg';

/*
function HomePage(){
    return(
    
        <div className={css(styles.container)}>
        <img src={BlueBG} alt="blueBackground" className={css(styles.BlueBG)} />
        <div className={css(styles.picAlignment)}>
            <img src={People} alt="Two people talking, over a cup of coffee" className={css(styles.People)} />
            <div className={css(styles.textAlignment)}>
                <p className={css(styles.text)}>Get matched with a peer and start learning a  new language today.</p>
                <button className={css(styles.button)} onClick={() => { alert('You clicked the button!');}}>
                    Get Matches
                </button>
            </div>
        </div>
    </div>
    );
}
*/

function HomePage(){
    return(
        <div className={css(styles.container)}>
            <img src={BlueBG} alt='blueBackground' className={css(styles.background)} />
            <img src={People} alt='Two people talking, over a cup of coffee' className={css(styles.middle)} />
        </div>
    );
}
const styles = StyleSheet.create({
    background:{
        position: 'relative',
        top: '0',
        left: '0',
    },
    middle:{
        position: 'absolute',
        top: '60px',
        left: '80px',
    },
    container:{
        position: 'relative',
        top: '0',
        left: '0',
    },
});

/*
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
    picAlignment: {
        position: 'absolute',
        right: '0',
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
});
*/

export default HomePage;
