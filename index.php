<!DOCTYPE html>
<html lang="nl">

	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
		<link href="http://fonts.googleapis.com/css?family=Palanquin:300" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="style.css" rel="stylesheet" type="text/css" />
		<title>Animated menu icons</title>
	</head>

	<body>
		<div id="container">
			<h1>Animated menu icons &nbsp;&mdash;&nbsp; take your pick.</h1>

			<?php
			for( $i = 0; $i <= 10; $i++ ) {
			?>

				<div class="icon" id="icon<?php echo $i; ?>">
					<div class="line" id="line1"></div>
					<div class="line" id="line2"></div>
					<div class="line" id="line3"></div>
				</div>

			<?php
			}
			?>

			<?php
			for( $i = 11; $i <= 15; $i++ ) {
			?>

				<div class="icon" id="icon<?php echo $i; ?>">
					<div class="line" id="line1">
						<div class="line_inner" id="line_inner1"></div>
					</div>
					<div class="line" id="line2">
						<div class="line_inner" id="line_inner2"></div>
					</div>
					<div class="line" id="line3">
						<div class="line_inner" id="line_inner3"></div>
					</div>
				</div>

			<?php
			}
			?>

		</div>
		<script src="http://code.jquery.com/jquery-1.11.2.min.js" type="text/javascript"></script>
		<script src="script.js" type="text/javascript"></script>
	</body>

</html>