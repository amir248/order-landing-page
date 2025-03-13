const d= new Date();
// console.log(d.getDay());

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// const d = new Date();
let name = month[d.getMonth()];

const year=d.getFullYear();
// console.log(year);

// console.log(name);

let day = d.getDay();
// document.querySelector('#date').innerHTML=`${day}`+" / "+`${name}`+" / "+`${year}`;




var dateString = new Date().toLocaleString("ru-RU", { timeZone: "Asia/Tomsk" });
var date = new Date(dateString);
var n = date.getDay();
console.log(n);
if(window.location.path=="/commercialOffer"){
    console.log('right Path');
}
document.querySelector('#date').innerHTML=dateString;