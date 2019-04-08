$(function() {

//Слайдер блока Trusted by
	$(".trusted__slider").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false,
		arrows: true,
		variableWidth: true,
		appendArrows: '.trusted__controls',
		prevArrow: '<button class="slick-prev trusted_prev"><svg class="svg__icon svg_prev"><use xlink:href="#icon-prev"></use></svg></button>',
		nextArrow: '<button class="slick-next trusted_next"><svg class="svg__icon svg_next"><use xlink:href="#icon-next"></use></svg></button>',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					variableWidth: false
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					variableWidth: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					variableWidth: false
				}
			}
		]
	});

//Слайдер блока Latest visited
	$(".latest__slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		arrows: true,
		appendArrows: '.latest__controls',
		prevArrow: '<button class="slick-prev latest_prev"><svg class="svg__icon svg_prev"><use xlink:href="#icon-prev"></use></svg></button>',
		nextArrow: '<button class="slick-next latest_next"><svg class="svg__icon svg_next"><use xlink:href="#icon-next"></use></svg></button>',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

//Переключатель Mounthly/Yearly
	$(".plan-control__item").on("click", function() {
		$(".plan-control__item").removeClass("plan-control_active").eq($(this).index()).addClass("plan-control_active");
	}).eq(1).addClass("plan-control_active");

//Модальное окно
	$('.js_modal').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		closeOnBtn: true
	});

//Вызов модального окна в поиске
	$("#js_search").keyup(function() {
		var vl = $(this).val();
		if(vl.length > 3) {
			$.magnificPopup.open({
				items: {
					src: '#search',
					type: 'inline',
				},
				focus: '.looking__input',
				fixedContentPos: true,
				callbacks: {
					open: function() {
						$(".looking__input").val(vl);
					}
				}
			});
		}
	});

//Табы у блока tools
	$(".content__item").not(":first").hide();
	$(".switch__item:first .switch__text").show();
	$(".switch__item").click(function() {
		$(".switch__item").removeClass("switch__active").eq($(this).index()).addClass("switch__active");
		$(".content__item").hide().eq($(this).index()).fadeIn();

			$('.switch__item .switch__text').each(function( index ) {
			 var sld = $(this); 
			 sld.slideUp(); 
			});

			if ($(this).hasClass('switch__active')) { 
			 var sld = $(this).find('.switch__text'); 
			 sld.slideDown();
			}

	}).eq(0).addClass("switch__active");

//Вызов меню на мобильных устройствах
	$(".mobile_btn").on("click", function(e) {
		e.preventDefault();
		$(".mobile__block").fadeIn();
		$(".mobile-block_wr").addClass("mbw_active");
	});

//Закрытие меню на мобильных утсройствах
	$(".mobile__close").on("click", function() {
		// $(".mobile__block").delay(500).fadeOut();
		$(".mobile__block").delay(300).fadeOut();
		$(".mobile-block_wr").removeClass("mbw_active");
	});

//Вызов/закрытие меню языков на мобильных устройствах
	$(".js_lang, .js_close-lang, .mob-lang__item").on("click", function() {
		$(".mobile__lang").toggleClass("mobile-lang_active");
	});

//Преврашение блока с тарифами в слайдер на мобильных устройствах
	$(".plans__box").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		centerMode: true,
		variableWidth: true,
		initialSlide: 1,
		infinite: false,
		responsive: [
			{
				breakpoint: 99999,
				settings: "unslick"
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					centerMode: true,
				}
			}
		]
	});

//Звездный рейтинг
	$('.svg_rating-star').click(function(){
		$(this).parent().attr('data-stars',$(this).data('rating'));
	});

//Прилипающий баннер
	$("#banner_mid").stick_in_parent({
		offset_top: 110
	});

//Нижний блок в боковом меню
	if((document.documentElement.clientHeight - 90) == document.body.clientHeight) {
		$(".extra__total").css({bottom: "92px"});
	}

	$(window).scroll(function() {
		if($(window).scrollTop() == $(document).height() - $(window).height()) {
			$(".extra__total").css({bottom: "92px"});
		} else {
			$(".extra__total").css({bottom: "0"});
		}
	});

//Кастомные чекбоксы
	$(document).on('change', ':checkbox', function() {
		if(this.checked) {
			$(".compare").addClass("compare_active");
		} else {
			$(".compare").removeClass("compare_active");
		}
	});

//Переключатели на странице Sites
	$(".state__switch a.state__item").on("click", function(e) {
		e.preventDefault();
		$(".state__switch a.state__item").removeClass("state_active");
		$(this).addClass("state_active");
	});

//Календарь на странице Sites и его локализация
	$.fn.datepicker.language['eng'] =  {
		days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
		daysShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
		daysMin: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
		months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
		monthsShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Okt','Nov','Dec'],
		today: 'Today',
		clear: 'Clear',
		dateFormat: 'dd.mm.yyyy',
		timeFormat: 'hh:ii',
		firstDay: 1
	};

	$(".datepicker-here").datepicker({
		inline: true,
		language: 'eng',
		navTitles: {
			days: 'dd MM, yyyy'
		}
	});

//Всплывающая подсказка
	$(".tooltip").click(function() {
		event.preventDefault();
	});

	if($(window).width() <= 768) {
		$(".tooltip").addClass("js_toltip-popup");
		$(".tooltip__content").addClass("mfp-hide");
		$(".js_toltip-popup").magnificPopup({
			type: 'inline',
			mainClass: 'mfp-fade',
			removalDelay: 160,
		});
	} else {
		$(".tooltip").removeClass("js_toltip-popup");
		$(".tooltip__content").removeClass("mfp-hide");
	}

//Табы на странице New watchlist
	$(".tab-content__item").not(":first").hide();
	$(".tab__control .tab__switch").click(function(e) {
		e.preventDefault();
		$(".tab__control .tab__switch").removeClass("tab_active").eq($(this).index()).addClass("tab_active");
		$(".tab-content__item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("tab_active");

//Кастомный скролл для выпадающего меню на странице New watchlist
	$(".js_vertical-scroll").jScrollPane();

//Выпадающий автокомплит на new watchlist
	$(".js_autocomplete").keyup(function(e) {
		e.preventDefault();
		$(this).siblings(".js_clear").fadeIn();
		var va = $(this).val();
		if(va.length >= 3) {
			$(this).siblings(".assistant").addClass("assistant_active");
		} else if(!$(this).val() || $(this).val() == '') {
			$(this).siblings(".assistant").removeClass("assistant_active");
			$(this).siblings(".js_clear").fadeOut();
		}
	});

	$(document).click(function() {
		$(".assistant").removeClass("assistant_active");
	});

//Очистка поля
	$(".js_clear").click(function(e) {
		e.preventDefault();
		$(this).siblings(".nw__input").val('');
		if($(this).siblings(".nw__input").val() == '') {
			$(this).fadeOut();
		}
	});

//Появление/скрытие checkbox на watchlist site
	$(".checkbox").click(function() {
		if($(this).is(":checked")) {
			$(this).parents(".watch__picture").addClass("watch_checked");
			$(this).closest(".watch__controls").addClass("watch-controls_active");
		} else {
			$(this).parents(".watch__picture").removeClass("watch_checked");
			$(this).closest(".watch__controls").removeClass("watch-controls_active");
		}
	});

});
