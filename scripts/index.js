const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
if (this.window.pageYOffset > 0) return navbar.classList.add('active');
return navbar.classList.remove('active');
});

// Selecione os botões
const modoClaroButton = document.getElementById('modoClaro');
const modoEscuroButton = document.getElementById('modoEscuro');

// Função para ativar o modo escuro
function ativarModoEscuro() {
    // Adicione uma classe à tag HTML que define o estilo escuro
    document.documentElement.classList.add('modo-escuro');
}

// Função para ativar o modo claro
function ativarModoClaro() {
    // Remova a classe que define o estilo escuro
    document.documentElement.classList.remove('modo-escuro');
}

// Ouvintes de eventos para os botões
modoEscuroButton.addEventListener('click', ativarModoEscuro);
modoClaroButton.addEventListener('click', ativarModoClaro);
