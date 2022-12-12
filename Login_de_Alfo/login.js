function loguear() {

    var user = document.getElementById("usuario").value;

    var pass = document.getElementById("pass").value;

    if (user == "JosmarDavid" && pass == "30039952")

    {


        location.href = "index.html"

    } else {
        alert("Los datos que ha ingresado no son los indicados, por favor intente de nuevo");
    }


}