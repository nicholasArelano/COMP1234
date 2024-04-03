// encode each letter by adding 3 to the character code

let full_name= "John Doe";
let encoded_full_name = '';


for( let i in full_name){
    let temp=full_name[i];
    console.log(temp);
    let code = full_name.charCodeAt(i);
    console.log(code);
    code +=3;
    console.log(code);
    let new_string = String.fromCharCode(code);
    console.log(new_string);
    encoded_full_name = encoded_full_name + new_string
}

//display the plain text information
document.write('<aside style="position: fixed; top: 70px; right: 20px;">');
document.write('<strong> Full Name: </strong>'+full_name+'<br>');
document.write('<strong> Full Name: </strong>'+encoded_full_name+'<br>');
document.write('</aside>');

//*****************
//number to string

let num1 = 3;
let num2 = 9;
let temp_string = '';
//let sum = 0;

for (let i = num2; i >= num1; i=i-1){
    temp_string=temp_string+ String(i);
    console.log(temp_string);
    //sum=sum+i
}
console.log('Finish: '+temp_string);
//console.log('Finish: '+temp_string+ 'sum: '+sum);

//*****************
//append string
num1 = 5;
num2 = 5;
sum = 0;

sum = num1 + num2;
if(sum%2)
    sum ='Odd: '+sum;
else
    sum = sum+' :Even';
console.log(sum);

//*****************
//show the array string
let the_array =[3,7,8,4,3,2,3,9,8,1,2,3,4,5,6];
let userInput='';
let array_string='';

do{
    userInput = prompt('Choose an index: ');
}while (userInput >= the_array,length);

for(let i=0; i < userInput; i++){
    array_string += the_array[i];
}
console.log(array_string);
console.log(the_array);

//*****************
//sum the array and put the sum at the end of the array
// let n=the_array.length;
let sum_array = new Array(n+1);
let total = 0;

console.log('the_array: ');
console.log(the_array);
console.log('sum_array: ');
console.log(sum_array);


for(let i=0; i < n; i++){
    total += the_array[i];
    sum_array[i]=the_array[i];
}
sum_array[n]=total;
console.log('sum_array: ');
console.log(sum_array);