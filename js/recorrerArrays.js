//alert("funciona");

// arrays paara recorrer 
const tecnologias = ['html','css', 'javascript' ,'react']

// forEach - acceder a cada elemento dentro del array

/*const arrayForeach = tecnologias.forEach(function(tech){
    console.log(tech);
});*/


// map - te permite acceder a cada elemento y la vez crear 
//un nuevo arreglo 

const arrayMap = tecnologias.map(function(tech){
    return tech;
})



// mostrar en consola
//console.log(arrayForeach);
console.log(arrayMap);