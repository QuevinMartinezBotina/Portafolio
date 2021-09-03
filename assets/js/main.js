window.sr = ScrollReveal();

const animar = (clase, duracion, origen, distancia) => {

    sr.reveal(clase, {
        duration: duracion,

        origin: origen,

        distance: distancia
    });

}

animar('.ejemplo', 2000, 'bottom', '-100px');

animar('.texto', 6000, 'top', '-100px');