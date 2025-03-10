const d= new Date();
console.log(d);

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// const d = new Date();
let name = month[d.getMonth()];

const year=d.getFullYear();
console.log(year);

console.log(month);

let day = d.getDay();
document.querySelector('#date').innerHTML=`${day}`+" / "+`${month}`+" / "+`${year}`;