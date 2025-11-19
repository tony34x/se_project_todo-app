import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import popupwithForm from "../components/PopupwithForm.js";

// instantiate

const addTodoButton = document.querySelector(".button_action_add");
const addTodoForm = document.querySelector("#add-todo-popup").querySelector(".popup__form");
const addTodoCloseBtn = document.querySelector("#add-todo-popup").querySelector(".popup__close");
// const todoTemplate = document.querySelector("#todo-template");
const todosList = document.querySelector(".todos__list");

const addTodoPopup = new popupwithForm({
  popupSelector: "#add-todo-popup", 
  handleFormSubmit: () => {},
});
const section = new Section({
  items: [],
  renderer: () => {
    // generate todo item
    // add it to the todd list
    // refer to the forEach loop in the file
  },
  containerSelector: ".todos__list",
});

const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

// The logic in this function should all be handled in the Todo class.
const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  const todoElement = todo.getView();
  return todoElement;
};

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  newTodoValidator.resetValidation(); // ← Move it HERE
  closeModal(addTodoPopup);

  // Create a date object and adjust for timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  const id = uuidv4();
  const values = { name, date, id };
  renderTodo(values);
  closeModal(addTodoPopup);
});

const renderTodo = (item) => {
  const todo = generateTodo(item);
  todosList.append(todo); // use addItem method instead
};

// initialTodos.forEach((item) => {
//   renderTodo(item);
//   addTodoForm.reset(); // use addttem method instead 
// });

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
