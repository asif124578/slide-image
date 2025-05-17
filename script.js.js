const slides = [
  {
    image: 'https://i.postimg.cc/d1B6qLrN/Green-Minimalist-Aesthetic-Happy-Birthday-Instagram-Story.png',
    text: 'Taiyeba my cute mama'
  },
  {
    image: 'https://i.postimg.cc/QdYHrsFg/495066436-984477520540070-9140173791354239092-n-1.jpg',
    text: 'Mehejabin my little another mama'
  },
  {
    image: 'https://i.postimg.cc/Y07SxCP7/488656984-964734099181079-5455673211865781340-n.jpg',
    text: 'Mim Taiyeba Mehejabin my heart'
  }
];

let currentSlide = 0;

function showSlide(index) {
  const slide = slides[index];
  document.getElementById('image').src = slide.image;
  document.getElementById('text').innerText = slide.text;
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function speakText() {
  const text = slides[currentSlide].text;
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

// Show first slide on load
window.onload = function () {
  showSlide(currentSlide);
};
