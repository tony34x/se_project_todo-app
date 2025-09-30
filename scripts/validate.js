const showInputError = (FormElement, inputElement, errorMessage, settings) => {
  const errorElementId = `#${inputElement.id}-error`;
  const errorElement = FormElement.querySelector(errorElementId);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
};

const hideInputError = (FormElement, inputElement, settings) => {
  const errorElementId = `#${inputElement.id}-error`;
  const errorElement = FormElement.querySelector(errorElementId);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (FormElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(
      FormElement,
      inputElement,
      inputElement.validationMessage,
      settings
    );
  } else {
    hideInputError(FormElement, inputElement, settings);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (FormElement, settings) => {
  const inputList = Array.from(
    FormElement.querySelectorAll(settings.inputSelector)
  );
  const buttonElement = FormElement.querySelector(
    settings.submitButtonSelector
  );

  toggleButtonState(inputList, buttonElement, settings);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(FormElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
};

const enableValidation = (settings) => {
  const FormElement = document.querySelector(settings.formSelector);
  FormElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
  setEventListeners(FormElement, settings);
};

enableValidation(validationConfig);
