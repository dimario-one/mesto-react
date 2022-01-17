
import React from 'react';
import Card from '../Card/Card';

function ImagePopup(props) {

  return (
<div className={`popup popup_type_image ${props.card ? 'popup_open' : " " }`}>
        <div className="popup__container">
            <button className="popup__close-button popup__close-image" type="button" onClick={props.onClose}></button>
            <img className=" popup__pic" src={props.card.src} alt={props.card.title}/>
            <h2 className="popup__title popup__title_white">{props.card.title}</h2>
        </div>
    </div>
  )
}


export default ImagePopup;