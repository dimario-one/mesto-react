import '../../index.css';
import React from 'react';

const Card  =(props) => {

    function handleClick() {
        props.onCardClick(props.card);
      } 

    return (
        <li className="cards__item">
            <button className="cards__basket"></button>
            <img className="cards__pic cards__type_temlate_pic" src={props.src} alt={props.title} onClick={handleClick}/>
            <div className="cards__container">
                <h2 className="cards__text cards__type_temlate_text">{props.title}</h2>
                    <div className="cards__minicontainer">
                        <button className="cards__like" aria-label="like" type="button"></button>
                        <span className="cards__like-counter"></span>
                    </div>
            </div>
        </li>   
    )
}

export default Card;