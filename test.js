// function height(n) {
//     let start = 2000000
//     let result = 0;
    
//     for (let i = 0; i <= n; i++) {
//         result += start;
//         start /= 2.5;
//     }

//     return result.toFixed(3)
// }


// console.log(height(7))


//  const solve = (s) =>{
//     let parentesisApertura = [...s].filter((item) => item === '(').length
//     let parentesisCierre = [...s].filter((item) => item === ')').length

//     console.log(`Apertura: ${parentesisApertura}, Cierre ${parentesisCierre}`)

//     if(parentesisApertura === 0 || parentesisCierre === 0){
//         return -1
//     }else if(parentesisApertura < parentesisCierre){
//        return parentesisApertura
//     }else if(parentesisCierre < parentesisApertura){
//         return parentesisCierre
//     }else if(parentesisApertura === parentesisCierre){
//         return parentesisApertura
//     }
//  }


//  console.log(solve('())((('))

 const palindrome = (str) =>{
    let specialCharacter = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    return [...specialCharacter].reverse().join('') === specialCharacter
 }


 console.log(palindrome("Madam? I'm Adam!"))