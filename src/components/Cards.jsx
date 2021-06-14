import React from 'react';
import Card from './Card';
import styles from '../style/Cards.module.css';

export default function Cards(props) {
  var ciudades = (props.cities);
  let fun = props.onClose;
  if(ciudades.length === 0) return (
  <div className={styles.noCards}>
    <h2>Mmm...nothing to show here...try to ADD a new city!</h2>
  </div>
  )
  return (<div className={styles.cards}>
    {
      ciudades?.map(ciudad => Card({
        id : ciudad.id,
        max: ciudad.max,
        min: ciudad.min,
        name: ciudad.name,
        img: ciudad.img,
        onClose: fun
      }))
    }
    </div>
          )
};