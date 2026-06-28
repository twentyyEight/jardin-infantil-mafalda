import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"

/* ------------------- NAVBAR ------------------- */

// Contenido
animate("nav ul",
    { y: [10, 0], opacity: [0, 1] },
    { duration: 0.5, delay: 0.5 }
)

// Linea
animate("nav div",
    { scaleX: [0, 1] },
    { duration: 0.5 }
);



/* ------------------- HERO ------------------- */

// Imagen
animate("#hero img",
    { scale: [0, 1] },
    { duration: 0.5 }
)

// Titulo
animate("#hero h1",
    { clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)"] },
    { duration: 0.3, delay: 0.5 }
)

// Subtitulo
animate("#hero h3",
    { clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)"] },
    { duration: 0.3, delay: 1 }
)

// Botón
animate("#hero a",
    { scale: [0, 1] },
    { duration: 0.3, delay: 1.5 }
)



/* ------------------- QUÉ OFRECEMOS ------------------- */

// Secciones
const secciones_cards = document.querySelectorAll('.seccion')

// mobile
if (window.innerWidth < 576) {

    animate(secciones_cards, { x: '-50vw', opacity: 0 }, { duration: 0 })

    secciones_cards.forEach((seccion) => {

        inView(seccion, () => {
            animate(seccion,
                { x: ['-50vw', 0], opacity: [0, 1] },
                { duration: 0.5 }
            )
        }, { amount: 0.5 })
    })
}

// tablets
if (window.innerWidth > 576 && window.innerWidth < 1200) {

    animate(secciones_cards,
        { opacity: 0 },
        { duration: 0 }
    )

    secciones_cards.forEach((seccion, index) => {

        inView(seccion, () => {

            animate(seccion,
                { opacity: [0, 1] },
                { duration: 1, delay: index * 0.2 }
            )
        }, { amount: 0.5 })
    })
}

// pc
if (window.innerWidth >= 1200) {

    animate(secciones_cards,
        { y: 100, opacity: 0 },
        { duration: 0 }
    )

    inView(secciones_cards, () => {

        animate(secciones_cards,
            { y: [100, 0], opacity: [0, 1] },
            { duration: 1 }
        )
    }, { amount: 0.3 })
}

// Imagenes
animate('#mafalda-amigos, #mafalda-bici', { opacity: 0 }, { duration: 0 })

inView("#mafalda-bici", () => {

    animate("#mafalda-bici",
        { x: ["-50vw", 0], opacity: [0, 1] },
        { duration: 2 }
    )
}, { amount: 0.5 })

inView('#mafalda-amigos', () => {

    animate('#mafalda-amigos',
        { opacity: [0, 1] },
        { duration: 1 }
    )
}, { amount: 0.5 })



/* ------------------- NIVELES ------------------- */
// Manchas
const manchas = document.querySelectorAll('.nivel svg')

if (window.innerWidth < 1200) {
    manchas.forEach(mancha => {
        animate(mancha, { scale: 0 }, { duration: 0 })

        inView(mancha, () => {
            animate(mancha,
                { scale: [0, 1] },
                { duration: 0.5 },
            )
        }, { amount: 1 })
    })
}

if (window.innerWidth >= 1200) {

    manchas.forEach((mancha, index) => {
        animate(mancha, { scale: 0 }, { duration: 0 })

        inView(mancha, () => {
            animate(mancha,
                { scale: [0, 1] },
                { duration: 0.5, delay: index * 0.3 },
            )
        }, { amount: 1 })
    })
}



/* ------------------- JORNADAS ------------------- */

// Tabla
const jornadas = document.querySelectorAll('.table h3')
const horarios = document.querySelectorAll('.table div')
const jornadas_img = document.querySelector('#jornadas img')

animate(jornadas_img, { opacity: 0 }, { duration: 0 })

if (window.innerWidth < 1024) {

    animate(jornadas, { opacity: 0 }, { duration: 0 })
    animate(horarios, { opacity: 0 }, { duration: 0 })

    inView('#jornadas', () => {
        animate(jornadas, { x: ['-50vw', 0], opacity: [0, 1] }, { duration: 1 })
        animate(horarios, { x: ['50vw', 0], opacity: [0, 1] }, { duration: 1 })
    }, { amount: 0.3 })

    inView(jornadas_img, () => animate(jornadas_img, { opacity: [0, 1] }, { duration: 2 }))

} else {

    inView('#jornadas', () => {
        animate([jornadas, horarios], { opacity: 1 }, { duration: 0 })
        animate('#tables', { x: ['-50vw', 0] }, { duration: 1 })
    }, { amount: 0.3 })

    inView(jornadas_img, () => animate(jornadas_img, { x: ['50vw', 0], opacity: [0, 1] }, { duration: 1 }))
}



/* ------------------- CONTÁCTANOS ------------------- */

// Items
const contacto_cards = document.querySelectorAll('.item')

if (window.innerWidth < 576) {

    animate(contacto_cards, { opacity: 0 }, { duration: 0 })

    contacto_cards.forEach((card) => {

        inView(card, () => {
            animate(card,
                { x: ['50vw', 0], opacity: [0, 1] },
                { duration: 0.5 }
            )
        }, { amount: 0.5 })
    })
}

if (window.innerWidth >= 576) {

    animate(contacto_cards,
        { opacity: 0 },
        { duration: 0 }
    )

    contacto_cards.forEach((card, index) => {

        inView(card, () => {

            animate(card,
                { opacity: [0, 1] },
                { duration: 1, delay: index * 0.2 }
            )
        }, { amount: 0.5 })
    })
}

// Mapa
inView('#contacto iframe', () => {
    animate('#contacto iframe', { opacity: [0, 1] }, { duration: 2 })
})