const planetas_ss = [

    {
        id:"mercurio",
        nombre:"Mercurio",
        temp:"430°C",
        estado:"Calor extremo",
        icono:"🔥"
    },

    {
        id:"venus",
        nombre:"Venus",
        temp:"465°C",
        estado:"Tormenta ácida",
        icono:"☁️"
    },

    {
        nombre:"La Tierra",
        temp:"15°C",
        estado:"Despejado",
        icono:"☀️"
    },

    {
        nombre:"Marte",
        temp:"-63°C",
        estado:"Tormenta de polvo",
        icono:"🌪️"
    },

    {
        nombre:"Júpiter",
        temp:"-145°C",
        estado:"Tormenta gigante",
        icono:"⛈️"
    },

    {
        nombre:"Saturno",
        temp:"-178°C",
        estado:"Vientos intensos",
        icono:"💨"
    },

    {
        nombre:"Urano",
        temp:"-224°C",
        estado:"Frío extremo",
        icono:"❄️"
    },

    {
        nombre:"Neptuno",
        temp:"-214°C",
        estado:"Vientos supersónicos",
        icono:"🌬️"
    },

    {
        nombre:"Plutón*",
        temp:"-229°C",
        estado:"Nieve de nitrógeno",
        icono:"❄️"
    },

    {
        nombre:"Ceres*",
        temp:"-105°C",
        estado:"Superficie helada",
        icono:"🧊"
    },

    {
        nombre:"Haumea*",
        temp:"-241°C",
        estado:"Hielo cristalino",
        icono:"🧊"
    },

    {
        nombre:"Makemake*",
        temp:"-239°C",
        estado:"Escarcha espacial",
        icono:"❄️"
    },

    {
        nombre:"Eris*",
        temp:"-243°C",
        estado:"Invierno eterno",
        icono:"🌌"
    }

];

const exoplanetas = [

    {
        nombre:"Proxima Centauri b",
        temp:"-39°C",
        estado:"Frío rocoso",
        icono:"❄️"
    },

    {
        nombre:"Kepler-22b",
        temp:"22°C",
        estado:"Posible zona habitable",
        icono:"🌎"
    },

    {
        nombre:"TRAPPIST-1e",
        temp:"-22°C",
        estado:"Posible océano helado",
        icono:"🧊"
    },

    {
        nombre:"51 Pegasi b",
        temp:"1200°C",
        estado:"Gigante gaseoso ardiente",
        icono:"🔥"
    },

    {
        nombre:"HD 209458 b (Osiris)",
        temp:"1000°C",
        estado:"Atmósfera evaporándose",
        icono:"☄️"
    }

];

const todosLosPlanetas = [
    ...planetas_ss,
    ...exoplanetas
];

let planetasActuales = todosLosPlanetas;

const contenedor =
document.getElementById("contenedor_planetas");

const botonSS = document.querySelector(".btn-ss");

const botonExo = document.querySelector(".btn-exo");

function mostrarPlanetas(lista){

        // limpiar cards anteriores

        contenedor.innerHTML="";

        lista.forEach(planeta=>{

            const card = `

            <div class="col">

                <div class="card h-100">

                    <div class="card-body">

                        <h5>

                            ${planeta.nombre}

                        </h5>

                        <div class="icono-planeta">

                            ${planeta.icono}

                        </div>

                        <div class="temperatura">

                            ${planeta.temp}

                        </div>

                        <p class="estado">

                            ${planeta.estado}

                        </p>

                        <a
                        href="detalle.html?id=${planeta.id}"
                        class="btn btn-outline-info">

                            Ver detalle

                        </a>

                    </div>

                </div>

            </div>

            `;

            contenedor.insertAdjacentHTML(
                "beforeend",
                card
            );

        });

}
mostrarPlanetas(planetasActuales);

botonSS.addEventListener(
        "click",
        ()=>{

            planetasActuales =
            planetas_ss;

            mostrarPlanetas(
                planetasActuales
            );

        }
    );


botonExo.addEventListener(
        "click",
        ()=>{

            planetasActuales =
            exoplanetas;

            mostrarPlanetas(
                planetasActuales
            );

        }
    );
