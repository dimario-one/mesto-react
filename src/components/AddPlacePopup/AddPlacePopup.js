import '../../index.css';
import React,{  useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';


function AddPlacePopup(props) {

    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName ] = useState('');
    const [link, setLink ] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
      } 
      
      const handlePlaceChange = (e) => {
        setLink(e.target.value)
      } 
      const handleSubmit = (e) => {
        e.preventDefault()
        props.onAddPlace({
          name,
          link,
        })
        // setName('')
        // setLink('')
      }

    return (
        <PopupWithForm
            name={'add'}
            title={'Новое место'}
            buttonText={"Создать"}
            onClose={props.onClose}
            isOpen={props.isOpen}
            onSubmit={handleSubmit}
        >
            <input
                className="popup__input popup__input_type_name-pic"
                placeholder="Название"
                type="text"
                id="pic-card"
                name="name"
                minLength="2"
                maxLength="30"
                value={name}
                onChange={handleNameChange}
                required >
            </input>
            <span id="pic-card-error" className="popup__error popup__error_visible" ></span>
            <input
                className="popup__input popup__input_type_link"
                placeholder="Ссылка на картинку"
                type="url"
                id="link-card"
                name="link"
                value={link}
                onChange={handlePlaceChange}
                required >
            </input>
            <span id="link-card-error" className="popup__error popup__error_visible" ></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;