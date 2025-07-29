//dates 
let myDate = new Date()
// console.log(myDate.toDateString());

// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());

// console.log(typeof myDate);


// let myCreateDate = new Date(2023,0,23)
// let myCreateDate = new Date(2023,1,23,3,4)
let myCreateDate = new Date("02-25-2025")

// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth()+1);


newDate.toLocaleString("Default",{
    weekday:"long"
})

