const fruits = [
  {
    name: "Strawberry",
    price: 150,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg"
  },
  {
    name: "Kiwi",
    price: 90,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg"
  },
  {
    name: "Pineapple",
    price: 80,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg"
  }
];

const container = document.getElementById("fruitContainer");

function createCard(fruit) {
  const card = document.createElement("div");
  card.className = "fruit-card";

  card.innerHTML = `
    <img src="${fruit.image}" alt="${fruit.name}">
    <div class="info">
      <div class="name">${fruit.name}</div>
      <div class="price">${fruit.price !== 'N/A' ? '₹' + fruit.price : 'N/A'}</div>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  card.querySelector(".delete-btn").addEventListener("click", () => {
    card.remove();
  });

  container.appendChild(card);
}

fruits.forEach(fruit => createCard(fruit));

function addFruit() {
  const name = document.getElementById("fruitName").value.trim();
  const url = document.getElementById("fruitURL").value.trim();

  if (name === "" || url === "") {
    alert("Please enter both name and image URL.");
    return;
  }

  const newFruit = {
    name: name,
    price: "N/A",
    image: url
  };

  createCard(newFruit);
  document.getElementById("fruitName").value = "";
  document.getElementById("fruitURL").value = "";
}
