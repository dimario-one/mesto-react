import '../../index.css';
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

const Card = (props) => {

    const currentUser = React.useContext(CurrentUserContext);

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = props.card.id === currentUser.id;
    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `cards__basket ${isOwn ? 'cards__basket_active' : 'cards__basket_hidden'}`
    );

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = props.card.likes.some(i => i._id === currentUser.id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (`cards__like ${isLiked ? 'cards__like_active' : ' '}`);

function handleDeleteClick (){
    props.onCardDelete(props.card);
}

    function handleClick() {
        props.onCardClick(props.card);
        console.log("Меня нажали")

    }

    function handleLikeClick() {
        props.onCardLike(props.card)
   
    }

    return (<li className="cards__item" >
        <button className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
        <img className="cards__pic cards__type_temlate_pic"
            src={props.src}
            alt={props.title}
            onClick={handleClick}
        />
        <div className="cards__container" >
            <h2 className="cards__text cards__type_temlate_text" > {props.title}</h2>
            <div className="cards__minicontainer" >
                <button className={cardLikeButtonClassName} onClick={handleLikeClick} aria-label="like" type="button"></button>
                <span className="cards__like-counter" >{props.card.likes.length}
                </span> </div> </div>
    </li>
    )
}

export default Card;