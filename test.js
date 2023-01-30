const snail = (colum, day, nigth) => {
  // let result = Math.ceil((colum - nigth) / (day - nigth))
  // return result
//   let current = 0;
//   let counts = 0;
//   while (current <= colum) {
//     counts++;
//     current += day;
//     if (current >= colum) break;
//     current -= nigth;
//   }
//   return counts;
let days = 1  
  for (let i = day; i < colum; i = i + day){
    i = i - nigth
    days++
  }
  return days;
  }
console.log(snail(3, 2, 1));
