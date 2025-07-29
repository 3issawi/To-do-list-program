const form = document.querySelector(".todo-form");
const input = document.querySelector(".todo-input");
const list = document.querySelector(".todo-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.classList.add("todo-item");

  li.innerHTML = `
    <span class="task-text">${task}</span>
    <div>
      <button class="complete-btn">✓</button>
      <button class="delete-btn">X</button>
    </div>
  `;

  list.appendChild(li);
  input.value = "";

  const completeBtn = li.querySelector(".complete-btn");
  const deleteBtn = li.querySelector(".delete-btn");
  const taskText = li.querySelector(".task-text");

  completeBtn.addEventListener("click", () => {
    taskText.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
  });
});
