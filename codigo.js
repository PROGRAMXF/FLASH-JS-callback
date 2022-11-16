function funcion(mensaje) {
  setTimeout(function () {
    document.write(" Colocamos el café...luego...");
    mensaje();
  }, 1000);
}

function funcion2() {
  document.write(" prendemos la cafetera");
}

function mostrar() {
  const respuesta = funcion(funcion2);
  document.write(respuesta);
}
