
const products = [
  { id: 1, name: "Hydrating Serum", category: "skincare", price: 350, img: "https://tse2.mm.bing.net/th?id=OIP.WgvSVFOfSDUJeYXq3s1KuwHaHa&pid=Api&P=0&h=180" },
  { id: 2, name: "Lipstick Matte", category: "makeup", price: 299, img: "https://tse1.mm.bing.net/th?id=OIP.nAhtwaEcTkoz9FzutV0gWAHaHa&pid=Api&P=0&h=180" },
  { id: 3, name: "Shampoo Pro", category: "haircare", price: 450, img: "https://tse1.mm.bing.net/th?id=OIP.V7Dns0cm0joIiEVGKi0lfQHaHa&pid=Api&P=0&h=180" },
  { id: 4, name: "Face Mask Sheet", category: "skincare", price: 120, img: " https://tse1.mm.bing.net/th?id=OIP.AlqwdGVTYkQ_vv3Q9HADVQHaEK&pid=Api&P=0&h=180" },
  { id: 5, name: "Hair Serum", category: "haircare", price: 275, img: "https://tse2.mm.bing.net/th?id=OIP.qyrm2oG5F1G6aDH18bpy1gHaJQ&pid=Api&P=0&h=180" },
  { id: 6, name: "BB Cream Glow", category: "makeup", price: 199, img: "https://tse1.mm.bing.net/th?id=OIP.d-s8sioN9XGf8bMH65cVvwHaHr&pid=Api&P=0&h=180" },
  { id: 7, name: "nail polish", category: "makeup ", price: 49, img: "https://tse4.mm.bing.net/th?id=OIP.a4wfT3N7IMQeOeBuwcuA9QHaHa&pid=Api&P=0&h=180" },
  { id: 8, name: "hair clips", category: "haircare", price: 199, img: "https://tse4.mm.bing.net/th?id=OIP.cDG0RcZ7Fw7zsYT2kN0etwHaHa&pid=Api&P=0&h=180" }
];

function displayProducts(filteredProducts) {
  const productGrid = document.getElementById("productGrid");
  if (!productGrid) return;

  productGrid.innerHTML = "";

  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p class="price">₹${product.price}</p>
    `;
    productGrid.appendChild(card);
  });
}

function filterAndSortProducts() {
  const category = document.getElementById("category")?.value || "all";
  const sort = document.getElementById("sort")?.value || "default";

  let filtered = [...products];

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "lowToHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "highToLow") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

if (document.getElementById("productGrid")) {
  document.getElementById("category").addEventListener("change", filterAndSortProducts);
  document.getElementById("sort").addEventListener("change", filterAndSortProducts);
  displayProducts(products);
}

document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task === "") return;

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = task;

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.onclick = () => {
    li.remove();
    saveTasks();
  };

  li.appendChild(delBtn);
  taskList.appendChild(li);

  input.value = "";
  saveTasks();
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push(li.firstChild.textContent);
  });
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("todoTasks")) || [];
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = () => {
      li.remove();
      saveTasks();
    };

    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);
  });
}
