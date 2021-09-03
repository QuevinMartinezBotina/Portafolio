window.sr = ScrollReveal();

const animar = (clase, duracion, origen, distancia) => {

    sr.reveal(clase, {
        duration: duracion,

        origin: origen,

        distance: distancia
    });

}

animar('.ejemplo', 2000, 'bottom', '-100px');

animar('.top-5seg', 4000, 'top', '-100px');

animar('.menu', 7000, 'right', '-100px');