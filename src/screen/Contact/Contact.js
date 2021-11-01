import React from 'react';
import { StyleSheet, css } from 'aphrodite';




function HomePage(){
    return(
    
        <div className={css(styles.container)}>
        <div className={css(styles.textAlignment)}>
            <p className={css(styles.text)}>While we do believe that LingoMate is easy to navigate, there is always something that may 
            need to be explained a bit further</p>
            <p className={css(styles.text)}>For any concerns feel free to contact us at ellisalcantara@gmail.com or @EllisAlcantaraM on Twitter</p>
        </div>
    </div>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        paddingTop: '300px',

    },
    textAlignment: {
        position: 'absolute',
        
        left: '8px',
        paddingLeft: '25%',
        width: '70%',
    },
    text: {
        font: '45px Asap Condensed',
        color: 'black',
    },
});


export default HomePage;