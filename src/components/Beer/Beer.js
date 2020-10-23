import React from 'react';
import './beer.css';
import Like from '../heart/heart.js';

const Beer = (props) => {
    return (
       
            <li className="beer_list-item">
                <ul>
            <h1>{props.beer.name}</h1>
            <p>{props.beer.tagline}</p>
            <p>{props.beer.first_brewed}</p>
            <img src={props.beer.image_url} className="beer_image"/>
            <Like />
                </ul>
            </li>
        
    )
}

export default Beer;