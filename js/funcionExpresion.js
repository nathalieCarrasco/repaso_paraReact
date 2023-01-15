

//Funcion  expresion

// ejemplo diferencia entre 
//function declaration

/* function sumar(num1 =0 , num2 =0){
    console.log(num1 + num2)
} */


const sumar = function(){
    console.log(2  + 2)
}


sumar();

// en function expresion no se puede llamar 
// antes de su declaracion 


const sumaar = function(num1=0, num2=0){
    return num1+ num2
}

const resultado = sumaar(40,50);

console.log(resultado);

//----------- Arrow function ---------
// funciones Flecha 

// --- sintaxis de diferencia 


const suma = ()=>{
    console.log(6+ 6)
}

suma();



const multiplicacion=(numero1=0, numero2=0)=>{
    console.log(numero1 * numero2)
}

multiplicacion(3,2);


const division =(num1=0 , num2=0)=>{
    return (num1 / num2);
}

const result = division(10,2);
console.log(result);