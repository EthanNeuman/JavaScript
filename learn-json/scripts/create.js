let contacts = []; 

function addme() {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;


    let contact = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone
    };

    contacts.push(contact);

    displayJSON();
}

function displayJSON() {
    let jsonValue = JSON.stringify(contacts, null, 2);
    document.getElementById("json-value").textContent = jsonValue;
}
