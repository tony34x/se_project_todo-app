class Todo {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._date = data.date;
    this._id = data.id;

    this._template = document
      .querySelector(templateSelector)
      .content.querySelector(".todo");
  }
  _setEventListeners() {
    this._deleteBtn.addEventListener("click", () => {
      this._element.remove();
    });
  }

  getView() {
    this._element = this._template.cloneNode(true);

    this._checkbox = this._element.querySelector(".todo__completed");
    this._nameEl = this._element.querySelector(".todo__name");
    this._dateEl = this._element.querySelector(".todo__date");
    this._deleteBtn = this._element.querySelector(".todo__delete-btn");

    this._nameEl.textContent = this._name;

    if (this._date) {
      this._dateEl.textContent = this._date.toLocaleDateString();
    }

    this._setEventListeners();

    return this._element;
  }
}

export default Todo;
