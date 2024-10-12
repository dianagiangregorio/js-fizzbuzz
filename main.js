//inizializzo due variabili contenenti i valori iniziali e finali

const startValue = 1;
const endValue = 100;

//stampa Fizz, Buzz o FizzBuzz se il numero è multiplo di 3, 5 o entrambi

for (let n = startValue; n <= endValue; n++){
    if ((n % 3 === 0 ) && (n % 5 === 0)){
        console.log('FizzBuzz');
    } else if (n % 5 === 0){
        console.log('Buzz');
    } else if (n % 3 === 0 ) {
        console.log('Fizz')
    } else {
        console.log(n)
    }
}