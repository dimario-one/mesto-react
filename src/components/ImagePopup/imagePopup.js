// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";

// import "./styles.css";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       popupStatus: false, /// Показываю оббертку для попапов если true
//       whichPopupToShow: {
//         //// Переключаю значение в true что бы показать тот или иной попап
//         infoPopup: false,
//         ranksPopup: false
//       }
//     };
//   }

//   popupClose = () => {
//     this.setState({
//       popupStatus: false, /// Закрываю обберку попапов

//       whichPopupToShow: {
//         /// Закрываю все возможные попапы
//         infoPopup: false,
//         ranksPopup: false
//       }
//     });
//   };

//   popupShow = (choosePopup) => {
//     this.setState({ popupStatus: true });
//     this.setState({ whichPopupToShow: true }); //// Это не работает как задумано
//     //// Идея в том что б в зависимости от переданого параметра whichPopupToShow показывало нужный попап
//     //// что-то по типу this.setState({ whichPopupToShow[choosePopup]: true });
//   };

//   render() {
//     return (
//       <div className="field">
//         <button className="btn" onClick={(e) => this.popupShow("infoPopup")}>
//           Show infoPopup
//         </button>
//         <button className="btn" onClick={(e) => this.popupShow("ranksPopup")}>
//           Show ranksPopup
//         </button>

//         {this.state.popupStatus ? (
//           <PopupWindow
//             closePopup={this.popupClose}
//             whichPopupToShow={this.state.whichPopupToShow}
//           />
//         ) : null}
//       </div>
//     );
//   }
// }

// function PopupWindow(props) {
//   const { closePopup, whichPopupToShow } = props;

//   return (
//     <div className="ShadowBlock">
//       <div className="popupInner">
//         <button className={"btn_closePopups"} onClick={(e) => closePopup()}>
//           <svg
//             className={"btn_closePopups__icon"}
//             xmlns="http://www.w3.org/2000/svg"
//             x="0"
//             y="0"
//             width="12"
//             height="12"
//             viewBox="0 0 12 12"
//           >
//             <path
//               fill={"#3b2d62"}
//               d="M11 .8c.3.3.3.8 0 1.2l-8.8 8.8c-.3.3-.8.3-1.2 0-.3-.3-.3-.8 0-1.2L9.8.8c.3-.3.8-.3 1.2 0z"
//             />
//             <path
//               fill={"#3b2d62"}
//               d="M1 .8c.3-.3.8-.3 1.2 0L11 9.6c.3.3.3.8 0 1.2-.3.3-.8.3-1.2 0L1 2C.7 1.7.7 1.2 1 .8z"
//             />
//           </svg>
//         </button>

//         {whichPopupToShow.infoPopup ? <InfoPopup /> : null}
//         {whichPopupToShow.ranksPopup ? <RanksPopup /> : null}
//       </div>
//     </div>
//   );
// }

// function InfoPopup() {
//   return <div>This is InfoPopup</div>;
// }

// function RanksPopup() {
//   return <div>This is RanksPopup</div>;
// }

// ReactDOM.render(<App/>, document.getElementById("root"));
// .App {