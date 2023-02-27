(function($) {

var slickWrap = $('.slick-wrap')
slickWrap.slick({
  dots: false,
  autoplay: true,
  //focusOnSelect: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  //asNavFor: '.slidetxt',
});

var slideTxt = $('.slidetxt')
slideTxt.slick({
  dots: false,
  focusOnSelect: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  infinite: false,
  arrows: false,
  speed: 300,
  autoplay: true,
  asNavFor: '.imgslider, .slick-wrap'
})
  var imageSlide = $('.imgslider')
imageSlide.slick({
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  infinite: true,
  arrows: false,
  speed: 300,
  autoplay: true,
})


function jumpBack() {
    setTimeout(function() {
      slideTxt.slick("slickGoTo", 0);
      slickWrap.slick("slickGoTo", 0);
    }, 300);
  }

  slideTxt.on("afterChange", function(event, slick, currentSlide, nextSlide) {
    console.log(currentSlide - 1);
    if (currentSlide === 3) {
      console.log("last slide");
      jumpBack();
      //slideTxt.slick('slickPlay');
    }
  });
  
  imageSlide.on("afterChange", function(event, slick, currentSlide, nextSlide) {
    console.log(currentSlide - 1);
    if (currentSlide === 3) {
      console.log("last slide");
      jumpBack();
      //slideTxt.slick('slickPlay');
    }
  });

slickWrap.on("afterChange", function(event, slick, currentSlide, nextSlide) {
    console.log(currentSlide - 1);
    if (currentSlide === 3) {
      console.log("last slide");
      jumpBack();
      slickWrap.slick('slickPlay');
    }
  });

})(jQuery);