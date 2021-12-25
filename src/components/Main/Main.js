import React,{useRef} from 'react';
import avatar from '../../images/image(4).png'
import avatarHover from '../../images/avatar_hover.svg'
import buttonEdit from '../../images/editbutton.svg'
import buttonAdd from '../../images/plus.svg'
// import{ avatarForm} from '../../utils/constants'



function Main() {

    

    return (
        
        <main>
        <section className="profile">
            <a className="profile__avatar-link" href="#">
                    <img className="profile__avatar" src={avatar} alt="Аватар"  />
                    <img className="profile__avatar-edit" alt="Аватар ховер" src={avatarHover} /> 
            </a>
            <div className="profile__container-big">
                <div className="profile__container">
                    <h1 className="profile__text-title"></h1>
                    <button className="profile__edit-button" type="button"><img src={buttonEdit} alt="Картинка"  /></button>
                </div>
                <p className="profile__text-subtitle"></p>
            </div>
            <button className="profile__add-button" type="button"><img className="profile__add-button-img" src={buttonAdd} alt="Плюс" /></button>
        </section>

        <section className="cards">
            <ul className="cards__items">
            </ul>
        </section>

    {/* <div className="popup popup_type_edit" ref={refProfile}>
        <div className="popup__container">
            <form className="popup__form popup__form_type_edit" name="popup__editform" noValidate>
                <button className="popup__close-button popup__close" type="button" ref={ref} onClick={ClosePopup}></button>
                <h2 className="popup__title">Редактировать профиль</h2>
                <input className="popup__input popup__input_type_name" placeholder="Введите имя" type="text" id="name-card" name="name" minLength="2" maxLength="40"></input>
                <span id="name-card-error" className="popup__error popup__error_visible"></span>
                <input className="popup__input popup__input_type_prof" placeholder="Введите профессию" type="text" id="prof-card" name="job" minLength="2" maxLength="200"></input>
                <span id="prof-card-error" className="popup__error popup__error_visible"></span>
                <button type="submit" className="popup__button popup__save-button">Сохранить</button>
            </form>
        </div>
    </div>
    <div className="popup popup_type_add" ref={ref}>
        <div className="popup__container">
            <form className="popup__form popup__form_type_add" name="popup__addform" noValidate>
                <button className="popup__close-button popup__close-AddButton" type="button" ref={ref} onClick={ClosePopup}></button>
                <h2 className="popup__title">Новое место</h2>
                <input className="popup__input popup__input_type_name-pic" placeholder="Название" type="text" id="pic-card" name="name" minLength="2" maxLength="30" required></input>
                <span id="pic-card-error" className="popup__error popup__error_visible"></span>
                <input className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" type="url" id="link-card" name="link" required></input>
                <span id="link-card-error" className="popup__error popup__error_visible"></span>
                <button type="submit" className="popup__button popup__create-button">Создать</button>
            </form>
        </div>
    </div>

    <div className="popup popup_type_image">
        <div className="popup__container">
            <button className="popup__close-button popup__close-image" type="button" ref={ref} onClick={ClosePopup}></button>
            <img className=" popup__pic" src="#" />
            <h2 className="popup__title popup__title_white"></h2>
        </div>
    </div>
    <div className="popup popup_type_submit">
        <div className="popup__container">
            <form className="popup__form popup__form_type_submit" name="popup__submitform" noValidate>
                <button className="popup__close-button popup__close-AddButton" type="button" ref={ref} onClick={ClosePopup}></button>
                <h2 className="popup__title">Вы уверены?</h2>
                <button type="submit" className="popup__button popup__create-button">Да</button>
            </form>
        </div>
    </div>
    <div className="popup popup_type_avatar" ref={ref}>
        <div className="popup__container">
            <form className="popup__form popup__form_type_avatar" name="popup__avatar" noValidate>
                <button className="popup__close-button popup__close" type="button" ref={ref} onClick={ClosePopup}></button>
                <h2 className="popup__title">Обновить аватар</h2>
                <input className="popup__input popup__input_type_avatar" placeholder="Введите ссылку" type="url" id="avatar-link" name="avatar" minLength="2"></input>
                <span id="avatar-link-error" className="popup__error popup__error_visible"></span>
                <button type="submit" className="popup__button popup__save-button">Сохранить</button>
            </form>
        </div>
    </div> */}
    </main>
  
    )
}

export default Main;