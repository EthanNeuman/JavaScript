function submitForm() {
    var form = document.getElementById("myForm");
    var formData = new FormData(form);
    var displayArea = document.createElement("div");
    displayArea.textContent = "Name: " + formData.get("name") + ", Email: " + formData.get("email") + ", Age: " + formData.get("age") + ", Message: " + formData.get("message") + ", Country: " + formData.get("country");
    document.body.appendChild(displayArea);
    form.reset();
}

function toggleStyle() {
    var body = document.body;
    body.classList.toggle("light");
    body.classList.toggle("dark");
}

function increaseFontSize() {
    var currentFontSize = parseFloat(document.body.style.fontSize) || 16;
    document.body.style.fontSize = (currentFontSize + 2) + "px";
}

function decreaseFontSize() {
    var currentFontSize = parseFloat(document.body.style.fontSize) || 16;
    document.body.style.fontSize = (currentFontSize - 2) + "px";
}