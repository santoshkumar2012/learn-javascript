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

function numberSorting(age) {
  return age
}

function sortByDefaultMtd(data){
  data.sort((a,b) => a - b)
  return data
}

function oddEven(numbers, type){
  let even = []
  let odd = []
  for ( i=0; i<numbers.length; i++) {
    if(numbers[i] % 2 === 0 ){
       even.push(numbers[i]) 
    }else{
      odd.push(numbers[i])
    }
  }
  // if(type == "even"){
  //   return even
  // } else {
  //   return odd
  // }
  return type == "odd" ? even : odd
}

age = [10, 25, 9, 18, 45, 12, 5, 34, 25];
unsorted_list = [9,12,56,45,12,87,45,11,3]
// console.log( numberSorting(age) );
// console.log( sortByDefaultMtd(age) );
// console.log( sortByDefaultMtd(unsorted_list) );
console.log(oddEven(age, "odd"));