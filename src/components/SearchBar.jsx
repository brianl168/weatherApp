import React from 'react';
import styles from '../style/search.module.css';
import { useState } from 'react';

export default function SearchBar(props) {
  const [value, newvalue] = useState({city: ""});
  function handleChange(e){
    newvalue({city: e.target.value});
  }
  function onKeypress(e){
    if(e.key === 'Enter'){
      e.preventDefault()
      props.onSearch(value.city)
      newvalue({city: ""})
    }
  }
  return (
    <div className={styles.search}>
     <div className={styles.searchfunction}>
      <input type="text" id="input" className={styles.busqueda} placeholder="City..." onChange={handleChange} onKeyPress={onKeypress} value={value.city}/>
      <button className={styles.boton} onClick={(e) => {
        e.preventDefault()
        props.onSearch(value.city)
        newvalue({city: ""})
        }} >Add</button>
     </div>
    </div>
  )
};