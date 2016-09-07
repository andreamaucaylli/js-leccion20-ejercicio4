window.addEventListener("load", function() {
    var boton = document.getElementById("calcular");
    boton.addEventListener("click", function() {
        var segundos = parseInt(document.getElementById("segundos").value);
       
        setInterval(fondo, segundos*1000);

        segundos = document.getElementById("segundos").value = "";

         function fondo () {
        	document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);

        }
});

});