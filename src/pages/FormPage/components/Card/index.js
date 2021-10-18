import React from 'react';
import './style.css';

function Card(props){
  return <div 
  className="card" 
  style={{background: `url(${props.url})`}}
  >
  </div>
}

export default Card;