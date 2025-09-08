let index = 0;

function moveSlide(direction) {
    const carousel = document.querySelector('.carrossel');
    const images = document.querySelectorAll('.carrossel img');
    const total = images.length;
    
    index += direction;
    if (index < 0) {
        index = total - 1;
    } else if (index >= total) {
        index = 0;
    }

    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}
