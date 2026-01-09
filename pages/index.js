import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import TodoCounter from "../components/TodoCounter.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";

// DOM
const addTodoButton = document.querySelector(".button_action_add");
const addTodoForm = document.querySelector(
  "#add-todo-popup .popup__form"
);

// Counter
const todoCounter = new TodoCounter(initialTodos, ".counter__text");

// Section
const section = new Section({
  items: initialTodos,
  renderer: renderTodo,
  containerSelector: ".todos__list",
});

// Popup
const addTodoPopup = new PopupWithForm("#add-todo-popup", (values) => {
  let date = null;

  if (values.date) {
    date = new Date(values.date);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  }

 

  const newTodo = {
    id: uuidv4(),
    name: values.name,
    date,
    completed: false,
  };

  renderTodo(newTodo);
  todoCounter.updateTotal(true);
  addTodoFormValidator.resetValidation();
});

// Validator
const addTodoFormValidator = new FormValidator(
  validationConfig,
  addTodoForm
);
addTodoFormValidator.enableValidation();

// Helpers
function renderTodo(item) {
  const todoElement = createTodo(item);
  section.addItem(todoElement);
}

function createTodo(data) {
  return new Todo(data, "#todo-template", {
    handleDelete: (wasCompleted) => {
      todoCounter.updateTotal(false);
      if (wasCompleted) {
        todoCounter.updateCompleted(false);
      }
    },
    handleToggle: (isCompleted) => {
      todoCounter.updateCompleted(isCompleted);
    },
  }).getView();
}

// Events
addTodoButton.addEventListener("click", () => {
  console.log("Open");
  addTodoPopup.open();
});

// Init
section.renderItems();
