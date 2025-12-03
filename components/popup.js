class Popup {
    constructor(popupSelect) {
        this._popupElement = document.querySelector(popupSelect);
    }

    open() {
    this._popupElement.classList.add("popup_visible");    
    }

    close() {
        // TODO remove the class from the popup element
        console.log("Closing method called");
}


export default Popup;