<!DOCTYPE html>
<html lang="en">

	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
		<link href="http://fonts.googleapis.com/css?family=Palanquin:400" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="css/main.css" rel="stylesheet" type="text/css" />
		<title>Animated menu icons</title>
	</head>

	<body>
		<div class="container">

			<h1>Animated menu icons &nbsp;&#8729;&nbsp; take your pick.</h1>

			<div class="icon_container">

				<?php for( $i = 1; $i <= 10; $i++ ) { ?>

					<div class="icon icon<?php echo $i; ?>">
						<div class="line line1"></div>
						<div class="line line2"></div>
						<div class="line line3"></div>
					</div>

				<?php } ?>

				<?php for( $i = 11; $i <= 15; $i++ ) { ?>

					<div class="icon icon<?php echo $i; ?>">
						<div class="line_outer line1">
							<div class="line_inner line_inner1"></div>
						</div>
						<div class="line_outer line2">
							<div class="line_inner line_inner2"></div>
						</div>
						<div class="line_outer line3">
							<div class="line_inner line_inner3"></div>
						</div>
					</div>

				<?php } ?>

			</div>

		</div>
		
		<script src="http://code.jquery.com/jquery-1.12.0.min.js" type="text/javascript"></script>
		<script src="js/main.js" type="text/javascript"></script>
	</body>

</html>