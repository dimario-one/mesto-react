import React,{useEffect, useState} from 'react';
import avatar from '../../images/image(4).png'
import avatarHover from '../../images/avatar_hover.svg'
import buttonEdit from '../../images/editbutton.svg'
import buttonAdd from '../../images/plus.svg'
import api from '../../utils/Api';
import Card from '../Card/Card';

function Main(props) {
    const [userName, setUserName] = useState("Jacques Cousteau");
    const [userDescription, setUserDescription ] =  useState("Sailor, researcher");
    const [userAvatar, setUserAvatar] =  useState(avatar);

    const [cards, setCards] = useState([]);

    useEffect(() => {

        api.getCards()
            .then(data => {

                const newCards = data.map(item => {
                    return {
                        id: item._id,
                        src: item.link,
                        alt: item.name,
                        subtitle: item.owner.about,
                        title: item.owner.name
                    }
                })
                setCards(newCards)
            })
            .catch(err => console.log(err))
    },[])

     useEffect(() => {

        api.getUserInfo()
            .then(data => {
                const newAvatar = data.avatar
                setUserAvatar(newAvatar);
                const newName = data.name
                setUserName(newName);
                const newDescription = data.about
                setUserDescription (newDescription);
            })
            .catch(err => console.log(err))
    },[])
    
 
    const cardsContent = cards.map(item =>{
       return (<Card
        key={item.id}
        src={ item.src }
        title={ item.title }
        subtitle={ item.subtitle}
        alt ={ item.alt }
        card={item}
        onCardClick={props.onCardClick}
        />)
    })

    return (
        
        <main>
        <section className="profile">
            <a className="profile__avatar-link" href="#">
                    <img className="profile__avatar" src={userAvatar} alt="Аватар" onClick={props.onEditAvatar}/>
                    <img className="profile__avatar-edit" alt="Аватар ховер" src={avatarHover}  onClick={props.onEditAvatar}/> 
            </a>
            <div className="profile__container-big">
                <div className="profile__container">
                    <h1 className="profile__text-title">{userName}</h1>
                    <button className="profile__edit-button" type="button"  onClick={props.onEditProfile}><img src={buttonEdit} alt="Картинка" /></button>
                </div>
                <p className="profile__text-subtitle">{userDescription}</p>
            </div>
            <button className="profile__add-button" type="button" onClick={props.onAddPlace}><img className="profile__add-button-img" src={buttonAdd} alt="Плюс"  /></button>
        </section>

        <section className="cards">
            <ul className="cards__items">
            </ul>
        </section>
        <section className="cards"  >
            <ul className="cards__items" >
            {cardsContent} 
            </ul>
        </section>
    </main>
  

    )
}

export default Main;