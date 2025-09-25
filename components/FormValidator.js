class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelectorSelector;
    this._FormSelector = settings.formSelector;
    this._submitButtonSelector = settings.submitebuttontSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings._inputErrorClass;
    this._inactiveButtonClass = settings._inactiveButtonClass;
    this._formElement = formElement;
  }
  cheakInputValidity(inputList) {
    // ToDO -implement this method
    // copy body of existing function

  }

  _setEventListeners () {
    const inputList = Array.from(
      this._formElement.querySelectorAll(settings.inputSelector)
    );
    const buttonElement = formElement.querySelector(
      settings.submitButtonSelector
    );

    togglebuttonState(inputList, buttonElement, settings)

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._cheakInputValidity(inputElement);
        togglebuttonState(inputList, buttonElement, settings);
      });
    });

  }




  enableValidation() {
    const formElement = document.querySelector(this._formSelector);
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
