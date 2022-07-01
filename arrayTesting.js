
const testArr=[30,5,10,11,9,5,60,80,100,75,120,5,8,6,89,56,110,10,11,9,199,68,0,99,1,30,30,5,10,11,9,5,60,80,100,75,120,5,8,6,89,56,110,10,11,9,199,68,0,99,1,30,30,5,10,11,9,5,60,80,100,75,120,5,8,6,89,56,110,10,11,9,199,68,0,99,1,30,30,5,10,11,9,5,60,80,100,75,120,5,8,6,89,56,110,10,11,9,199,68];

function findel(number){
   let count=0;
   testArr.map(function(data,index){
     if(data===number){
       console.log('index '+ index +':' + number)
       count++;
     }
   });
console.log('repeated '+ count +'' +'Times')
}
findel(6);
let newArray=(testArr.slice(25,-25));
let sum=0;
newArray.map(function(data){
  sum=sum+data;
})
console.log("total sum of array"+sum)
newArray.sort();
console.log(newArray);


// function findNumber(e)
// {
//     var found=testArr.indexOf(30);
//     console.log(found);
// }
// findNumber();







