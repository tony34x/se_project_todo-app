import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import PopupwithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";

// DOM elements
const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupElement = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupElement.querySelector(".popup__form");

// Instantiate popup
const addTodoPopup = new PopupwithForm("#add-todo-popup", () => {
  console.log("Form submitted!");
});


const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todoElement = new Todo(item, "#todo-template").getView();
    section.addItem(todoElement);
  },
  containerSelector: ".todos__list" 
});

// Render the initial todos
section.renderItems();

// Open popup
addTodoButton.addEventListener("click", () => addTodoPopup.open());

// Form submission
addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  const id = uuidv4();
  const newItem = { name, date, id };

  const todoElement = new Todo(newItem, "#todo-template").getView();
  section.addItem(todoElement);

  addTodoPopup.close();
});
