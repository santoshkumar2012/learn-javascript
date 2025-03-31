// const age = [10, 25, 9, 18, 45, 12, 5, 34, 25];
// const eligible = [];
// const notEligible = [];
// function eligibleForVote(ages) {
//     ages.forEach(age => {
//         if (age >= 18) {
//             eligible.push(age);
//         } else {
//             notEligible.push(age);
//         }
//     });
//     return { eligible, notEligible };
// }
// const result = eligibleForVote(age);
// console.log("Eligible for vote:", result.eligible);
// console.log("Not eligible for vote:", result.notEligibl

// -----------------------------------------------
// const even = [10, 25, 9, 18, 45, 12, 5, 34, 25];
// let totaleven = even.filter((x) => x % 2)
// console.log(totaleven);
// -----------------------------------------------

// function numberSorting(age) {
//   return age
// }

// function sortByDefaultMtd(data){
//   data.sort((a,b) => a - b)
//   return data
// }

// function oddEven(numbers, type){
//   let even = []
//   let odd = []
//   for ( i=0; i<numbers.length; i++) {
//     if(numbers[i] % 2 === 0 ){
//        even.push(numbers[i]) 
//     }else{
//       odd.push(numbers[i])
//     }
//   }
//   // if(type == "even"){
//   //   return even
//   // } else {
//   //   return odd
//   // }
//   return type == "odd" ? even : odd
// }

// age = [10, 25, 9, 18, 45, 12, 5, 34, 25];
// unsorted_list = [9,12,56,45,12,87,45,11,3]
// // console.log( numberSorting(age) );
// // console.log( sortByDefaultMtd(age) );
// // console.log( sortByDefaultMtd(unsorted_list) );
// console.log(oddEven(age, "odd"));


// let array = [1,2,3,2,56,3]
// let array1 = []
// for(i=0; i<array.length; i++){
//    array1 = array.push(2,0, 5)
// }
// console.log(array1)


// let array = [2,3,5,4,5,6,4,8,6,6,2,2,2]  // 5 times
// let array1 = []
// for (let i=0; i<array.length; i++) {
//     if(array[i] === 5){
//       array1.push(array[i])
//     }
// }
// console.log(array1)


// let array = [2, 3, 2, 2, 5, 5, 6, 5] // Duplicate Number
// for (let i=0; i<array.length; i++){
//     for (let j = i + 1; j<array.length; j++){
//         if(array[i] === array[j]){
//             console.log('Check--->', array[i]);
//         }
//     }
// }


// let array = [2, 3, 2, 2, 5, 6] // Maximum Number and Minimum Number
// let smallest = array[0]
// let largest = array[0]

// for (let i=1; i<array.length; i++){
//    if(array[i] < smallest){
//       smallest = array[i]
//    }
//    if(array[i] > largest){
//       largest = array[i]
//    }
// }

// console.log ("smallest", smallest)
// console.log ("largest", largest)

let number = 2648135646
//let sum = array.reduce((a,b) => a + b)

let strnums = number.toString()
let sum = 0;

for(let i=0; i<strnums.length; i++){
    sum += Number(strnums[i])
}

console.log('Check--->', sum);
