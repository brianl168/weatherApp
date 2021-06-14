import React from "react";
import { useState } from 'react';

const API_KEY = "";

function photo(cityname,newvalue){
    let CITY = cityname
    fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${CITY}&key=${API_KEY}&inputtype=textquery&fields=name,photos`)
    .then((recurso) => recurso.json())
    .then(function image(recurso){
        newvalue(recurso.candidates[0].photos[0].photo_reference)
        console.log(recurso.candidates[0])
    })
}


export default function Cityimg({ city }){
    const [value, newvalue] = useState();
    photo(city,newvalue);
    return (
        <>
          <img src={`https://maps.googleapis.com/maps/api/place/photo?photoreference=${value}&key=${API_KEY}&maxwidth=400&maxheight=400`} alt="Cargando."/>
        </>
    )
}