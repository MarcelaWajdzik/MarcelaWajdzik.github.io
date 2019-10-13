/* Nodes parent wezeł rodzica */
const sectionAbbout = document.getElementById('about');
console.log(sectionAbbout.parentElement.parentElement);

/* Nodes child */
console.log(sectionAbbout.childNodes); //zwraca tez spacje , wezły
console.log(sectionAbbout.children); //zwraca same obikety znacznikówczylo h2 p 

console.log(sectionAbbout.firstElementChild); //zwraca same obikety znaczników

/* wezły rodzeństwa */

console.log(sectionAbbout.previousElementSibling); //zwroci ul   bo ul jest poprzedzajace rodzenstwo

console.log(sectionAbbout.previousElementSibling.previousElementSibling); //wyciagniemy h2 
console.log(sectionAbbout.nextElementSibling) // zwroci rodzenstwo po naszej sekcji czyli script