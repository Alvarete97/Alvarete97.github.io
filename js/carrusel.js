
var current = 0;
var imagenes = new Array();

$(document).ready(function() {
	var numImages = 6;
	if (numImages <= 3) {
		$('.flecha_dch').css('display', 'none');
		$('.flecha_izq').css('display', 'none');
	}

	$('.flecha_izq').on('click',function() {
		if (current > 0) {
			current = current - 1;
		} else {
			current = numImages - 3;
		}
		$(".carrusel").animate({"left": -($('#product_'+current).position().left)}, 600);
		return false;
	});

	$('.flecha_dch').on('click', function() {
		if (numImages > current + 3) {
			current = current+1;
		} else {
			current = 0;
		}
		$(".carrusel").animate({"left": -($('#product_'+current).position().left)}, 600);
		return false;
	}); 
});
