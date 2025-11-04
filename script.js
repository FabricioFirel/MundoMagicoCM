let index = 0; 

function getVisibleCards() {
    const width = window.innerWidth;
    if (width <= 480) return 1;
    if (width <= 768) return 2;
    if (width <= 1024) return 3;
    return 4;
}

function moveSlide(direction) {
    const carousel = document.querySelector('.carrossel');
    const cards = document.querySelectorAll('.carrossel .card');
    const totalCards = cards.length;
    const visibleCards = getVisibleCards();

    const CARD_WIDTH = 250; 
    const CARD_GAP = 25;
    const cardMoveDistance = CARD_WIDTH + CARD_GAP; 

    const maxIndex = totalCards - visibleCards;

   
    index = index + direction;
    

    if (index > maxIndex) {
        index = 0; 
    } else if (index < 0) {
        index = maxIndex; 
    }

    const offset = -index * cardMoveDistance;

    carousel.style.transform = `translateX(${offset}px)`;
}

