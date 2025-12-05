import Popup from "./popup.js";
class PopupwithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector); 
    this._handleFormSubmit = handleFormSubmit; 
  }

}

export default PopupwithForm;
