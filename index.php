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
			<div id="wrapper">
				<h1>Animated menu icons &nbsp;&mdash;&nbsp; take your pick.</h1>
				<h2><span>28 x 24 size, 3px lines, without circle</span></h2>

				<div class="icon_container">

					<?php
					for( $i = 1; $i <= 10; $i++ ) {
					?>

						<div class="icon type1 icon<?php echo $i; ?>">
							<div class="line" id="line1"></div>
							<div class="line" id="line2"></div>
							<div class="line" id="line3"></div>
						</div>

					<?php
					}

					for( $i = 11; $i <= 15; $i++ ) {
					?>

						<div class="icon type1 icon<?php echo $i; ?>">
							<div class="line_outer" id="line1">
								<div class="line_inner" id="line_inner1"></div>
							</div>
							<div class="line_outer" id="line2">
								<div class="line_inner" id="line_inner2"></div>
							</div>
							<div class="line_outer" id="line3">
								<div class="line_inner" id="line_inner3"></div>
							</div>
						</div>

					<?php
					}
					?>

				</div>

				<h2><span>18 x 16 size, 2px lines, with circle</span></h2>

				<div class="icon_container type2">

					<?php
					for( $i = 1; $i <= 10; $i++ ) {
					?>

						<div class="icon type2 icon<?php echo $i; ?>">
							<div class="line" id="line1"></div>
							<div class="line" id="line2"></div>
							<div class="line" id="line3"></div>
						</div>

					<?php
					}

					for( $i = 11; $i <= 15; $i++ ) {
					?>

						<div class="icon type2 icon<?php echo $i; ?>">
							<div class="line_outer" id="line1">
								<div class="line_inner" id="line_inner1"></div>
							</div>
							<div class="line_outer" id="line2">
								<div class="line_inner" id="line_inner2"></div>
							</div>
							<div class="line_outer" id="line3">
								<div class="line_inner" id="line_inner3"></div>
							</div>
						</div>

					<?php
					}
					?>

				</div>

			</div>
		</div>
		<script src="http://code.jquery.com/jquery-1.11.2.min.js" type="text/javascript"></script>
		<script src="script.js" type="text/javascript"></script>
	</body>

</html>