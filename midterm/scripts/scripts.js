    var pcSpecs = {
        processor: "Intel Core i7",
        gpu: "NVIDIA GeForce RTX 3080",
        ram: "32GB DDR4",
        storage: ["1TB SSD", "2TB HDD"],
        price: 2000
    };

    function showPCInfo() {
        var pcInfoText = "PC Specifications:\n";
        pcInfoText += "Processor: " + pcSpecs.processor + "\n";
        pcInfoText += "GPU: " + pcSpecs.gpu + "\n";
        pcInfoText += "RAM: " + pcSpecs.ram + "\n";
        pcInfoText += "Storage: " + pcSpecs.storage.join(", ") + "\n";
        pcInfoText += "Price: $" + pcSpecs.price + "\n";

        document.getElementById('pcInfo').innerText = pcInfoText;
    }

    function toggleDropdown(dropdownId) {
        var dropdownContent = document.getElementById(dropdownId);
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    }

    function updatePCInfo() {
        var form = document.getElementById('customPCForm');
        pcSpecs.processor = form.elements['processor'].value;
        pcSpecs.gpu = form.elements['gpu'].value;
        pcSpecs.ram = form.elements['ram'].value;
        pcSpecs.storage = form.elements['storage'].value.split(',');
        pcSpecs.price = parseInt(form.elements['price'].value);

        showPCInfo();
    }
    function navigateToSection(sectionId) {
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    }
function updatePCInfoOnInput() {
    var form = document.getElementById('customPCForm');
    pcSpecs.processor = form.elements['processor'].value;
    pcSpecs.gpu = form.elements['gpu'].value;
    pcSpecs.ram = form.elements['ram'].value;
    pcSpecs.storage = form.elements['storage'].value.split(',');
    pcSpecs.price = parseInt(form.elements['price'].value);

    showPCInfo(); 
}

document.getElementById('processor').addEventListener('input', updatePCInfoOnInput);
document.getElementById('gpu').addEventListener('input', updatePCInfoOnInput);
document.getElementById('ram').addEventListener('input', updatePCInfoOnInput);
document.getElementById('storage').addEventListener('input', updatePCInfoOnInput);
document.getElementById('price').addEventListener('input', updatePCInfoOnInput);
