$(function () {

	// функция отмены скролла
	function dissableScroll() {
		$('html, body').on('wheel keyup keydown', function (e) {  // при воздействии на body и html колесиком мыши, нажатии конопок 
			$('html').css('position', 'fixed');	// дает html позицию фикс, предотвращает прокрутку
		});
	}
	function enableScroll() {
		$('html, body').on('wheel keyup keydown', function (e) {  // при воздействии на body и html колесиком мыши, нажатии конопок
			$('html').css('position', 'static');	// возвращает html обычные свойтсва
		});
	}
	

	// сворачивание\разворачивание элемента
	$('#collapseBTN').click(function () {
		// $('.hidden').css('display', 'none');
		var divHidden = $('.hidden');
		// при помощи изменения css стиля
		// if (divHidden.css('display') == 'block') {
		// 	divHidden.css('display', 'none');
		// }
		// else {
		// 	divHidden.css('display', 'block');
		// }
		// при помощи псевдо элемента и методов hide и show
		if (divHidden.is(':visible')) {
			divHidden.hide();
		}
		else {
			divHidden.show();
		}
	});
	// вызов попапа
	$('#popupBTN1').click(function () {

		// fadeIn - плавное изменение прозрачности (появление) элемента (значения могут быть разные, по-умолчанию плавное появление за 400 мс). Действует на объект jquery
		$('.popup-container1').fadeIn(1500, dissableScroll);
		// $('.popup-container').show();
	});
	// в этом случае попап удаляется при нажатии на саму форму попапа, а надо что отключалось при нажатии за его границей
	$('.popup-container1').click(function (event) {
		if (event.target == this) {	// .target() - возвращает html элемент из-за этого его надо сравнивать с this, т.к действует на html элемент
			// $(this).hide()
			$(this).fadeOut(1000, enableScroll);	// обратное действие fadeIn

		}
		// чем отличается this от $(this)
		// console.log(this); // html элемент
		// console.log($(this)); // jquery объект
	});


	// popup с сложной анимацией
	$('#popupBTN2').click(function () {
		$('.popup-container2').fadeIn(500, dissableScroll);
		$('.popup2').animate({
			width: "200px",
			height: "300px"
		}, 2000);
		$('.popup-container2').click(function (event) {
			if (event.target == this) {
				$(this).fadeOut(2000, enableScroll);
				$('.popup2').animate({
					width: "0px",
					height: "0px"
				}, 1000);
			}
		});
			
	});

});