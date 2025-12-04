class Popup {
  constructor(popupSelect) {
    this._popupElement = document.querySelector(popupSelect);
    this._popupcloseBtn = this._popupElement.querySelector(".popup__close");
  }

 _handleEscapeClose() {
    console.log (" key was pressed");
 }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscapeClose);
  }

  close() {
    // TODO remove the class from the popup element
    this._popupElement.classList.remove("popup_visible");
    console.log("Closing method called");
  }

  setEventListeners() {
    
    this._popupcloseBtn.addEventListener("click", () => {
    this._popupElement.close();
    });
  }
}

export default Popup;
