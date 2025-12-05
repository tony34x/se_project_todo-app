import Popup from "./popup.js";

class PopupwithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);  // pass the string
    this._handleFormSubmit = handleFormSubmit;
  }
}

export default PopupwithForm;
