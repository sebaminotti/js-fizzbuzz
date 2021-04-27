// creiamo un programma che stampi i numeri da 1 a 100
// per i multipli di 3 si deve stampare fizz per i multipli di 5 buzz
// per i multipli di 3 e 5 fizzbuzz


// utiliziamo un ciclo for per creare il programmino
for(var i = 0 ; i <= 100 ; i++){

    if((i % 3 ==0)&&(i % 5 ==0)){

    console.log(i + "FIZZ-BUZZ")

    } else if(i % 3 == 0){
     console.log(i + " FIZZ")
    } else if (i % 5 == 0){

      console.log(i + " BUZZ")  
    } else {

        console.log(i);
        
    }
}
