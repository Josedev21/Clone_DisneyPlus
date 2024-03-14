document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })
    
    // Seção de atração , programação das abas
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);

            escondeTdsAbas();
            aba.classList.add('shows__list--is-active');

            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // Seção faq accordion
    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreoufecharesposta);
    }
})

// Adiciona a classe que remove a logo e o botao
function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden')
}

// Remove a classe que remove a logo e o botão
function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden')
}

function abreoufecharesposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    console.log(elemento)
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe)
}

// Remove a class do button
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

// Remove a class das abas (ul)
function escondeTdsAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}