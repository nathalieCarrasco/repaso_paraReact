// ARROWFUCTION - Array METHODOS

const tecnologias =[ 'HTML' , 'CSS', 'Javascript', 'React', 'Node.js']

/* const nuevoArray=tecnologias.map(function(tech){
    if(tech ==='HTML'){
        return 'mySql';
    }else{
        return tech;
    }
}) */

// lo vammos hacer con funcion flecha 
const nuevoArray=tecnologias.map(tech=>{
    if(tech==='HTML'){
        return 'mySql';

    }else{
        return tech;
    }
})

/* const nuevoArray2=tecnologias.filter(function(tech){
    return tech ==='React';
}) */

const nuevoArray2 = tecnologias.filter(tech=> tech !=='React');

console.log(nuevoArray);
console.log(nuevoArray2);