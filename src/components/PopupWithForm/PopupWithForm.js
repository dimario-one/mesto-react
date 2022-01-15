 import React from 'react';

 function PopupWithForm(props) {
    return (
  <div className={`popup popup_form_type_${props.name} ? ${props.isOpen ? 'popup_open' : " " } `}> 
      <div className="popup__container">
      <form
        className="popup__form"
        name={props.name}
        noValidate
      >
           <button className="popup__close-button" onClick={props.onClose} ></button>
          <h2 className="popup__title">{props.title}</h2>
        {props.children}
      </form>
    </div>
  </div>
    )
};

export default PopupWithForm;


