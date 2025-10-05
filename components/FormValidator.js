class FormValidator {
  constructor(settings, formElement ) {
    this._inputSelector = settings.inputSelectorSelector;
    this._FormSelector = settings.formSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings._inputErrorClass;
    this._inactiveButtonClass = settings._inactiveButtonClass;
    this._FormElement = formElement;
    this._settings = settings;
  };
  checkInputValidity(formElement, inputElement, settings) {
    // ToDO -implement this method
    // copy body of existing function
  };
  _setEventListeners() {
    this._inputList = Array.from(
      this._FormElement.querySelectorAll(this._inputSelector)
    );
    debugger;
    const buttonElement = this._FormElement.querySelector(
      this._settings.submitButtonSelector
    );
 

    this._togglebuttonState(this._inputList, buttonElement, this._settings);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._togglebuttonState(inputList, buttonElement, this._settings);
      });
    });
  };

  enableValidation() {
  const formElement = document.querySelector(this._FormSelector);
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
