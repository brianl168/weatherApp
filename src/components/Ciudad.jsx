import styles from '../style/Ciudad.module.css';
import React from "react";
import Cityimg from './Cityimg';


export default function Ciudad({city}) {
    if(city === null) return (
        <div className={styles.error}>
            <h2>The city is not in your list</h2>
        </div>
    )
    return (
        <div className={styles.info}>
                <h2>{city.name}</h2>
                <div className={styles.data}>
                    <div>Temperature: {city.temp} ºC</div>
                    <div>Wheater: {city.weather}</div>
                    <div>Wind: {city.wind} km/h</div>
                    <div>Clouds: {city.clouds}</div>
                    <div>Latitude: {city.latitud}º</div>
                    <div>Longitude: {city.longitud}º</div>
                </div>
                <div className={styles.image}>
                    <Cityimg city={city.name}></Cityimg>
                </div>
        </div>
    )
}
