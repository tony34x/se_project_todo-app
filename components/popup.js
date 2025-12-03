class Popup {
    constructor(popupSelect) {
        this._popupElement = document.querySelector(popupSelect);
    }

    open() {
    this._popupElement.classList.add("popup_visible");    
    }

    close() {
        // remove the visible class from the popup
}


export default Popup;