//day 4 
//no.1

let arr = [1];
let arr2  = [2, 3];
let arr3 = [4, 5, 6];
let arr4 = [7, 8, 9, 10];

console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);

//no.2


for (let i = 1; i <= 15; i++) {
    if (!(i%3==0) && !(i%5==0))
        console.log(i);

    else if ((i%3==0) && (i%5==0))
        console.log("FizzBuzz" + i);
        
    else if (i%3==0)
        console.log("Fizz" + i);

    else if (i%5==0)
        console.log("Buzz" + i);
    
}

// no.3

function BMI(weight:number, height:number){
let bmi = weight / height ** 2;
let result = ""
    
if (bmi < 18.5) return "Less Weight"
else if (bmi>= 18.5 && bmi<24.9) return "ideal"
else if (bmi>= 24.9 && bmi<29.9) return "overweight"
else if (bmi>= 29.9 && bmi<39.9) return "very overwight"
else result = "obese";
console.log(result);

};
console.log(95, 1.70);

// no.4

const array: number [] = [1,2,3,4,5,6,7,8,9,10];

const removeOddNum = ("array: number => []");
console.log(array.filter(number => number%2==0));

//no.5

const string = "Hello World"; 

const stringToArray = (str:string) => 
    console.log(str.split(" "));

stringToArray(string);














