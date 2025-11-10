class Section {
  constructor(items, renderer, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.array.forEach(item => {
      // call the renderer and pass the item
      
    });

    addItem(element) {
      // add element to the container
      this
  }
}

export default Section;
