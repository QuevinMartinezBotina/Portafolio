window.sr = ScrollReveal();

const animar = (clase, duracion, origen, distancia) => {

    sr.reveal(clase, {
        duration: duracion,

        origin: origen,

        distance: distancia
    });

}

animar('.animation-bottom', 2000, 'bottom', '-100px');

animar('.animation-top', 4000, 'top', '-100px');

animar('.menu', 5000, 'left', '-100px');