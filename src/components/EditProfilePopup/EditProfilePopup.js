import '../../index.css';
import React,{useEffect, useState, useContext} from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function EditProfilePopup(props) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    // Подписка на контекст
    const currentUser = useContext(CurrentUserContext);

    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      console.log(props,"props")
        // Передаём значения управляемых компонентов во внешний обработчик
        props.EditProfilePopup({
          name,
          about: description,
        });
      }
    return (
        <PopupWithForm 
            name={"edit"}
            title={'Редактировать профиль'}
            buttonText={"Сохранить"}
            onSubmit ={handleSubmit}
            onClose={props.onClose} 
            isOpen={props.isOpen}
        >
            <input
                className="popup__input popup__input_type_name"
                placeholder="Введите имя"
                type="text"
                id="name-card"
                name="name"
                minLength="2"
                maxLength="40"
                onChange={handleNameChange}
                value={name}
                 >
               
            </input>
            <span
                id="name-card-error"
                className="popup__error popup__error_visible" >
            </span>
            <input
                className="popup__input popup__input_type_prof"
                placeholder="Введите профессию"
                type="text"
                id="prof-card"
                name="job"
                minLength="2"
                maxLength="200" 
                onChange={handleDescriptionChange}
                value={description}
                >
            </input>
            <span
                id="prof-card-error"
                className="popup__error popup__error_visible" >
            </span>

        </PopupWithForm>
    )
}

export default EditProfilePopup;


