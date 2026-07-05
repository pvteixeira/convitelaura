/*==========================================
    CONFIGURAÇÕES
==========================================*/

const SEU_NOME = "Pedro";
const WHATSAPP = "5581983051252"; // Troque pelo seu número

/*==========================================
    TELAS
==========================================*/

const screens = document.querySelectorAll(".screen");

function showScreen(id) {

    screens.forEach(screen => {

        screen.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

}

/*==========================================
    BOTÕES
==========================================*/

const btnStart = document.getElementById("btnStart");
const btnOpen = document.getElementById("btnOpen");
const btnContinue = document.getElementById("btnContinue");

const btnYes = document.getElementById("btnYes");
const btnNo = document.getElementById("btnNo");

/*==========================================
    CARTA
==========================================*/

const textoCarta = `Oi!

Tenho uma pequena confissão...

Desde que comecei a conversar com você, pensei que seria muito legal passar um tempo ao seu lado.

Então resolvi fazer esse convite de um jeito diferente.

Prometo boas conversas, muitas risadas e um encontro especial.

Espero que goste dessa surpresa. ❤️`;

let index = 0;

function escreverCarta() {

    const area = document.getElementById("letter");

    area.innerHTML = "";

    index = 0;

    const timer = setInterval(() => {

        area.innerHTML += textoCarta[index];

        index++;

        if (index >= textoCarta.length) {

            clearInterval(timer);

        }

    }, 35);

}

/*==========================================
    TRANSIÇÕES
==========================================*/

btnStart.onclick = () => {

    showScreen("screen2");

}

btnOpen.onclick = () => {

    showScreen("screen3");

    escreverCarta();

}

btnContinue.onclick = () => {

    showScreen("screen4");

}

/*==========================================
    BOTÃO NÃO
==========================================*/

const frases = [

    "😂 Quase conseguiu.",

    "🤨 Tem certeza?",

    "🏃 Esse botão faz academia.",

    "🚀 Nem a NASA pega ele.",

    "😂 Boa tentativa.",

    "❤️ Acho que você queria apertar o SIM.",

    "😎 Eu já esperava por isso.",

    "👀 Tá insistindo mesmo?",

    "🤖 Erro 404: botão não encontrado.",

    "😂 Esse botão é muito rápido."

];

const funny = document.getElementById("funnyMessage");

let tentativas = 0;

function moverBotao() {

    tentativas++;

    const largura = window.innerWidth - 250;

    const altura = window.innerHeight - 200;

    btnNo.style.left = Math.random() * largura + "px";

    btnNo.style.top = Math.random() * altura + "px";

    funny.innerHTML = frases[Math.floor(Math.random() * frases.length)];

    if (tentativas == 8) {

        funny.innerHTML = "😂 Tá bom... você realmente tentou bastante.";

    }

}

btnNo.addEventListener("mouseenter", moverBotao);

btnNo.addEventListener("touchstart", (e) => {

    e.preventDefault();

    moverBotao();

});

/*==========================================
    BOTÃO SIM
==========================================*/

btnYes.onclick = () => {

    showScreen("screen5");

}

/*==========================================
    CORAÇÕES
==========================================*/

const particles = document.getElementById("particles");

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 25) + "px";

    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    particles.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}, 350);
/*==========================================
    CONFIRMAR DATA
==========================================*/

btnConfirm.addEventListener("click", () => {

    const data = document.getElementById("meetingDate").value;
    const hora = document.getElementById("meetingTime").value;

    if (!data) {
        alert("Escolha uma data ❤️");
        return;
    }

    if (!hora) {
        alert("Escolha um horário ❤️");
        return;
    }

    const dataFormatada = new Date(data + "T00:00:00").toLocaleDateString("pt-BR");

    document.getElementById("summary").innerHTML = `
        ❤️ Nosso encontro ficou marcado para o dia <b>${dataFormatada}</b><br><br>
        🕒 Às <b>${hora}</b><br><br>

        Redirecionando para o WhatsApp em <b>3 segundos...</b> 💬
    `;

    showScreen("screen6");

    setTimeout(() => {

        const mensagem = `Oi ${SEU_NOME}! ❤️

Aceitei seu convite! 🥰

Nosso encontro ficou marcado para:

📅 ${dataFormatada}
🕒 ${hora}

Mal posso esperar! ❤️`;

        window.location.href =
            `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;

    }, 3000);

});