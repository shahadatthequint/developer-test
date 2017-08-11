window.sr = ScrollReveal();
//sr.reveal('.col');
sr.reveal('.logo, .col,.header-container, .story-card, .video-story, .video-section-gfx, .bol-chr1, .border-box, .bol-chr2, .bol-frame-slider, .bol-gfx, .tel-bg, .factoid, .bol-chr3, .bol-gfx-2, .green-bg', { duration: 1000 });


$(document).ready(function() {
	$('.video-slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
	  dots: true,
      arrows: false,
      autoplaySpeed: 4000
    });
	$('.slider-2').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
			variableWidth: true
            
          }
			
        }
		  
      ]
    });
	
	$('.slider-3').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
			variableWidth: true
            
          }
        }
      ]
    });
	
	$('.photo-gallery').slick({
	autoplay: true,
    draggable: true,
    arrows: false,
    dots: true,
    fade: true,
    speed: 900,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100
    });
});

$('.photo-gallery').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //console.log($(slick.$slides.get(currentSlide)).find('figcaption').text());
	//$('.logo span').html($(slick.$slides.get(currentSlide)).find('figcaption').text());
});



//WhatsApp
$(document).ready(function() {
  $(document).on("click", '#btnWp', function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      var text = $(this).attr("data-text");
      var url = $(this).attr("data-link");
      var message = encodeURIComponent(text) + " - " + encodeURIComponent(url);
      var whatsapp_url = "whatsapp://send?text=" + message;
      window.location.href = whatsapp_url;
    } else {
      alert("Please use an Mobile Device to Share this Article");
    }
  });
});




$(document).ready(function() {
		$(document).on("click", '.trgtModal', function() {
			$('#embedModal').addClass('modal--active');
			$('.modal__content').addClass('modal__content--active');
			
	});
	
	$('.modal__close').click(function(){
		$('#embedModal').removeClass('modal--active');
		$('.modal__content').removeClass('modal__content--active');
	});
	
	});
