document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth
    if (width <= 768) {
        new Swiper('.repair__list', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 'auto'
        });
    }
})


