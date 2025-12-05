class Popup {
  constructor(popupSelector) {
    // FIX: Use the popupSelector variable to select the element.
    // Ensure that the value passed to popupSelector is a valid CSS selector (e.g., ".popup_type_edit" or "#my-popup").
    this._popupElement = document.querySelector(popupSelector);
    this._popupcloseBtn = this._popupElement.querySelector(".popup__close");
  }

 // ... rest of your class code


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
    // FIX: Call the close method on the Popup instance, not the DOM element.
    this.close(); 
    });
  }
}

export default Popup;
