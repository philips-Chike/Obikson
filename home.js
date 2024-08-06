
/**console.log("hi there")
console.log("again")

a = '4'
b = 5
let c = (b===a)

if (c ==true){
    console.log("b is greater than a")
}
else { 
    (console.log("b and a are not same data type"))
}

console.log("this is not in the loop o")**/ 

/**let day = 3
let dayName = "";

switch (day){
    case 1:
        dayName = "Monday"
        console.log(dayName)
    case 2:
        dayName="Tuesday"
        console.log(dayName)
    case 3:
        dayName = "Wednesday"
        console.log(dayName)
    case 4:
        dayName="Thursday"
        console.log(dayName)
    case 5:
        dayName="Friday"
        console.log(dayName)
    case 6:
        dayName="Saturday"
        console.log(dayName)
    default:
       

}

let num1 = 6;
let num2 = 15;
let num3 = 9;

if (num1 > num2 && num1 > num3){
    console.log("num1 is the biggest number")
}
else if(num2>num3 && num2>num1){
    console.log("num2 is the biggest number")
    
}
else{
    console.log("num3 is the biggest number")
}**/

let my_dict = {name: "chike", age:28, sex:"male"};
let my_list = [3, 5, 7, 11, 13, 17, 19];
let key;
let prime;

for (key in my_dict){
    console.log(key, my_dict[key]);
}

for (prime of my_list){
    console.log(prime);
    console.log()
}

for (let i = 0; i < 11; i++) {
    if (i % 2 == 0) 
        continue;
        
    console.log(i);
}

function Printpage(){
    alert(innerWidth);
}

console.log("how are you")

console.log(document.getElementsByTagName(p)[1])







