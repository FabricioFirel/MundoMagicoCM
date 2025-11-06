let index = 0; // Váriavel global para rastrear a posição do carrossel

// Função para determinar quantos cards cabem na tela (para calcular o limite)
function getVisibleCards() {
    const width = window.innerWidth;
    if (width <= 480) return 1; // 1 card (Celular)
    if (width <= 768) return 2; // 2 cards (Tablet)
    if (width <= 1024) return 3; // 3 cards (Desktop Pequeno)
    if (width <= 1200) return 4; // 4 cards (Desktop Médio)
    return 5; // 5 cards (Desktop Grande - NOVO PADRÃO)
}

// Função CORRIGIDA para obter a largura exata do movimento (Largura do Card + Gap)
function getCardMoveDistance() {
    const width = window.innerWidth;
    const CARD_GAP = 25; // O valor de gap (espaçamento) no seu CSS
    let CARD_WIDTH;

    // Sincroniza a largura do card com as definições do seu CSS nos @media queries
    if (width <= 480) {
        CARD_WIDTH = 275; // 1 Card
    } else if (width <= 768) {
        CARD_WIDTH = 220; // 2 Cards
    } else if (width <= 1024) {
        CARD_WIDTH = 230; // 3 Cards
    } else if (width <= 1200) {
        CARD_WIDTH = 250; // 4 Cards
    } else {
        CARD_WIDTH = 200; // 5 Cards (NOVO VALOR PARA DESKTOP GRANDE)
    }
    
    return CARD_WIDTH + CARD_GAP;
}

function moveSlide(direction) {
    const carousel = document.querySelector('.carrossel');
    const cards = document.querySelectorAll('.carrossel .card');
    
    if (!carousel || cards.length === 0) return; // Proteção para caso o HTML não carregue

    const totalCards = cards.length;
    const visibleCards = getVisibleCards();
    const cardMoveDistance = getCardMoveDistance(); 
    
    // Cálculo do ÍNDICE MÁXIMO: O último índice onde o último card ainda está visível.
    const maxIndex = totalCards - visibleCards;

    // 1. Atualiza o índice (Move 1 card por vez)
    index = index + direction;
    
    // 2. Lógica de Limitação (Impede que vá além do começo ou do fim)
    if (index > maxIndex) {
        index = maxIndex; 
    } 
    if (index < 0) {
        index = 0; 
    }
    
    // 3. CÁLCULO FINAL DO OFFSET (Translação em Pixels)
    const offset = -index * cardMoveDistance;

    carousel.style.transform = `translateX(${offset}px)`;

    // Se a translação for feita via CSS, o JavaScript só precisa garantir o novo index
    // e recalcular o transform.
}

// --- MENU HAMBURGER ---
function toggleMenu() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
}

// --- LISTENERS GLOBAIS ---
// Recalcula a posição no redimensionamento (o index volta para 0 se necessário)
window.addEventListener('resize', () => {
    // Ao redimensionar, forçamos o carrossel a recalcular sua posição
    // sem mudar o 'index', para que ele se ajuste aos novos limites de tela.
    moveSlide(0); 
});

// Garante que o carrossel se posicione corretamente ao carregar
window.addEventListener('load', () => moveSlide(0));