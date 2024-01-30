function calculateTotal() {
    let drinkCost = parseFloat(document.getElementById('drinks').value) || 0;
    let sandwichCost = parseFloat(document.getElementById('sandwiches').value) || 0;
    let dessertCost = parseFloat(document.getElementById('desserts').value) || 0;

    let totalCost = drinkCost + sandwichCost + dessertCost;

    document.getElementById('order-summary').innerHTML = `
        <h2>Order Summary</h2>
        <p>Drinks Cost: $${drinkCost.toFixed(2)}</p>
        <p>Sandwiches Cost: $${sandwichCost.toFixed(2)}</p>
        <p>Desserts Cost: $${dessertCost.toFixed(2)}</p>
        <hr>
        <p>Total Cost: $${totalCost.toFixed(2)}</p>
    `;
}