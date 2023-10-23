$(document).ready(function() {
    $('.img').slick({slidesToShow: 3, 
        slidesToScroll: 1, 
        arrows: true,
        dots: true, 
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
				
              }
            }
        ]
    });
});