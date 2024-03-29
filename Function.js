//Given an array of strings, use a function to reverse all the elements in the string in
 //ascending order and the specific elements in descending order
 let countries = ["Kenya","Angola","Uganda","Rwanda"]
  console.log(countries.sort());
  console.log(countries.reverse())
  
  //Using JS functions and an array of numbers, return positive if an element within the array is
  // positive, negative if an element is negative, else zero
  let arr = [-1,0,1,2,3,4,5]
  let positive =[]
  let negative = []
   let zero = []
   arr.forEach(numbers=>{
    if (!positive.includes(1,2,3,4,5)){
        positive.push(1,2,3,4,5);
    }
    else(negative.push(-1,))
   });
   console.log({positive});
   console.log({negative})

   //Given an array of objects, where each object represents an employee 
   //with an id, name, and salary property, write a function that returns 
   //a new array of employee objects sorted by their salary in ascending order.
   let employee=[
    {id:50},
    {name: "Raziah"},
    {salary:[80000,20000,50000,70000]},
];
employee.sort(function(a,b){
    return a.salary -(b.salary);
});
employee.forEach((person)=> console.log(employee.salary));
console.log(employee)

//Write a function that accepts an array of numbers and uses
// the forEach() method to console.log each number multiplied by 2.
let num = []
const multiply = (num1, num2)=> console.log(num1*num2)
 multiply(5,6)

  
  
  
  
  