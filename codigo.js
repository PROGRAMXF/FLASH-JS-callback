function funcion(mensaje){
    setTimeout(function(){
        console.log('Colocar el cafe');
        mensaje();
    }, 1000);
}

function funcion2(){
    console.log('Prender la cafetera')
}

funcion(funcion2);