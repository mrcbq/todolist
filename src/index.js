import "./index.css";

const tasks = [
  {
    id: 0,
    description: "wash the dishes",
    completed: false,
  },
  {
    id: 1,
    description: "Complete the to-do list project",
    completed: false,
  },
  {
    id: 2,
    description: "take a rest",
    completed: true,
  },
];

const tasksContainer = document.getElementById("tasks-container");

tasks.forEach((task) => {
  const listItem = document.createElement("li");
  const checkbox = document.createElement("input");
  const textarea = document.createElement("input");
  const dotsButton = document.createElement("input");

  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("tabindex", "0");
  checkbox.setAttribute("alt", "Check!");

  textarea.setAttribute("maxlength", "255");
  textarea.value = task.description;

  const attrs = { type: "button", tabindex: "-1", value: "", title: "click and sostain for rearrange", class: "input-btn-dots"};

  for (let attr in attrs) {
    dotsButton.setAttribute(attr, attrs[attr]);
  }

  listItem.appendChild(checkbox);
  listItem.appendChild(textarea);
  listItem.appendChild(dotsButton);

  tasksContainer.appendChild(listItem);
});
