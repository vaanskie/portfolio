$(document).ready(function (e) {
	//e.preventDefault();
	$(".cross1").hide();
	$(".menu").hide();
	$(".hamburger").click(function () {
		$(".menu").animate({
			width: "toggle"
		});
		$(".hamburger").hide();
		$(".cross1").show();
	});
	$(".cross1").click(function () {
		$(".menu").animate({
			width: "toggle"
		});
		$(".cross1").hide();
		$(".hamburger").show();
	});
	$(".cross2").hide();
	$(".menu_pin").hide();
	$(".pin").click(function () {
		$(".menu_pin").animate({
			width: "toggle"
		});
		$(".pin").hide();
		$(".cross2").show();
	});
	$(".cross2").click(function () {
		$(".menu_pin").animate({
			width: "toggle"
		});
		$(".cross2").hide();
		$(".pin").show();
	});
});