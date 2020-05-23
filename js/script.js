$(document).ready(function(){
	$(".fa-search").click(function(){
		$(".header-top__search, .header-top__input").toggleClass("active");
		$("input[type='text']").focus();
	});

	$('.slider').slick({
		arrows:true,
		dots:true,
      slidesToShow:1,
      initialSlide: 2,
		autoplay:true,
		speed:1000,		
   });

   $('.product-slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:4,		

		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});

	$('.release-slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:3,	
		centerMode: true,
		variableWidth: true,
		initialSlide: 1,
		autoplay:true,
		speed:800,

		responsive:[			
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
	$('.game-slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:1,
		autoplay:true,
		speed:800,
		
	});

   var mixer = mixitup('.products__row');
});   