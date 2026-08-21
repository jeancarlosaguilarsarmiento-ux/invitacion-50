/* =========================================
   ELEMENTOS
========================================= */

const envelope =
    document.getElementById("envelope");

const openButton =
    document.getElementById("openButton");

const opening =
    document.getElementById("opening");

const invitation =
    document.getElementById("invitation");

const continueButton =
    document.getElementById("continueButton");

const music =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("musicButton");



/* =========================================
   ABRIR SOBRE
========================================= */

openButton.addEventListener("click", () => {

    envelope.classList.add("open");

    openButton.disabled = true;


    /* Música */

    music.play()
        .then(() => {

            musicButton.classList.add("playing");

        })
        .catch(() => {

            console.log(
                "El navegador bloqueó el audio."
            );

        });


    /* Mostrar invitación */

    setTimeout(() => {

        opening.classList.add("hide");

        invitation.classList.add("show");

    }, 1800);

});



/* =========================================
   CONTINUAR
========================================= */

continueButton.addEventListener("click", () => {

    window.scrollTo({

        top: window.innerHeight,

        behavior: "smooth"

    });

});



/* =========================================
   CONTROL DE MÚSICA
========================================= */

musicButton.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicButton.classList.add("playing");

    } else {

        music.pause();

        musicButton.classList.remove("playing");

    }

});



/* =========================================
   CUENTA REGRESIVA
========================================= */


/*
   EVENTO

   19 de septiembre de 2026
   6:00 PM
   Colombia UTC-5
*/

const eventDate =
    new Date(
        "2026-09-19T18:00:00-05:00"
    ).getTime();


const countdown =
    setInterval(() => {

        const now =
            new Date().getTime();


        const difference =
            eventDate - now;


        if (difference <= 0) {

            clearInterval(countdown);

            document.getElementById("days")
                .textContent = "00";

            document.getElementById("hours")
                .textContent = "00";

            document.getElementById("minutes")
                .textContent = "00";

            document.getElementById("seconds")
                .textContent = "00";

            return;

        }


        const days =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (difference %
                (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (difference %
                (1000 * 60 * 60)) /
                (1000 * 60)
            );


        const seconds =
            Math.floor(
                (difference %
                (1000 * 60)) /
                1000
            );


        document.getElementById("days")
            .textContent =
            String(days)
                .padStart(2, "0");


        document.getElementById("hours")
            .textContent =
            String(hours)
                .padStart(2, "0");


        document.getElementById("minutes")
            .textContent =
            String(minutes)
                .padStart(2, "0");


        document.getElementById("seconds")
            .textContent =
            String(seconds)
                .padStart(2, "0");


    }, 1000);



/* =========================================
   ANIMACIONES AL HACER SCROLL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("visible");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    observer.observe(element);

});



/* =========================================
   GOOGLE CALENDAR
========================================= */

const calendarButton =
    document.getElementById(
        "calendarButton"
    );


calendarButton.addEventListener(
    "click",
    () => {

        const title =
            encodeURIComponent(
                "50 años - Javier López Betancourt"
            );


        const details =
            encodeURIComponent(
                "Celebración de los 50 años de Javier López Betancourt. 🤫 Es una sorpresa."
            );


        const location =
            encodeURIComponent(
                "Lugar de la celebración"
            );


        const start =
            "20260919T180000";


        const end =
            "20260919T220000";


        const url =
            "https://calendar.google.com/calendar/render" +
            "?action=TEMPLATE" +
            "&text=" + title +
            "&dates=" +
            start +
            "/" +
            end +
            "&details=" +
            details +
            "&location=" +
            location;


        window.open(
            url,
            "_blank"
        );

    }
);



/* =========================================
   WHATSAPP
========================================= */


/*
   =========================================
   IMPORTANTE
   =========================================

   CAMBIA SOLAMENTE ESTA LÍNEA.

   Ejemplo:

   313 289 6059

   se convierte en:

   573132896059

   Sin +, sin espacios y sin guiones.
*/


const whatsappNumber =
    "573006402657";



const yesButton =
    document.getElementById(
        "yesButton"
    );


const noButton =
    document.getElementById(
        "noButton"
    );


const guests =
    document.getElementById(
        "guests"
    );



/* =========================================
   CONFIRMAR ASISTENCIA
========================================= */

yesButton.addEventListener(
    "click",
    () => {

        const numberOfGuests =
            guests.value;


        const message =
            `Hola. Quiero confirmar mi asistencia ` +
            `a la celebración de los 50 años de ` +
            `Javier López Betancourt.%0A%0A` +

            `✓ Sí asistiré.%0A` +

            ` Número de personas: ` +
            `${numberOfGuests}.%0A%0A` +

            ` ¡Mantendré el secreto!`;


        const whatsappURL =
            `https://wa.me/` +
            `${whatsappNumber}` +
            `?text=${message}`;


        window.open(
            whatsappURL,
            "_blank"
        );

    }
);



/* =========================================
   NO PODRÉ ASISTIR
========================================= */

noButton.addEventListener(
    "click",
    () => {

        const message =
            `Hola. Muchas gracias por la invitación ` +
            `a la celebración de los 50 años de ` +
            `Javier López Betancourt.%0A%0A` +

            `No podré asistir.%0A%0A` +

            ` Mantendré el secreto.`;


        const whatsappURL =
            `https://wa.me/` +
            `${whatsappNumber}` +
            `?text=${message}`;


        window.open(
            whatsappURL,
            "_blank"
        );

    }
);
