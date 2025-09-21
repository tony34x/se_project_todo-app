class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = document.querySelector(formElement);
    console.log(settings);
    console.log(formElement);
  }
enableValidation() {
}
}

export default formValidator;
