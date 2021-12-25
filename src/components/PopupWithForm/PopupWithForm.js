// // в PopupWithForm достаточно передачи onClose={closeAllPopups} и isOpen={тут стейт попапа} (edited) 

// // Maksim Ivanov:yinyang:  1 day ago
// // isOpen  содержит либо true либо false в зависимости от стейта

// // Maksim Ivanov:yinyang:  1 day ago
// // т.е. ты в Main передаешь коллбеки в качестве пропсов, 
// // которые меняют стейт разных попапов, а уже внутри Main вызываешь их по клику на соответствующие кнопки (edited) 

 import React from 'react';

 function PopupWithForm(props) {
   /* isOpen={тут стейт попапа true или false}*/

    return (
  <div className={`popup popup_form_type_${props.name} ? ${props.isOpen ? '.popup_open ' : " " } `}> 
      <div className="popup__container">
      <button className="popup__close-button" ></button>
      <h2 className="popup__title">{props.title}</h2>
      <form
        className="popup__form"
        name={props.name}
        noValidate
      >
        {props.children}
      </form>
    </div>
  </div>
    )
};

export default PopupWithForm;

// import React from 'react';
// function PopupWithForm({
//   ...
//   children,
// }) {
//   return (
//     <div className={`popup popup_type_${name} ...`}>
//       ...
//       {children}
//       ...
//     </div>
//   );
// }
// export default PopupWithForm;