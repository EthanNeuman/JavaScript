var hideButtons = document.querySelectorAll(".hide-btn");
hideButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var img = this.parentNode.querySelector("img");
    img.style.display = (img.style.display === "none") ? "block" : "none";
  });
});

var fadeButtons = document.querySelectorAll(".fade-btn");
fadeButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var img = this.parentNode.querySelector("img");
    img.style.transition = "opacity 0.5s";
    img.style.opacity = (img.style.opacity === "0") ? "1" : "0";
  });
});

var slideButtons = document.querySelectorAll(".slide-btn");
slideButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var img = this.parentNode.querySelector("img");
    if (img.style.height === "" || img.style.height === "0px") {
      img.style.transition = "height 0.5s";
      img.style.height = img.scrollHeight + "px";
    } else {
      img.style.transition = "height 0.5s";
      img.style.height = "0";
    }
  });
});