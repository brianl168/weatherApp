import styles from '../style/About.module.css'
import React from 'react';

export default function About(){
    return (
        <div className={styles.aboutText}>
            <h2>This is a simple app created by A. Brian Lopez, this app was created for the daily homework in HENRY-funded by Y COMBINATOR.</h2>
            <h2>The objective was to show in a simple weather app that the introductory knowledge of React technology was acquired, good routing management, request to API's and demonstrate a notable improvement in CSS management (still advancing)</h2>
        </div>
    )
}
