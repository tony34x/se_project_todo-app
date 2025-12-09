class Popup {
  constructor(popupSelector) {

    this._popupElement = document.querySelector(popupSelector);
    this._popupcloseBtn = this._popupElement.querySelector(".popup__close");
  }

 // ... rest of your class code

 _handleEscapeClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
 }
  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscapeClose);
  }

close() {
  this._popupElement.classList.remove("popup_visible");
  // remove the escape-key listener that was added in open()
  document.removeEventListener("keydown", this._handleEscapeClose);
  console.log("Closing method called");
}

  setEventListeners() {
    
    this._popupcloseBtn.addEventListener("click", () => {
    // FIX: Call the close method on the Popup instance, not the DOM element.
    this.close(); 
    });
  }
}

export default Popup;
