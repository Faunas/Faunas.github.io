document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const pagination = document.querySelector('.pagination');
    const prevArrow = document.querySelector('.prev');
    const nextArrow = document.querySelector('.next');
    const slidesPerPage = 3;
    let currentPage = 1;

    function updatePagination() {
        pagination.innerHTML = '';
        for (let i = 1; i <= Math.ceil(totalSlides / slidesPerPage); i++) {
            const page = document.createElement('div');
            page.classList.add('page');
            page.textContent = i;
            page.addEventListener('click', function () {
                currentPage = i;
                updateSlider();
                updatePagination();
            });
            if (i === currentPage) {
                page.classList.add('active');
            }
            pagination.appendChild(page);
        }
    }

    function updateSlider() {
        const startPosition = (currentPage - 1) * slidesPerPage;
        slider.style.transform = `translateX(${-startPosition * (100 / slidesPerPage)}%)`;
        updatePagination();
    }

    prevArrow.addEventListener('click', function () {
        currentPage = Math.max(1, currentPage - 1);
        updateSlider();
    });

    nextArrow.addEventListener('click', function () {
        currentPage = Math.min(Math.ceil(totalSlides / slidesPerPage), currentPage + 1);
        updateSlider();
    });

    updatePagination();
});
