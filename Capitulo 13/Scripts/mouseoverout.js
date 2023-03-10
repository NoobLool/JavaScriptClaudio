/* 
Fig. 13.7: mouseoverout.js
Los eventos mouseover y mouseout.
*/
imagen1 = new Image();
imagen1.src = "../..Imagenes/encabezado1.png";
imagen2 = new Image();
imagen2.src = "../../Imagenes/encabezado2.png";

function mouseOver( e ){
    //intercambia la imagen cuando se mueve el ratón sobre ella
    if( e.target.getAttribute("id") == "encabezado" ){
        e.target.setAttribute("src", imagen2.getAttribute("src"));
    }
    
    //si el elemento es li, asigna su id a su color para
    //cambiar el texto del código hex al color correspondiente
    if( e.target.tagName.toLowerCase() == "li" ){
        e.target.setAttribute("style", "color: " + e.target.getAttribute("id"));
    }
}

function mouseOut( e ){
    //regresar la imagen original al quitar el ratón
    if( e.target.getAttribute("id") == "encabezado" ){
        e.target.setAttribute("src", imagen1.getAttribute("src"));
    }

    //si el elemento es li, asigna su id a innerHTML
    //para mostrar el nombre del color
    if( e.target.tagName.toLowerCase() == "li" ){
        e.target.innerHTML = e.target.getAttribute("id");
    }
}

document.addEventListener("mouseover", mouseOver, false);
document.addEventListener("mouseout", mouseOut, false);