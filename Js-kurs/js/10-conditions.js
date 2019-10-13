/* operator wrunkowy */

let age = 18;

if (age >= 18) {
    console.log('warunek spełniony');

}
/* if-else */
if (age >= 18) {
    console.log('warunek spełniony');
} else {
    console.log('warunek niespełniony');
};

/* Warunek else if */

let bmi = 28;
if (bmi < 20) {
    console.log("niedowaga");
} else if (bmi < 25) {
    console.log("norma");
} else {
    console.log("nadwaga"); //wykonuje sie do 1 spełnionego warunku
}

/* Switch */
let lightColor = "black";

switch (lightColor) {
    case "green":
        console.log("jedź");
        break;
    case "yellow":
        console.log("czekaj");
        break;
    case "red":
        console.log("stój");
        break;
    default:
        console.log("problem z sygnalizac"); // gdy sie zepsuje sygnalizacja i do zmiennej  przypisze sie np black
        break;

}