<?php
include_once 'vendor/mobiledetect/mobiledetectlib/Mobile_Detect.php';

$detect = new Mobile_Detect;
// Jquery first
echo '	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>';
// then Jquery Mobile if required.

if ($detect->isMobile()){
	 echo '<script src="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js"></script>';
	 echo '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.min.js"></script>';
}

// Redirect the user to your mobile version of the site.
// if($detect->isMobile()){
//     header('http://m.yoursite.com', true, 301);
// }
// example
// https://github.com/serbanghita/Mobile-Detect/wiki/Code-examples

?>
<!DOCTYPE html>
<html>

<head>
	<link rel="stylesheet" type="text/css" href="/css/bootstrap-theme.css">
	<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">

	<script type="text/javascript" src="/js/bootstrap.min.js">
	</script>
	<style type="text/css" media="screen">
	.redbox {
		color: red;
		background-color: red;
	}
	</style>

	<title>External Page1 </title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body>
	<a href="" title="click here">click here</a>
	<a href="basic.html" title="don't click here">don't click here</a>
	<div id="div1">Click Here</div>
	<div id="div2">Double Click here </div>
<div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        ...
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
</div>
	<script>
	$("a:first").attr("href", "http://www.yongar.xyz");
	$("a:first").attr("target", "_blank");
	$("a:first").addClass('redbox');
	var my_class = $("div").attr("class");
	$("#div1").click(function(event) {
		alert("hello");
	});
	$("#div2").dblclick(function(){
		alert("hello again");
	});
	$("#div1, #div2").hover(function() {
		$(this).addClass("text-primary");
		$(this).removeClass('text-muted');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).removeClass('text-primary');
		$(this).addClass('text-muted');
	});
	var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: '.swiper-pagination',

    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // And if we need scrollbar
    scrollbar: '.swiper-scrollbar',
  })
	</script>
	<?php

	?>
