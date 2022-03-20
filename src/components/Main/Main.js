import React from 'react';
import Card from '../Card/Card';
import buttonEdit from '../../images/editbutton.svg'
import buttonAdd from '../../images/plus.svg'
import api from '../../utils/Api';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);     

    return (

        <main>
            {props.children}
            <section className="profile">
                <a className="profile__avatar-link" href="#">
                    <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" onClick={props.onEditAvatar} />
                    {/* <div className="profile__avatar-edit"  onClick={props.onEditAvatar} >/> */}
                </a>
                <div className="profile__container-big">
                    <div className="profile__container">
                        <h1 className="profile__text-title">{currentUser.name}</h1>
                        <button className="profile__edit-button" type="button" onClick={props.onEditProfile}><img src={buttonEdit} alt="Картинка" /></button>
                    </div>
                    <p className="profile__text-subtitle">{currentUser.description}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}><img className="profile__add-button-img" src={buttonAdd} alt="Плюс" /></button>
            </section>

            <section className="cards">
                <ul className="cards__items">
                </ul>
            </section>
            <section className="cards"  >
                <ul className="cards__items" >
                {props.card.map(item => {
        return (<Card
            key={`card-${item._id}`}
            _id={item._id}
            src={item.link}
            title={item.title}
            subtitle={item.subtitle}
            alt={item.alt}
            card={item}
            onCardLike={ props.onCardLike}
            onCardDelete={ props.onCardDelete}
            onCardClick={ props.onCardClick}
        />)
    })}
                </ul>
            </section>
        </main>


    )
}

export default Main;