// var users={
//     username:"Krishnan",
//     age:22
// }
// console.log(users);
var mobile=[
    {
        "model":"Redmi note bro",
        "prand":"Redmi",
        "ram":"4GB",
        "storage":"64GB",
        "price":16999.00,
        "img":"https://m.media-amazon.com/images/I/41QFO1bfoYL._SX300_SY300_QL70_FMwebp_.jpg",
        "Isavlable":true
    },
    {
        "model":"One plus",
        "prand":"1+",
        "ram":"6GB",
        "storage":"64GB",
        "price":16999.00,
        "img":"https://m.media-amazon.com/images/I/41QFO1bfoYL._SX300_SY300_QL70_FMwebp_.jpg",
        "Isavlable":true
    },
    {
        "model":"Realme 13 bro",
        "prand":"Realme",
        "ram":"4GB",
        "storage":"64GB",
        "price":16999.00,
        "img":"https://m.media-amazon.com/images/I/41QFO1bfoYL._SX300_SY300_QL70_FMwebp_.jpg",
        "Isavlable":true
    },
    {
        "model":"Samsugn J7",
        "prand":"Samsugn",
        "ram":"4GB",
        "storage":"64GB",
        "price":16999.00,
        "img":"https://m.media-amazon.com/images/I/41QFO1bfoYL._SX300_SY300_QL70_FMwebp_.jpg",
        "Isavlable":true
    },
    {
        "model":"Redmi note bro",
        "prand":"Redmi",
        "ram":"4GB",
        "storage":"64GB",
        "price":16999.00,
        "img":"https://m.media-amazon.com/images/I/41QFO1bfoYL._SX300_SY300_QL70_FMwebp_.jpg",
        "Isavlable":true
    }    
];
// console.log(mobile);
for(let i=0;i<mobile.length;i++){
    console.log(`
    Model: ${mobile[i].model}
    Prand: ${mobile[i].prand}
    Ram: ${mobile[i].ram}
    Storage: ${mobile[i].storage}
    Img: ${mobile[i].img}
    Available: ${mobile[i].Isavlable}
    `);
}
var str='{"Name":"Krishnan","age":22}';
console.log(str);
alert(typeof (str));
var obj=JSON.parse(str);//JSON is convert to object formate.
console.log(obj);
alert(typeof (obj));

// object to JSON formats

var user={
    Name:"Hey ari",
    age:22
}
console.log(user);
alert(typeof (user));
var str=JSON.stringify(user);
alert(typeof(str));
console.log(str);

var user={
    "Name":"Hey ari",
    "Age":22,
    "Gender":"Male",
    "Marks":[{
        "Tamil":34,
        "English":45,
        "Maths":56
    }],
    "Address":{
        "Street":"west street",
        "City":"cuddlore",
        "pincode":"789898"
    }
}
console.log(user);
console.log("Tamil :"+ user.Marks[0].Tamil);
for(let i=0;i<user.Marks.length;i++){
    console.log(user.Marks[i]);
}
const user = {

    name: 'John Doe',

    email: 'john.doe@example.com',

    age: 25,

    dob: '08/02/1989',

    active: true,

    adress:{
        street:'west street',
        city:'cuddlore',
    }
};
for(var key in user){
    console.log(`${key}: ${user[key]}`);
}
console.log(`${key}: ${user[key].city}`)
console.log(`${key}: ${user[key].street}`)

// HTTP REQUEST: Get Rest countries

let xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300){
        var obj=JSON.parse(this.response);
         console.log(obj);
        for(var key  in obj){
            console.log(`Region: ${obj[key].region}`)
            console.log(`PNG: ${obj[key].flags.png}`);
            console.log(`SVG: ${obj[key].flags.svg}`);
        } 
    }     
}
xhr.send();
setTimeout(()=>{
    document.getElementsById("#demo").inner.HTML="Hey krish";
    document.body.style.color="black";
    document.body.style.backgroundColor="red";
    document.body.style.fontSize="50px";
},2000)

const tag_select=document.getElementsByTagName("li");
console.log(tag_select);
const id_select=document.getElementById("demo");
console.log(id_select);
const cls_select=document.getElementsByClassName("head");
console.log(cls_select);

let elements = document.getElementsByClassName('cls_1');
let data = [].map.call(elements, elem => elem.textContent);

console.log(data);

var select=document.querySelector(".demo");
select.innerHTML="Hey krish How are you ???"
var btn=document.querySelector("button");
btn.onclick=function(){
    var y=document.querySelectorAll(".demo1");
    y[0].style.color="red";
    y[0].style.background="black";
    y[1].style.color="green";
    y[1].style.background="white";
}
var a=document.querySelector(".inner_text_01");
a.innerText;
document.querySelector('a[href*="zenclass"]');
document.querySelector('a[href*="zenclass"]').getAttribute('href');