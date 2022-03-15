import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ImagePopup from '../ImagePopup/ImagePopup';
import api from '../../utils/Api';
import '../../index.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import Card from '../Card/Card';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup.js';
import EditAvatarPopup from '../EditAvatarPopup/EditAvatarPopup.js';
import AddPlacePopup from '../AddPlacePopup/AddPlacePopup.js';

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({ name: '', link: '' });
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);


  
    function handleCardDelete(card) {
        api.removeCard(card._id)
            .then(() => {
                setCards(cards.filter(data => data._id !== card._id));
            })
            .catch((err) => {
                console.error(err);
            })
    }

    const handleAddPlaceSubmit = (newCard) => {
        api.createNewCard(newCard)
            .then((cards) => {
                setCards([newCard, ...cards]);
                closeAllPopups()
            })
            .catch((err) => {
                console.error(err);
            })
    }

    useEffect(() => {

        api.getCards()
            .then(data => {
                let newCards = data.map(item => {
                    return {
                        key: item._id,
                        id: item._id,
                        src: item.link,
                        alt: item.name,
                        subtitle: item.owner.about,
                        title: item.name,
                        likes: item.likes
                    }
                })
                setCards(newCards)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {

        api.getUserInfo()
            .then(data => {
                const newCurrentUser = { avatar: data.avatar, name: data.name, description: data.about, id: data._id }
                setCurrentUser(newCurrentUser);
            })
            .catch(err => console.log(err))
    }, [])

    const handleUpdateUser = (data) => {
        api.setUserInfo(data)
            .then((res) => {
                setCurrentUser(res)
                closeAllPopups()
            })
            .catch((err) => {
                console.error(err);
            })
    }

    function handleCardLike(card) {
        console.log(card, "card")
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some((i) => i._id === currentUser.id);
        // Отправляем запрос в API и получаем обновлённые данные карточки
        if (!isLiked) {
            api.setCardLike(card.id, !isLiked).then((newCard) => {

                setCards((state) => state.map((c) => c.id === card.id ? newCard : c));
                console(cards,"cards")
            });
        } else {
            api.changeLikeCardStatus(card.id, isLiked).then((newCard) => {
                setCards((state) => state.map((c) => c.id === card.id ? newCard : c));
            })
        }
    }

    const handleUpdateAvatar = (data) => {
        api.patchUserAvatar(data)
            .then((res) => {
                setCurrentUser(res)
                closeAllPopups()
            })
            .catch((err) => {
                console.error(err);
            })
    }

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

    const cardsContent = cards.map(item => {
        return (<Card
            key={item.id}
            src={item.src}
            title={item.title}
            subtitle={item.subtitle}
            alt={item.alt}
            card={item}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            onCardClick={handleCardClick}
        />)
    })

    return (
        <CurrentUserContext.Provider value={currentUser}>
            < div className="body">
                < div className="page">
                    <Header />
                    <Main
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick}
                        onCardDelete={handleCardDelete}
                        onCardClick={handleCardClick}
                        card={cards}
                        cardsContent={cardsContent}
                        handleCardLike={handleCardLike}
                    >
                        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
                        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
                        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
                        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

                    </Main>
                    <Footer />
                </div>
            </div>
        </CurrentUserContext.Provider >
    )
}

export default App;
