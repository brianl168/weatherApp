import React from 'react';
import styles from '../style/Card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
  var idimg = props.img;
  const id = props.id;
  return (
    <div className="Card" key={props.id}>
      <div className={styles.card}>
        <div className={styles.head}>
          <Link to={`/ciudad/${id}`} >
            <h2>{props.name}</h2>
          </Link>
        <button className={'btn btn-danger ' + styles.boton} type="button" onClick={() => props.onClose(props.id)} >X</button>
      </div>
      <div className={styles.temperature}>
        <div className={styles.data}>
          <h5>Min.</h5>
          <h5>{props.min}°</h5>
        </div>
        <div className={styles.data}>
          <h5>Max.</h5>
          <h5>{props.max}°</h5>
        </div>
        <img className={styles.ico} src={`http://openweathermap.org/img/wn/${idimg}@2x.png`} alt="not found." />
        </div>
      </div>
    </div>
          )
};