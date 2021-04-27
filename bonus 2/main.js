for(var i = 1 ; i <=100 ; i++){
if (i % 15 == 0) {
document.getElementById("list").innerHTML+="<li class='green'>"+i + " FIZZBUZZ " + " </li>"
} else if (i % 3 == 0) {
    document.getElementById("list").innerHTML+="<li class = 'red'>"+i + " FIZZ " + " </li>"
} else if (i % 5 == 0) {
    document.getElementById("list").innerHTML+="<li class ='blue'>"+i + " BUZZ " + " </li>"
}else {
    document.getElementById("list").innerHTML+= "<li class='orange'>"+i + "  " + " </li>"
}



}