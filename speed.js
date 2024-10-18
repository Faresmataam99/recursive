//  const maxSpeed = 80 ;
//  const MaxPoints =5 ;
//  const currentSpeed =parseInt(prompt('ur speed'));
//  if(currentSpeed<maxSpeed){
//     console.log('ur doing fine');
//  }
//  else{
//     const diff =Math.abs(currentSpeed -maxSpeed);
//     const points =

//  }


//  let sentence ='When I Was Younger I Told My Mother That One Day I Am Gonna Make U Proud'
//  const results =[]
//  console.log(sentence)
//  console.log(sentence.split(' ').map(word => word.charAt(0)).join(' '))
 
//  for (let letter of sentence){
//     const index = results.findIndex(result => result.letter == letter);
//     if(index != -1){
//         results[index].number ++;

//     }
//     else{
//         results.push({
//             letter :letter ,
//             number : 1

//         });
//     }
//  }
//  console.log(results)
//  let numbers =[1,2,[5,8],4,6[[2,1]]];
//  const sum = (arr) =>{
//     if ( Array.isArray(number))
//  }
 


let age = prompt ('enter your age')
const children = age < 12;
const teenagers = age>13 && age<17;
const adults = age >= 18;
    if (age<12){
        alert('you child is cute, u pay only 10£ for it')
    }
    else if (age>13 && age< 17) {
        alert('pay 15£ please')

    }
    else {
    age > 18 == alert('pay 20 £')
    }

    //second exercice :
    const weather = prompt('How is the weather like today ?');
    const hot= weather > 30;
    const freezing = weather < 15;
    const moderate = 22 && 18

    if (weather>30) {
        alert('i recommand you wear a nice shirt with a short pants');
        
    }
    else if 
        (weather<22 && weather>18) {
            alert('wearing a simple light jacket will keep from getting sick');
        } 
    
    else{
        weather< 15 == alert('a beautiful black coat with a white sweatshirt should do the job')
    }
// third exerice
fibonacci = (n) =>{
    if (n===0){
        return 0 ;
    }
    else if (n===1){
        return 1 ;

    }
    else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
let n = prompt('enter the position (n) for the Fibonacci sequence :');
n = Number (n) ;
let result = fibonacci (n) ;
console.log(`The Fibonacci number at position ${n} is ${result}.`)


// forth exercice
 power =(base, exponent) => {
   
    if (exponent === 0) {
      return 1;
    } else if (exponent < 0) {
      
      return 1 / power(base, -exponent);
    } else {
      
      return base * power(base, exponent - 1);
    }
  }
  let base = prompt("Enter the base:");
  base = Number(base);
  let exponent = prompt("Enter the exponent:");
  exponent = Number(exponent);
  
  let resultats = power(base, exponent);
  console.log(`${base} raised to the power of ${exponent} is ${resultats}.`);