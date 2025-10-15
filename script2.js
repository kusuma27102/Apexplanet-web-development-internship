
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("All fields are required!");
    return;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Form submitted successfully!");
  document.getElementById("contactForm").reset();
});


function addTask() {
  let taskInput = document.getElementById("task");
  let taskValue = taskInput.value.trim();

  if (taskValue === "") return;

  let li = document.createElement("li");
  li.textContent = taskValue;

  let delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}


function addImage() {
  const imageUrl = document.getElementById("image-url").value.trim();
  if (imageUrl === "") {
    alert("Please enter an image URL.");
    return;
  }

  const gallery = document.getElementById("gallery");

  const card = document.createElement("div");
  card.className = "image-card";

  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = "User Image";

  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.onclick = () => gallery.removeChild(card);

  card.appendChild(img);
  card.appendChild(delBtn);
  gallery.appendChild(card);

  document.getElementById("image-url").value = "";
}