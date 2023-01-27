var title = document.getElementById("title");
var author = document.getElementById("author");
var number = document.getElementById("number");
var table = document.querySelector("table");
var form = document.querySelector("form");


form.addEventListener("submit", function(e){
    
    e.preventDefault();
   
    addBook();
})

function addBook(){

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerText = title.value;
    td2.innerText = author.value;
    td3.innerText = number.value;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    table.appendChild(tr);

    title.value = "";
    author.value = "";
    number.value = "";


}

var hour = new Date().getHours();

if(hour > 18){

    document.body.style.backgroundColor = "#111";

    table.classList.add("table-dark");
    form.classList.add("bg-dark","text-light");
    
}
