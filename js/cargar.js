function cargar() {
    expresion = document.getElementById("entrada").value;    

    if (isEmpty(!expresion)) {

        limpiador();

        var y = expresion.length;
        n = 0;
        aux = 7;        

        document.getElementById("boton2").removeAttribute("disabled");
        document.getElementById("vel").removeAttribute("disabled");
        document.getElementById("stope").removeAttribute("disabled");        

        while (n < y) {
            if (expresion.charAt(n) == "a" || expresion.charAt(n) == "b") {

                document.getElementById('cuadro' + aux).innerHTML = '<h1>' + expresion.charAt(n) + '</h1>';
                n++;
                aux++;
            } else {
                for (i = 0; i <= 20; i++) {
                    document.getElementById('cuadro' + i).innerHTML = "<h1></h1>";
                }
                swal({
                        button: "Aceptar",
                        icon: 'warning',
                        title: 'Expresión incorrecta'
                    })
                    .then((value) => {
                        swal(reset())
                    });
                break;
            }

        }
    } else {
        swal({
                button: "Aceptar",
                icon: 'warning',
                title: 'No has ingresado ninguna expresión.'
            })
            .then((value) => {
                swal(reset())
            });
    }

}

function limpiador() {

    for (i = 0; i <= 20; i++) {
        document.getElementById('cuadro' + i).innerHTML = "";
    }

}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

