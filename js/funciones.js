function random10() {
    let randomNum = Math.random() * 9;
    return Math.round(randomNum) + 1;
}

function randomRange(range) {
    let randomNum = Math.random() * (range - 1);
    return Math.round(randomNum) + 1;
}

function arrayRandom(elementos) {
    let longitud = elementos.length;
    let elementoRandom = randomRange(longitud)
    return elementos[elementoRandom - 1];
}

function janKenPon() {
    let valores = ["piedra", "papel", "tijera"];
    return arrayRandom(valores);
}

function jugarPPT(jugadaUsuario, jugadaMaquina) {
    //let jugadaValida = false;
    //let jugada1 = janKenPon();
    
    //Comentado para poder aprovecharlo con botones, que ya darán un valor correcto
    /* while (!jugadaValida) {
        if ((jugadaUsuario != "piedra") && (jugadaUsuario != "papel") && (jugadaUsuario != "tijera")) {
            jugadaUsuario = prompt("La jugada tiene que ser 'piedra', 'papel' o 'tijera'. Vuelve a elegir.")
        } else {
            jugadaValida = true;
        }
    } */

    let ganador = compruebaJugada(jugadaMaquina, jugadaUsuario);
    switch (ganador) {
        case 1:
            return 1; //`${jugada1} vs ${jugadaUsuario}. <br>¡Ha ganado la máquina! Skynet cada vez está más cerca`;
            break;
        case 2:
            return 2; //`${jugada1} vs ${jugadaUsuario}. <br>¡Has ganado! La humanidad aún tiene esperanza.`;
            break;
        default:
            return 3; //`${jugada1} vs ${jugadaUsuario}. <br>¡Habéis empatado!`;
            break;
    }
}

function compruebaJugada(valor1, valor2) {
    let ganador = 0;
    if (valor1 != valor2) {
        switch (valor1) {
            case "piedra":
                if (valor2 == "papel") {
                    ganador = 2;
                } else
                if (valor2 == "tijera") {
                    ganador = 1;
                }
                break;
            case "papel":
                if (valor2 == "piedra") {
                    ganador = 1
                } else
                if (valor2 == "tijera") {
                    ganador = 2
                }
                break;
            case "tijera":
                if (valor2 == "papel") {
                    ganador = 1
                } else
                if (valor2 == "piedra") {
                    ganador = 2
                };
                break;
        }
    }
    return ganador;
}


function generateHeroName(gender) {

    const titulos_masculino = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor", "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"];
    const titulos_femenino = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"];
    const adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"];
    const sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"];
    let heroName = "";

    switch (gender) {
        case "male":
            heroName = arrayRandom(titulos_masculino) + " " + arrayRandom(adjetivos) + " " + arrayRandom(sustantivos);
            break;
        case "female":
            heroName = arrayRandom(titulos_femenino) + " " + arrayRandom(adjetivos) + " " + arrayRandom(sustantivos);
            break;
        default:
            break;
    }
    return heroName;
}

function getMovies() {

    const movies = ["Vengadores: Infinity War", "Aquaman", "Han Solo: Una historia de Star Wars", "Animales fantásticos: Los crímenes de Grindelwald", "Black Panther", "Cincuenta sombras liberadas", "Spider-Man: Un nuevo universo", "Jurassic World: El reino caído", "Ant-Man y la Avispa", "Hotel Transilvania 3: Unas vacaciones monstruosas", "Sherlock Gnomes", "Bumblebee", "El Grinch", "Ralph rompe Internet", "Pacific Rim: Insurrección", "El corredor del laberinto: La cura mortal", "Tomb Raider", "Deadpool 2", "Ready Player One", "Predator", "El regreso de Mary Poppins", "El cascanueces y los cuatro reinos", "Ocean's 8", "Los Increíbles 2", "Misión Imposible: Fallout", "The equalizer 2", "Proyecto Rampage", "Venom", "Escape Plan 2: Hades", "La monja", "La primera purga: La noche de las bestias", "Creed II: La leyenda de Rocky", "Insidious. La última llave", "Aniquilación", "Sicario: El día del soldado", "Mamma Mia! Una y otra vez", "Un pliegue en el tiempo", "12 valientes", "La noche de Halloween (I)", "Johnny English: De nuevo en acción", "Hija de su padre", "Mortal Engines", "El pasajero (I)", "El rascacielos", "Proud Mary", "Juego de ladrones: El atraco perfecto", "Winchester: La casa que construyeron los espíritus", "Peter Rabbit", "15:17 Tren a París", "Cavernícola", "Sansón", "Noche de juegos (I)", "Gorrión rojo", "Alpha", "El justiciero", "Los Extraños: Cacería Nocturna", "Operación: Huracán", "7 días en Entebbe", "Bohemian Rhapsody", "The Cloverfield Paradox", "Actos de violencia", "Un lugar tranquilo", "La primera vez que nos vimos", "Isla de perros", "El espía que me plantó", "El alma de la fiesta (I)", "Terminal (I)", "Anon (I)", "Ibiza", "Megalodón", "Christopher Robin", "Un mar de enredos", "Father of the Year", "¡Qué guapa soy!", "Robin Hood. Forajido, héroe, leyenda", "¡Tú la llevas! (I)", "First Man (El primer hombre)", "Extinción", "SuperFly", "Matar o morir. Peppermint", "#SexPact", "Infiltrado en el KKKlan", "Upgrade", "Milla 22", "Slender Man", "La casa del reloj en la pared", "Smallfoot", "Millennium: Lo que no te mata te hace más fuerte", "Escuela para fracasados", "Mentes poderosas", "Arizona", "Ha nacido una estrella", "Mowgli: La leyenda de la selva", "La última jugada", "Blindspotting", "Un pequeño favor", "Crónicas de Navidad", "A ciegas", "Summer '03", "Gosnell: The Trial of America's Biggest Serial Killer"]

    return movies;
}

function isInTheList(item, list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] == item) {
            console.log("repetida")
            return true;
        }
    }
    return false;
}

function getMovie() {
    let listaPeliculas = getMovies();
    let pelicula = arrayRandom(listaPeliculas);
    return pelicula;
}

function recomendarPeliculas() {
    let numMovies = prompt("¿Cuántas películas quieres ver?");
    let listaPeliculas = getMovies();
    if (listaPeliculas.length < numMovies){
        return `Disculpa, no tenemos tantas películas. El máximo es ${listaPeliculas.length}.`
    }
    let recomendaciones = "<ol> ";
    let listaRecomendadas = [];
    let pelicula = "";

    for (let i = 0; i < numMovies; i++) {
        pelicula = getMovie();
        yaEstaRecomendada = isInTheList(pelicula, listaRecomendadas)
        //con while
        if (!yaEstaRecomendada) {
            listaRecomendadas.push(pelicula);
            recomendaciones += "<li> " + pelicula + " </li>";

        } else {
            i--;
        }

    }

    /* for (let i = 0; i < numMovies; i++) {
        pelicula = arrayRandom(listaPeliculas);
        if (isInTheList(pelicula, listaRecomendadas) == false) {
            recomendaciones += "<li> " + arrayRandom(listaPeliculas) + " </li>";
            listaRecomendadas.push(pelicula);
            // console.log (listaRecomendadas);
            // recomendaciones [i] = arrayRandom(listaPeliculas);
        } else {
            i--;
        }
    } */
    return recomendaciones + " </ol>";
}