import '../../index.css';
import { React, useRef, useContext } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';


function EditProfilePopup(props) {

    const avatarRef = useRef();


    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }

    return (
        < PopupWithForm
            name={"avatar"}
            title={'Обновить аватар'}
            buttonText={"Сохранить"}
            onSubmit={handleSubmit}
            onClose={props.onClose}
            isOpen={props.isOpen}
        >
            <input className="popup__input popup__input_type_avatar"
                placeholder="Введите ссылку"
                type="url"
                id="avatar-link"
                name="avatar"
                minLength="2"
                ref={avatarRef}
                >
            
            </input>
            <span id="avatar-link-error" className="popup__error popup__error_visible" ></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;
