const cars = [
    { make: "Dodge", model: "charger", year: 2020, color: "black", price: 35000 },
    { make: "Honda", model: "Hatchback", year: 2018, color: "Black", price: 27000 },
    { make: "Ford", model: "F-350", year: 2018, color: "Grey", price: 35000 },
    { make: "Chevrolet", model: "1500", year: 2021, color: "Blue", price: 40000 },
    { make: "Tesla", model: "Model 3", year: 2022, color: "White", price: 45000 }
];
function populateCars() {
    const carInventoryDiv = document.getElementById('carInventory');
    cars.forEach(car => {
      const carDiv = document.createElement('div');
      carDiv.classList.add('car');
      carDiv.innerHTML = `
        <h2>${car.make} ${car.model}</h2>
        <ul>
          <li><strong>Make:</strong> ${car.make}</li>
          <li><strong>Model:</strong> ${car.model}</li>
          <li><strong>Year:</strong> ${car.year}</li>
          <li><strong>Color:</strong> ${car.color}</li>
          <li><strong>Price:</strong> $${car.price}</li>
        </ul>
      `;
      carInventoryDiv.appendChild(carDiv);
    });
  }
