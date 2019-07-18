let jugadaUsuario = document.getElementById("jugadaUsuario");
let jugadaMaquina = document.getElementById("jugadaMaquina");
let textGanador = document.getElementById("ganador");


function jugar(jugada) {
    resetTablero();
    let maquina = janKenPon();
    document.getElementById("piedra").setAttribute("disabled", "disabled");
    document.getElementById("papel").setAttribute("disabled", "disabled");
    document.getElementById("tijera").setAttribute("disabled", "disabled");


    for (let i = 0; i < 2; i++) {
        document.querySelectorAll(`body > div > main > div:nth-child(2) > div:nth-child(${i+1}) > h3`)[0].style["display"] = "block";
    }
    jugadaUsuario["src"] = `./img/${jugada}.jpg`;
    setTimeout(function () {
        jugadaMaquina["src"] = `./img/${maquina}.jpg`;
        let ganador = jugarPPT(jugada, maquina);
        let mensaje = "";

        switch (ganador) {
            case 1:
                mensaje = "You lose..."
                textGanador.style["color"] = "red";
                jugadaUsuario.style.border = "4px solid red";
                jugadaMaquina.style.border = "4px solid green";
                jugadaUsuario.style.animationName = "shake";
                jugadaUsuario.style.animationDuration = "0.5s";
                jugadaMaquina.style.animationName = "spin";
                jugadaMaquina.style.animationDuration = "0.5s";
                break;
            case 2:
                mensaje = "You win!"
                textGanador.style["color"] = "green";
                jugadaUsuario.style.border = "4px solid green";
                jugadaUsuario.style.animationName = "spin";
                jugadaUsuario.style.animationDuration = "0.5s";
                jugadaMaquina.style.border = "4px solid red";
                jugadaMaquina.style.animationName = "shake";
                jugadaMaquina.style.animationDuration = "0.5s";
                break;
            case 3:
                mensaje = "Draw"
                textGanador.style["color"] = "yellow";
                jugadaUsuario.style.border = "4px solid yellow";
                jugadaMaquina.style.border = "4px solid yellow";
                break;
            default:
                break;
        }

        textGanador.innerText = mensaje;
        textGanador.style.fontWeight = "bolder";
        document.getElementById("piedra").removeAttribute("disabled");
        document.getElementById("papel").removeAttribute("disabled");
        document.getElementById("tijera").removeAttribute("disabled");
    }, 1000);
}

function resetTablero() {
    jugadaUsuario["src"] = "";
    jugadaUsuario.style.border = "none";
    jugadaUsuario.style.animationName = "none";

    jugadaMaquina["src"] = "";
    jugadaMaquina.style.border = "none";
    jugadaMaquina.style.animationName = "none";


    for (let i = 0; i < 2; i++) {
        document.querySelectorAll(`body >  div > main > div:nth-child(2) > div:nth-child(${i+1}) > h3`)[0].style["display"] = "none";
    }
    textGanador.innerText = "";
}