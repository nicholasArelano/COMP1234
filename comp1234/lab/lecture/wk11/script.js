let name= 'Bruce';
var Name = "Wayne";
const STUDENT_ID   ='101517474';

const PI=3.14
let btname='sue';
let firstName= 'Nicholas'

console.log(firstName);
console.log(PI);

firstName = "Nick";
// PI=6; -> You can not change a variable while its using 'const'. NOT ALLOWED

let a=5; //integer
let b="Hello World" // string
let c=true // boolean
let d=null  //
let e; // undefined

console.log(5+6);
a=6;
b=5;

console.log(a + b + 5);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); // module shows the rest of the division

let num=prompt('Enter a number:');
document.write('<br>'+num);
document.write('<br>'+num % 2); //used to show a not even number

let total= a + b +5;
document.write('<br> Total:'+total);

let s1='Hello'; // it also can be typed a space here...
let s2='World';//
let s3='<br>';
console.log(s1+s2); //can use document.write as well
console.log(s1+" "+s2); //used to make space between concatenation
document.write(s3+s1+" "+s2); //used to make space between concatenation

let s4=s3+s1+" "+s2
document.write(s4);
s4=`${s3} ${s1}__ ${s2}`
document.write(s4);

let s5=5;
let s6='5';
document.write(s3);
document.write (s5+s6);
document.write(s3);
document.write (s5*56);
document.write (s3);
document.write (55/56);
document.write(s3);
document.write(s5+parseInt(s6));
document.write(s3);

num = parseFloat(prompt('Please enter a number:'));
document.write(num+num);

let flag=confirm('Do you want a drink?');

if(flag == true)
    document.write(s3+ "OK, here is your drink.");
if(flag== false)
    document.write(s3+ "OK, be that way. No drink for you.");

document.write(s3);
document.write(s3);
document.write(s3);
document.write(s3);

