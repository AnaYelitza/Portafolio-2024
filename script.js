let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("html");
        habilidades[1].classList.add("php");
        habilidades[2].classList.add("Kotlin");
        habilidades[3].classList.add("Swift");
        habilidades[4].classList.add("Flutter");
        habilidades[5].classList.add("WordPress");
        habilidades[6].classList.add("C");
        habilidades[7].classList.add("JavaScript");
        habilidades[8].classList.add("React");
        habilidades[9].classList.add("Node");
        habilidades[10].classList.add("Laravel");
        habilidades[11].classList.add("Java");
        habilidades[12].classList.add("Git");
        habilidades[13].classList.add("Comunicación");
        habilidades[14].classList.add("Trabajo");
        habilidades[15].classList.add("Creatividad");
        habilidades[16].classList.add("Proyect");
        habilidades[17].classList.add("Adaptabilidad");
        habilidades[18].classList.add("SQL");
        habilidades[19].classList.add("MySQL");
        habilidades[20].classList.add("Mongo");
        habilidades[21].classList.add("Oracle");
        habilidades[22].classList.add("Power");
        habilidades[23].classList.add("Excel");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 