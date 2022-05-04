const home = document.querySelector('.home')
const sobre = document.querySelector('.sobre')
const contato = document.querySelector('.contato')
const body = document.querySelector('body')
const checkboxBola = document.querySelector('.checkboxBola')
const menuMobile = document.querySelector('.menuMobile')
const redesSociais = document.querySelector('.redesSociais')

function mousehover(pagina, hover) {
    if (pagina == "index") {
        if (hover == true) {
            home.style.borderBottom = "none";
        } else {
            home.style.borderBottom = "solid var(--bg-header)"
        }
    } else if (pagina == "sobre") {
        if (hover == true) {
            sobre.style.borderBottom = "none";
        } else {
            sobre.style.borderBottom = "solid var(--bg-header)"
        }
    } else if (pagina == "contato") {
        if (hover == true) {
            contato.style.borderBottom = "none";
        } else {
            contato.style.borderBottom = "solid var(--bg-header)"
        }
    }
}

let darkModeAtivado = false
function darkMode() {
    body.classList.toggle('darkMode')
    if (darkModeAtivado == false) {
        checkboxBola.style.transform = 'translateX(15px)';
        darkModeAtivado = true
    } else {
        checkboxBola.style.transform = 'translateX(0px)';
        darkModeAtivado = false
    }
}

function abrirMenu() {
    menuMobile.classList.toggle('checked')
    redesSociais.classList.toggle('checked')
}