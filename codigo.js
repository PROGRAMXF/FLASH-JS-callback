function funcion(mensaje){
    setTimeout(function(){
        document.write('Colocamos el café...luego...');
        mensaje();
    }, 1000);
}

function funcion2(){
    document.write(' prendemos la cafetera')
}

const cambio = funcion(funcion2);


function mostrar(){
    document.write(cambio);
}
