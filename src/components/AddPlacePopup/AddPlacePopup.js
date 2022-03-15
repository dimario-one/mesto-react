import '../../index.css';
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';


function AddPlacePopup(props) {

    const currentUser = React.useContext(CurrentUserContext);

    function handleSubmit(e) {
        e.preventDefault();
    
        props.onAddPlace({
            name: currentUser.curent.name,
            link: currentUser.curent.link
        });
    }

    return (
        <PopupWithForm
            name={'add'}
            title={'Новое место'}
            buttonText={"Создать"}
            onClose={props.onClose}
            isOpen={props.isOpen}
        >
            <input
                onSubmit={handleSubmit}
                className="popup__input popup__input_type_name-pic"
                placeholder="Название"
                type="text"
                id="pic-card"
                name="name"
                minLength="2"
                maxLength="30"
                required >
            </input>
            <span id="pic-card-error" className="popup__error popup__error_visible" ></span>
            <input
                className="popup__input popup__input_type_link"
                placeholder="Ссылка на картинку"
                type="url"
                id="link-card"
                name="link"
                required >
            </input>
            <span id="link-card-error" className="popup__error popup__error_visible" ></span>

        </PopupWithForm>
    )
}

export default AddPlacePopup;