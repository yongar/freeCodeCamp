<!DOCTYPE html>
<html>

<head>
	<link rel="stylesheet" type="text/css" href="/css/bootstrap-theme.css">
	<link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<script type="text/javascript" src="/js/bootstrap.min.js">
	</script>
	<style type="text/css" media="screen">
	.redbox {
		color: red;
		background-color: red;
	}
	</style>
	<?php
	$ua = $_SERVER['HTTP_USER_AGENT'];
	echo $ua;
    if ( stristr($_SERVER['HTTP_USER_AGENT'], "Mobile" )) {
        $DEVICE_TYPE="MOBILE";
    }

    if (isset($DEVICE_TYPE) and $DEVICE_TYPE=="MOBILE") {
        echo '<script src="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js"></script>';
    }
    ?>
	<title>External Page1 </title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body>
	<a href="" title="click here">click here</a>
	<a href="basic.html" title="don't click here">don't click here</a>
	<div id="div1">Click Here</div>
	<div id="div2">Double Click here </div>

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
	</script>
	<?php

	?>
