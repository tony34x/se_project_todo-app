import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";

import Section from "../components/Section.js";

// DOM elements
const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupElement = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupElement.querySelector(".popup__form");

// Instantiate popup
const addTodoPopup = new PopupWithForm("#add-todo-popup", (formValues) => {
  const { name, date } = formValues;

  const parsedDate = date ? new Date(date) : null;
  if (parsedDate) {
    parsedDate.setMinutes(
      parsedDate.getMinutes() + parsedDate.getTimezoneOffset()
    );
  }

  const id = uuidv4();
  const newItem = { name, date: parsedDate, id };

  const todoElement = new Todo(newItem, "#todo-template").getView();
  section.addItem(todoElement);
});

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todoElement = new Todo(item, "#todo-template").getView();
    section.addItem(todoElement);
  },
  containerSelector: ".todos__list",
});

const addTodoFormValidator = new FormValidator(validationConfig, addTodoForm);

addTodoFormValidator.enableValidation();

// Render the initial todos
section.renderItems();

// Open popup
addTodoButton.addEventListener("click", () => addTodoPopup.open());
