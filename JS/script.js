let currentSlide = 0;

const moveSlide = (direction) => {
    const slides = document.querySelectorAll('.carousel-images img');
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
};

function highlightBtn(btn) {
    btn.style.transform = 'scale(1.1)';
}

function resetBtn(btn) {
    btn.style.transform = 'scale(1)';
}

function openModal() {
    document.getElementById('modal').style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
};