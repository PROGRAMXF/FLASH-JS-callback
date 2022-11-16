function funcion(mensaje) {
  setTimeout(function () {
    document.write(" Colocamos el café...luego...");
    mensaje();
  }, 1000);
}

function funcion2() {
    setTimeout(function () {
  document.write(" prendemos la cafetera");
  mensaje();
    },3000);
}

function mostrar() {
  const respuesta = funcion(funcion2);
  document.write(respuesta);
}
