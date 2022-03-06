Swal.fire({
    title: 'Cargando...',
    timer: 1000,
    timerProgressBar: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    showLoading: true,
    didOpen: () => { Swal.showLoading() }
})

function mostrarConfirmation() {
    Swal.fire({
        title: 'Votación Exitosa',
        icon: 'success',
        padding: '0.5cm',
        position: 'center',
        confirmButtonText: 'Aceptar',
    })
}

function mostrarInfoConcursanteUno(pj) {
    Swal.fire({
        title: 'Sanemi Shinazugawa',
        html: 'Suele ser extremadamente agresivo, violento e impulsivo ' +
            'a la hora de hacer frente a un Demonio y siempre esta dispuesto a ' +
            'correr riesgos gracias a su actitud temeraria <br>' +
            'Likes: ' + obtenerPorcentajeLikes(pj) + " %<br>" + 'Dislikes: ' + obtenerPorcentajeDisLikes(pj) + " %",
        icon: 'info',
        confirmButtonText: 'Aceptar',
        padding: '0.5cm',
        toast: true,
        position: 'center',
    })
}

function mostrarInfoConcursanteDos(pj) {
    Swal.fire({
        title: 'Gyutaro',
        html: "Fue un Demonio relativamente alto de complexión algo musculosa, " +
            'que perteneció al grupo de las Doce Lunas Demoníacas ' +
            'compartiendo la posición de la Luna Superior Seis <br>' +
            'Likes: ' + obtenerPorcentajeLikes(pj) + " %<br>" + 'Dislikes: ' + obtenerPorcentajeDisLikes(pj) + " %",
        icon: 'info',
        confirmButtonText: 'Aceptar',
        padding: '0.5cm',
        toast: true,
        position: 'center-right',
    })
}

function obtenerLikes(pj) {
    var personaje = "likePersonaje" + pj
    return localStorage.getItem(personaje)
}

function obtenerDisLikes(pj) {
    var personaje = "disLikePersonaje" + pj
    return localStorage.getItem(personaje)
}

function obtenerPorcentajeLikes(pj) {
    totalVotos = obtenerTotalVotos(pj)
    porcentajeLikes = parseInt(obtenerLikes(pj))
    return porcentajeLikes / totalVotos * 100;
}

function obtenerPorcentajeDisLikes(pj) {
    totalVotos = obtenerTotalVotos(pj)
    porcentajeDislikes = parseInt(obtenerDisLikes(pj))
    return porcentajeDislikes / totalVotos * 100;
}

function obtenerTotalVotos(pj) {
    var cantidadLikes = parseInt(obtenerLikes(pj));
    var cantidadDislikes = parseInt(obtenerDisLikes(pj));
    return cantidadLikes + cantidadDislikes;
}