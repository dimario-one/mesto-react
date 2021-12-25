// import api from './utils/Api';

import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Card from '../Card/Card';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  const handleEditAvatarClick = () => {  
      setEditAvatarPopupOpen(true)
   }

  const handleEditProfileClick = () => {
      setEditProfilePopupOpen(true)
  }

  const handleAddPlaceClick = () => {
      setAddPlacePopupOpen(true)
  }

  const closeAllPopups =() => {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
}


  return (
<div className ="page">
  <Header />
  <Main  onEditProfile ={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}   />
  <Footer />
  <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen}  isOpen={isEditProfilePopupOpen}  isOpen={isAddPlacePopupOpen}/>
  {/* <Card /> */}
</div>
  );
  // useEffect(() => )
}

export default App;
