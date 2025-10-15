const questions = [
  { question: "What is 5 + 3?", options: ['6', '7', '8', '9'], answer: '8' },
  { question: "Capital of India?", options: ['Mumbai', 'Delhi', 'Chennai', 'Kolkata'], answer: 'Delhi' },
  { question: "HTML stands for?", options: ['Hyper Tool', 'HighText', 'HyperText Markup Language', 'Hover Tool'], answer: 'HyperText Markup Language' }
];
let current = 0;
function loadQuestion() {
  document.getElementById('question').innerText = questions[current].question;
  const buttons = document.querySelectorAll('#quiz-container button');
  for (let i = 0; i < 4; i++) {
    buttons[i].innerText = questions[current].options[i];
  }
}
function answer(selected) {
  if (selected === questions[current].answer) {
    alert("Correct!");
  } else {
    alert("Incorrect!");
  }
}
function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    alert("Quiz Completed!");
    current = 0;
    loadQuestion();
  }
}
loadQuestion();

const images = [
  "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
  "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
  "https://images.unsplash.com/photo-1542281286-9e0a16bb7366",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
];
let currentImage = 0;
function showImage() {
  document.getElementById("carousel").src = images[currentImage] + "?w=600";
}
function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  showImage();
}
function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage();
}
showImage();
setInterval(nextImage, 3000);

async function getWeather() {
  const cityInput = document.getElementById('city').value.trim();
  if (!cityInput) {
    document.getElementById('weather').innerText = "Please enter a city name.";
    return;
  }
  const city = encodeURIComponent(cityInput);
  const apiKey = "a84c56c29c9da25804d45ea74cdbca2a";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod === 200) {
      document.getElementById('weather').innerText =
        `${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
    } else {
      document.getElementById('weather').innerText = "City not found.";
    }
  } catch {
    document.getElementById('weather').innerText = "Error fetching data.";
  }
}
