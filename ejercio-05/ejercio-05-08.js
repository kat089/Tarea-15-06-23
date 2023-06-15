
// 5 Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.(consola)

function sumar(n1,n2) { 
    console.log(n1+n2);}
    sumar(5,3);
 console.log("-------------------------");
//6 Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.(consola)    
function mayor(n1,n2) { 
    console.log(Math.max (n1,n2))}
    mayor(5,3);
    console.log("-------------------------");
//7 Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.(consola)
 function comparar(n1,n2,n3) {
   console.log(Math.max(n1,n2,n3));
}
comparar(2,5,5.5);
console.log("-------------------------");    
//8 Escribe un programa que pida un número y diga si es divisible por 2(consola)

function divisible2(n1)
{
    if (n1%2===0) { 
        console.log("es divisible por 2");
        
    } else { console.log("no es divisible por 2");
        
    }
}
divisible2(8);
divisible2(9);

 