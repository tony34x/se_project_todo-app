class Popup {
  constructor(popupSelect) {
    this._popupElement = document.querySelector(popupSelect);
    this._popupcloseBtn = this._popupElement.querySelector(".popup__close");
  }

  open() {
    this._popupElement.classList.add("popup_visible");
  }

  close() {
    // TODO remove the class from the popup element
    console.log("Closing method called");
  }

  setEventListeners() {
    
    this._popupcloseBtn.addEventListener("click", () => {
    this._popupElement.close();
    });
  }
}

export default Popup;
