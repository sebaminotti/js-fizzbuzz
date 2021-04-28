// ricreiamo fizz buzz ma con un ciclo while

var i = 1;

while (i<=100) {

    if ((i % 3==0)&&(i % 5 == 0)) {
      console.log(i + "  FIZZ-BUZZ") ;
      
    } else if(i % 3== 0){
      
        console.log(i + "  FIZZ");
    } else if (i % 5 == 0) {
        
        console.log(i + "  BUZZ")
    } else {

        console.log(i);
    }

    i++

    

}
