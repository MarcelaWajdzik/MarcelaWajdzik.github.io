/*  Click*/
const button = document.getElementById('button');
console.log(button);


function setBackground() {
    document.body.style.backgroundColor = "green";
}

function setBackgroundHeading() {
    document.getElementById('main-header').style.backgroundColor = "red";
}

button.onclick = setBackground;
// beznawiasów setBackground() bo w tedy od razu była by wywołana anei po kliknieciu
//z tym mozliwościa do 1przycisku mozna przypisac tylko jedno  zdarzenie


button.addEventListener('click', setBackground);
button.addEventListener('dblclick', setBackgroundHeading);



function mouseOver(event) {
    console.log(event);
    button.style.padding = "30px";
}

button.addEventListener('mouseover', mouseOver)

document.getElementById('button').addEventListener('mouseover', mouseOver)

// this przycisk naktory było ustawienie zdarzenie i on był odpowiedzialny za uruhcomienie tej funkcji 


/* Blokowanie */
document.querySelector('.link').addEventListener("click", function (e) {
    e.preventDefault(); //odpowiada za blokowanieprzeładowania
    e.stopPropagation(); //zatrzymuje 
    this.style.backgroundColor = "yellow"
})

document.getElementById('link-holder').addEventListener("click", function (e) {

    this.style.backgroundColor = "pink";
});