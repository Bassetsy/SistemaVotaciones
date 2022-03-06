function sumarLike(pj) {
    var personaje = "likePersonaje" + pj
    if (localStorage.getItem(personaje)) {
        var total = parseInt(localStorage.getItem(personaje))
        total += 1
        localStorage.setItem(personaje, total)
    } else {
        localStorage.setItem(personaje, 1)
    }
    console.log(localStorage.getItem(personaje))
}

function sumarDislike(pj) {
    var personaje = "disLikePersonaje" + pj
    if (localStorage.getItem(personaje)) {
        var total = parseInt(localStorage.getItem(personaje))
        total += 1
        localStorage.setItem(personaje, total)
    } else {
        localStorage.setItem(personaje, 1)
    }
    console.log(localStorage.getItem(personaje))
}