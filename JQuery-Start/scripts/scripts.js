  function hideParagraphs() {
    var paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(function(paragraph) {
      paragraph.style.display = "none";
    });
  }

  function hideDiv() {
    var contentDiv = document.getElementById("content");
    contentDiv.style.display = "none";
  }

  function showAll() {
    var paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(function(paragraph) {
      paragraph.style.display = "block";
    });
    var contentDiv = document.getElementById("content");
    contentDiv.style.display = "block";

    var headings = document.querySelectorAll("h2.hide-on-click");
    headings.forEach(function(heading) {
      heading.style.display = "block";
    });
  }

  document.getElementById("hide-paragraphs-btn").addEventListener("click", hideParagraphs);

  document.getElementById("hide-div-btn").addEventListener("click", hideDiv);

  document.getElementById("show-all-btn").addEventListener("click", showAll);

  var headings = document.querySelectorAll("h2.hide-on-click");
  headings.forEach(function(heading) {
    heading.addEventListener("click", function() {
      this.style.display = "none";
    });
  });