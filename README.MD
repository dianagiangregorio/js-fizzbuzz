Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Per vedere se un numero è multiplo di un altro utilizzo modulo %
se un numero % un altro numero restituisce 0 allora sono multipli.

Quindi per i numeri n % 3 === 0 stampo Fizz;
per i numeri n % 5 === 0 stampo Buzz;
per i numeri n % 3 === 0 AND n % 5 === 0 stampo FizzBuzz;
tutti gli altri numeri li stampo in pagina.

Posso utilizzare un ciclo for con una variabile che parte da 1 fino ad essere <= di 100 e ad ogni ciclo incremento il valore di 1.
All'interno del ciclo inserisco un'istruzione condizionale IF
