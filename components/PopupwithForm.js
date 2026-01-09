import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
constructor(popupSelector, handleFormSubmit) {
  super(popupSelector);
  this._handleFormSubmit = handleFormSubmit;
  this._form = this._popupElement.querySelector(".popup__form");

  this.setEventListeners(); 
}

  _getInputValues() {
    const inputs = this._form.querySelectorAll("input");
    const values = {};

    inputs.forEach((input) => {
      values[input.name] = input.value;
    });

    return values;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._form.reset(); // ✅ ONLY after submit
      this.close();
    });
  }
}
