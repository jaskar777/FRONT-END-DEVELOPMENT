//pop box , pop -overlay 

var popoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".pop-box");
var addpopbutton = document.getElementById("add-popup");

addpopbutton.addEventListener("click", function () {
    popoverlay.style.display = "block";
    popupbox.style.display = "block";
})


var cancelbutton = document.getElementById("add-cancel");
cancelbutton.addEventListener("click", function (event) {
    event.preventDefault();
    popoverlay.style.display = "none";
    popupbox.style.display = "none";
})


//container , add book , author , description 
var contain = document.querySelector(".container");
var addbookbtn = document.getElementById("add-book");
var booktitle = document.getElementById("book-title");
var bookauthor = document.getElementById("book-author");
var descrition = document.getElementById("book-desc");

addbookbtn.addEventListener("click", function (event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `<h2>${booktitle.value}</h1>
    <h4>${booktitle.value}</h4>
    <p>${descrition.value}</p>
     <button onclick="deletebook(event)">Delete</button>`;
    contain.append(div);
    popoverlay.style.display = "none";
    popupbox.style.display = "none";
    
})

function deletebook(event) {
    event.target.parentElement.remove();
}