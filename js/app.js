String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}


function isEmpty(str) {
    return (!str || 0 === str.length);
}

let cuadro = document.getElementById('cuadro');
var velocidad = document.querySelector("#vel");
var speed;

function logica() {
    var expresion = document.getElementById("entrada").value;
    document.getElementById('conteo').innerHTML = 1;
    let n = 1;
    let estado = 1;
    e = estado;
    p = 2;
    r = 0;
    l = 0;
    sw = 1;
    var y = expresion.length;
    mod = 7;
    if (isEmpty(!expresion)) {
        expresion = 'z' + expresion + 'z';
        while (estado != 3) {
            while (estado == 1) {
                if (expresion.charAt(n) == "a") {
                    $("#cuadro" + mod).fadeIn(function () {
                        $(this).html("<h1>a</h1>").fadeIn();
                    });
                    expresion = expresion.replaceAt(n, "a");
                    moverIzquierda(p, e);
                    r++;
                    mod++;
                    p++;
                } else if (expresion.charAt(n) == "b") {
                    $("#cuadro" + mod).fadeIn(function () {
                        $(this).html("<h1>a</h1>").fadeIn();
                    });
                    expresion = expresion.replaceAt(n, "a");
                    moverIzquierda(p, e);
                    r++;
                    mod++;
                    p++;
                } else if (expresion.charAt(n) == "z") {
                    expresion = expresion.replaceAt(n, "a");
                    estado = 2;
                    e = estado;
                    l++;
                    n--;
                    sw = 0;
                    moverDerecha(p, e);
                    p++;
                }

                if (sw == 1) {
                    n++;
                }
            }

            sw = 1;

            while (estado == 2) {
                if (expresion.charAt(n) == "a") {
                    expresion = expresion.replaceAt(n, "a");
                    l++;
                    moverDerecha(p, e);
                    p++;
                } else {
                    if (expresion.charAt(n) == "z") {
                        expresion = expresion.replaceAt(n, "a");
                        estado = 3;
                        e = estado;
                        r++;
                        n++;
                        sw = 0;
                        moverIzquierda(p, e);
                        p++;
                    }
                }
                if (sw == 1) {
                    n--;
                }
            }
        }
    } else {
        swal({
                button: "Aceptar",
                icon: 'error',
                dangerMode: true,
                title: 'No puedes iniciar si está vacía la expresión'
            })
            .then((value) => {
                swal(reset())
            });
    }
}

velocidad.oninput = () => {
    speed = velocidad.value;
    console.log(speed);
};

function moverDerecha(contador, vstado) {
    if (speed == 0) {
        $(".cuadrado").animate({"left": "+=45px"}, 5000).fadeIn(function () 
            {
                $("#conteo").html(contador);
                $("#estate").html("Q" + vstado);
                $("#aceptado").html("verificando");
            });
    }else{
        if(speed == 1) {
            $(".cuadrado").animate({"left": "+=45px"}, 4000).fadeIn(function () 
                {
                    $("#conteo").html(contador);
                    $("#estate").html("Q" + vstado);
                    $("#aceptado").html("verificando");
                });
        }else{
            if(speed == 2) {
                $(".cuadrado").animate({"left": "+=45px"}, "slow").fadeIn(function () 
                {
                    $("#conteo").html(contador);
                    $("#estate").html("Q" + vstado);
                    $("#aceptado").html("verificando");  
                });
            }else{
                if(speed == 3){
                    $(".cuadrado").animate({"left": "+=45px"}, "medium").fadeIn(function () 
                    {
                        $("#conteo").html(contador);
                        $("#estate").html("Q" + vstado);
                        $("#aceptado").html("verificando");
                    });
                }else{
                    $(".cuadrado").animate({"left": "+=45px"}, "fast").fadeIn(function () 
                    {
                        $("#conteo").html(contador);
                        $("#estate").html("Q" + vstado);
                        $("#aceptado").html("verificando"); 
                    });
                }
            }
        }
    }
}

function moverIzquierda(contador, vstado) {
   if (speed == 0) {
    $(".cuadrado").animate({"left": "-=45px"}, 3000).fadeIn(function () 
        {
            $("#conteo").html(contador);
            $("#estate").html("Q" + vstado);
            $("#aceptado").html("verificando");
            if(vstado == 3){
                $("#aceptado").html("Aceptado").css({"color":"#fff", "background-color": "#1abc9c", "padding": "3px"});;
            }
        });
    }else {
        if (speed == 1) {   
           $(".cuadrado").animate({"left": "-=45px"}, 2000).fadeIn(function () 
            {
                $("#conteo").html(contador);
                $("#estate").html("Q" + vstado);
                $("#aceptado").html("verificando");
                if(vstado == 3){
                    $("#aceptado").html("Aceptado").css({"color":"#fff", "background-color": "#1abc9c", "padding": "3px"});;
                }
            }); 
       }else {
            if (speed == 2) {
                $(".cuadrado").animate({"left": "-=45px"}, "slow").fadeIn(function () 
                {
                    $("#conteo").html(contador);
                    $("#estate").html("Q" + vstado);
                    $("#aceptado").html("verificando");
                    if(vstado == 3){
                        $("#aceptado").html("Aceptado").css({"color":"#fff", "background-color": "#1abc9c", "padding": "3px"});;
                    }
                });
            }else{
                if(speed == 3){
                    $(".cuadrado").animate({"left": "-=45px"}, "medium").fadeIn(function () 
                    {
                        $("#conteo").html(contador);
                        $("#estate").html("Q" + vstado);
                        $("#aceptado").html("verificando");
                        if(vstado == 3){
                            $("#aceptado").html("Aceptado").css({"color":"#fff", "background-color": "#1abc9c", "padding": "3px"});;
                        }
                    });
                }else{
                    $(".cuadrado").animate({"left": "-=45px"}, "fast").fadeIn(function () 
                    {
                        $("#conteo").html(contador);
                        $("#estate").html("Q" + vstado);
                        $("#aceptado").html("verificando");
                        if(vstado == 3){
                            $("#aceptado").html("Aceptado").css({"color":"#fff", "background-color": "#1abc9c", "padding": "3px"});
                        }
                    });
                }
            }
        }
    }

}

function detener(){
    location.reload();
}
