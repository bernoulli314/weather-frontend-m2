const planetas = [

{
    id:"mercurio",
    nombre:"Mercurio",
    temp:"430°C",
    estado:"Calor extremo",
    icono:"🔥",

    humedad:"0%",
    viento:"3 km/h",
    gravedad:"0.38g",
    composicion:"Rocoso",

    descripcion:
    "El planeta más cercano al Sol. Posee enormes diferencias de temperatura entre el día y la noche.",

    pronostico:[
        {dia:"Lunes",temp:"425°C",estado:"Radiación extrema",icono:"🔥"},
        {dia:"Martes",temp:"431°C",estado:"Cielo despejado",icono:"☀️"},
        {dia:"Miércoles",temp:"429°C",estado:"Superficie brillante",icono:"✨"},
        {dia:"Jueves",temp:"433°C",estado:"Calor intenso",icono:"🔥"},
        {dia:"Viernes",temp:"430°C",estado:"Actividad solar",icono:"☀️"},
        {dia:"Sábado",temp:"427°C",estado:"Radiación elevada",icono:"⚡"},
        {dia:"Domingo",temp:"432°C",estado:"Temperatura extrema",icono:"🔥"}
    ]
},

{
    id:"venus",
    nombre:"Venus",
    temp:"465°C",
    estado:"Tormenta ácida",
    icono:"☁️",

    humedad:"96%",
    viento:"360 km/h",
    gravedad:"0.90g",
    composicion:"Rocoso",

    descripcion:
    "Conocido como el planeta más caliente del sistema solar debido a su fuerte efecto invernadero.",

    pronostico:[
        {dia:"Lunes",temp:"463°C",estado:"Lluvia ácida",icono:"☁️"},
        {dia:"Martes",temp:"467°C",estado:"Nubes densas",icono:"☁️"},
        {dia:"Miércoles",temp:"465°C",estado:"Tormenta química",icono:"⚡"},
        {dia:"Jueves",temp:"469°C",estado:"Calor sofocante",icono:"🔥"},
        {dia:"Viernes",temp:"464°C",estado:"Vientos intensos",icono:"💨"},
        {dia:"Sábado",temp:"462°C",estado:"Atmósfera densa",icono:"☁️"},
        {dia:"Domingo",temp:"466°C",estado:"Tormenta ácida",icono:"⚡"}
    ]
},

{
    id:"tierra",
    nombre:"La Tierra",
    temp:"15°C",
    estado:"Despejado",
    icono:"☀️",

    humedad:"65%",
    viento:"15 km/h",
    gravedad:"1g",
    composicion:"Rocoso",

    descripcion:
    "Único planeta conocido que alberga vida y agua líquida en abundancia.",

    pronostico:[
        {dia:"Lunes",temp:"16°C",estado:"Soleado",icono:"☀️"},
        {dia:"Martes",temp:"18°C",estado:"Parcialmente nublado",icono:"⛅"},
        {dia:"Miércoles",temp:"17°C",estado:"Lluvia ligera",icono:"🌧️"},
        {dia:"Jueves",temp:"19°C",estado:"Despejado",icono:"☀️"},
        {dia:"Viernes",temp:"20°C",estado:"Soleado",icono:"☀️"},
        {dia:"Sábado",temp:"18°C",estado:"Nublado",icono:"☁️"},
        {dia:"Domingo",temp:"16°C",estado:"Lluvias",icono:"🌧️"}
    ]
},

{
    id:"marte",
    nombre:"Marte",
    temp:"-63°C",
    estado:"Tormenta de polvo",
    icono:"🌪️",

    humedad:"5%",
    viento:"120 km/h",
    gravedad:"0.38g",
    composicion:"Rocoso",

    descripcion:
    "Conocido como el planeta rojo debido a la presencia de óxido de hierro.",

    pronostico:[
        {dia:"Lunes",temp:"-60°C",estado:"Tormenta de polvo",icono:"🌪️"},
        {dia:"Martes",temp:"-62°C",estado:"Vientos fuertes",icono:"💨"},
        {dia:"Miércoles",temp:"-64°C",estado:"Cielo rojizo",icono:"☁️"},
        {dia:"Jueves",temp:"-63°C",estado:"Tormenta leve",icono:"🌪️"},
        {dia:"Viernes",temp:"-61°C",estado:"Polvo suspendido",icono:"🌫️"},
        {dia:"Sábado",temp:"-65°C",estado:"Frío extremo",icono:"❄️"},
        {dia:"Domingo",temp:"-63°C",estado:"Tormenta intensa",icono:"🌪️"}
    ]
}

];

document.addEventListener(
"DOMContentLoaded",
()=>{

    const parametros =
    new URLSearchParams(
        window.location.search
    );

    const id =
    parametros.get("id");


    const planeta =
    planetas.find(
        p=>p.id===id
    );


    const detalle =
    document.getElementById(
        "detalle_planeta"
    );

    const contenedor =
    document.getElementById(
        "contenedor_tiempo_semanal"
    );


    if(planeta){

        detalle.innerHTML=`

        <h1>

            ${planeta.icono}
            ${planeta.nombre}

        </h1>

        <p>
            💧 Humedad:
            ${planeta.humedad}
        </p>

        <p>
            💨 Viento:
            ${planeta.viento}
        </p>

        <p>
            ⚖️ Gravedad:
            ${planeta.gravedad}
        </p>

        <p>
            🪨 Composición:
            ${planeta.composicion}
        </p>

        <p>

            ${planeta.descripcion}

        </p>

        `;


        planeta.pronostico.forEach(
        dia=>{

            const card=`

            <div class="col">

                <div class="card h-100">

                    <div class="card-body text-center">

                        <h5>
                            ${dia.dia}
                        </h5>

                        <div class="display-4">
                            ${dia.icono}
                        </div>

                        <h4>
                            ${dia.temp}
                        </h4>

                        <p>
                            ${dia.estado}
                        </p>

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

});