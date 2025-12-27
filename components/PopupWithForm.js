import Popup from "./popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector); // the popup element
    this._handleFormSubmit = handleFormSubmit;

    // get the form element inside this popup
    this._form = this._popupElement.querySelector(".popup__form");

    // automatically add event listeners for close button and form submit
    this.setEventListeners();
  }

  // Override setEventListeners to include form submission
  setEventListeners() {
    // Close button already handled in Popup
    super.setEventListeners();

    // Form submission
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close(); // close after submission
    });
  }

  // Helper to get all form values
  _getInputValues() {
    const inputs = Array.from(this._form.querySelectorAll("input"));
    const values = {};
    inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }
  resetValidation() {
    this._inputList.forEach((input) => this._hideInputError(input));
    this._formElement.reset();
    this._disableButton();
  }

  close() {
    super.close();
    this._form.reset();
  }
}

export default PopupWithForm;
