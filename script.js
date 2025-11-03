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

  const maxIndex = Math.ceil(totalCards / visibleCards) - 1;

  index += direction;
  if (index < 0) index = maxIndex;
  if (index > maxIndex) index = 0;

  const offset = -index * (100 / visibleCards);
  carousel.style.transform = `translateX(${offset}%)`;
}

window.addEventListener('resize', () => {
  const carousel = document.querySelector('.carrossel');
  const visibleCards = getVisibleCards();
  const offset = -index * (100 / visibleCards);
  carousel.style.transform = `translateX(${offset}%)`;
});

// Menu hamburger
function toggleMenu() {
  const navList = document.getElementById('nav-list');
  navList.classList.toggle('active');
}
