import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import TodoCounter from "../components/TodoCounter.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import Popup from "./Popup.js"; // CASE SENSITIVE


// DOM
const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupElement = document.querySelector("#add-todo-popup");
const profileForm = document.forms["profile-form"];
const addTodoForm = document.forms["add-todo-form"];



// Counter
const todoCounter = new TodoCounter(initialTodos, ".counter__text");

// Section
const section = new Section({
  items: initialTodos,
  renderer: (item) => {
  const renderTodo = (item) => {
      const todoElement = createTodo(item);
      section.addItem(todoElement);
    };
    renderTodo(item);
  },
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
const addTodoFormValidator = new FormValidator(validationConfig, addTodoForm);
addTodoFormValidator.enableValidation();

// Helpers
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
addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();

});
// Init
section.renderItems();

