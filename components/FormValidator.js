class FormValidator {
  constructor(settings, FormElement) {
    this._inputSelector = settings.inputSelectorSelector;
    this._FormSelector = settings.formSelector;
    this._submitButtonSelector = settings.submitebuttontSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings._inputErrorClass;
    this._inactiveButtonClass = settings._inactiveButtonClass;
    this._FormElement = FormElement;
    this._settings = settings;
  }
  checkInputValidity(inputList) {
    // ToDO -implement this method
    // copy body of existing function
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._FormElement.querySelectorAll(this._inputSelector)
    );
    debugger;
    const buttonElement = this._FormElement.querySelector(
      this._settings.submitButtonSelector
    );
    console.log("FormElement");

    // TODO finsh imlementing_setEventListeners

    // const buttonElement = formElement.querySelector(
    //   settings.submitButtonSelector
    // );

    this._togglebuttonState(this._inputList, buttonElement, this._settings);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._togglebuttonState(inputList, buttonElement, this._settings);
      });
    });
  }

  enableValidation() {
  const FormElement = document.querySelector(this._FormSelector);
    FormElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
