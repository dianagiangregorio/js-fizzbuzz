//inizializzo due variabili contenenti i valori iniziali e finali

const startValue = 1;
const endValue = 100;
const fizzBuzzContainer = document.getElementById('fizzbuzz-container')
const resultFizzBuzz = document.getElementById('fizzbuzz')

//stampa Fizz, Buzz o FizzBuzz se il numero è multiplo di 3, 5 o entrambi

let result = ''

for (let n = startValue; n <= endValue; n++){
    if ((n % 3 === 0 ) && (n % 5 === 0)){
        console.log('FizzBuzz');
        result = 'FizzBuzz'
    } else if (n % 5 === 0){
        console.log('Buzz');
        result = 'Buzz'
    } else if (n % 3 === 0 ) {
        console.log('Fizz')
        result = 'Fizz'
    } else {
        console.log(n)
        result = n
    }
}
resultFizzBuzz.innerHTML = `${result}`
