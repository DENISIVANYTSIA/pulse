$(document).ready(function () {
  $(".carousel__inner").slick({
    speed: 1200,
    adaptiveheight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/left.svg"</button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/right.svg"</button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});
