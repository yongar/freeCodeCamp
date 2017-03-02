<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
<script src="scripts/jquery.js"></script>

<script type="text/javascript">
	function myHandler(text){
		$("UL").append("<LI>hello " + text+"</LI>" );
	}
	$(document).ready(function(){
		$("button").click(function(){
			$("UL").load("date.php", myHandler)
		});
		$("input").focus(function() {
			$(this).css("","");
		})

	});
	$.ajax({url: "date.php", success: myHandler});

</script>
<div class="container-fluid">
<button onclick="myHandler();">Click to add more time</button>
	<h1 class="jumbotron">Hello World</h1>
	<UL>bDate List
	</UL>
</div>
<div class="input-group"><span class="input-group-addon">Name</span>
<input type="text" name="name" placeholder="Enter Your Name" class="form-control"></div>

