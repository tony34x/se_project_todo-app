## Simple Todo App

A minimalist and intuitive task management web app that helps users quickly create, track, and complete daily tasks. Designed for simplicity and ease of use, it’s perfect for managing small to-do lists without unnecessary clutter.

## Functionality

The Simple Todo App allows users to:

Add new tasks with optional due dates

Mark tasks as completed or uncompleted

Delete tasks as needed

View progress with a dynamic counter showing completed vs total tasks

Interact with tasks instantly without page reloads

A dedicated TodoCounter class tracks the total number of todos and how many are completed. The counter automatically updates when tasks are added, deleted, or toggled between completed and uncompleted states.

## Technical Details

Built using HTML, CSS, and Vanilla JavaScript

Uses JavaScript ES6 modules for clean, modular architecture

Follows BEM methodology for scalable and maintainable CSS

UI interactions (task creation) are handled through reusable popup components

Application state (todos and counter updates) is managed through dedicated classes (Todo, TodoCounter, Section, PopupWithForm)

## Project Structure Highlights

Todo — Handles individual task rendering and interactions

TodoCounter — Manages and updates the completed vs total task count

Section — Renders and manages the todo list

PopupWithForm — Handles task creation via modal form

FormValidator — Prevents invalid submissions


## Deployment

This project is deployed on GitHub Pages:
https://tony34x.github.io/se_project_todo-app/
