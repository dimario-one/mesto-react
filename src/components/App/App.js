import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ImagePopup from '../ImagePopup/ImagePopup';



function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({ name: '', link: '' });

    function handleCardClick(card) {
        setSelectedCard(card)
    }

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true)
    }

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true)
    }

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true)
    }

    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setSelectedCard({ name: '', link: '' })
    }

    return (< div className="body">
        < div className="page">
            <Header />
            <Main onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}

                onCardClick={handleCardClick}
            >
            </Main>

            <Footer />
            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups} />
            < PopupWithForm
                onClose={closeAllPopups}
                isOpen={isEditAvatarPopupOpen}
                name={"avatar"}
                title={'Обновить аватар'}
                buttonText={"Сохранить"}
            >
                <input className="popup__input popup__input_type_avatar"
                    placeholder="Введите ссылку"
                    type="url"
                    id="avatar-link"
                    name="avatar"
                    minLength="2">
                </input>
                <span id="avatar-link-error" className="popup__error popup__error_visible" ></span>
            </PopupWithForm>
            <PopupWithForm onClose={closeAllPopups}
                isOpen={isEditProfilePopupOpen}
                name={"edit"}
                title={'Редактировать профиль'}
                buttonText={"Сохранить"}

            >
                <input
                    className="popup__input popup__input_type_name"
                    placeholder="Введите имя"
                    type="text"
                    id="name-card"
                    name="name"
                    minLength="2"
                    maxLength="40" >
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
                    maxLength="200" >
                </input>
                <span
                    id="prof-card-error"
                    className="popup__error popup__error_visible" >
                </span>

            </PopupWithForm>
            <PopupWithForm
                onClose={closeAllPopups}
                isOpen={isAddPlacePopupOpen}
                name={"add"}
                title={'Новое место'}
                buttonText={"Создать"}
            >
                <input
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
        </div>
    </div>
    )
}

export default App;