/*
1. Умовні конструкції: 
Написати код, який буде:
Запитати в користувача його вік:
Якщо вік більший 7 і менший 17
	Запитати в користувача ім’я
		Якщо ввів:
			Вивести “Доброго дня, <name>”
		Інакше вивести “До побачення”
Інакше вивести “Ви народились не в 2000х”
*/

    var age = prompt("Скільки Вам років?", "");

       if(age > 7 && age < 17) {

	       var name = prompt("Як Вас звати?", "");

            } else {

              alert("Ви народились не в 2000х");
            }

        if(name !== null) {

   	       alert("Доброго дня" + " " + name);

            } else  {

   	          alert("До побачення");
            }
   
/*2.
alert(null || 2 || undefined);//2
alert(alert(213)) || 2 || alert(324);//213 and undefine
alert(13123 && null && 2);//null
alert(alert(1) && alert(2));//1 and undefine

if(-1 || 0) alert("first")//-1 first
if(-1 && 0) alert("second")//undef
*/   
/*
   //3.
   //"" + 123 + 0//1230
   //"" - 143 + 0//-143
   //true + false//1 true
   //6 / "3"//2
   //"4pt" - 4pt//0 nan
   //5 && 213//213
   //5 || 0//5
   //null + 123//123
   //undefined + 10//nan
*/

/*
5.//значение Ivan, функция перезапишется
var naMe = "Andrii";

function myName(naMe) {
	alert(naMe)
}
myName();

myName("Ivan");


/*
6. Напишіть функцію min (a, b), яка повертає більше чисел a, b.
min(1,2)//2
min(23, 3)//23

function min(a, b) {
	if (a > b) {
      return a;
	} else {
	  return b;
	}
}
 function miN(1, 2){
 	if(1 > 2) {
 		return 1;
 	}else{
 		return 2;
 	}
 }
 function mIn(23, 3){
 	return 23 > 3 ? 23 : 3;
 }
*/
/*
7. Напишіть рекурсивну функцію pow (x, n), яка повертає x в ступені n. 
Інакше кажучи, примножує x на себе n разів і повертає результат.
pow(2,2); 2*2 = 4;
pow(2, 5); 2*2*2*2*2 = 32;
*/
function pow(x, n) {
  if (n != 1) { 
    return x * pow(x, n - 1);
  } else {
    return x;
  }
}

alert( pow(2, 5) ); // 32
alert( pow(2, 2)); //4

/*pow (x, n) = x * x,n-1

pow(2, 5) = 2 * pow(2, 4)
pow(2, 4) = 2 * pow(2, 3)
pow(2, 3) = 2 * pow(2, 2)
pow(2, 2) = 2 * pow(2, 1)
pow(2, 1) = 2
*/
