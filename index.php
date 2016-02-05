<!DOCTYPE html>
<html lang="en">

	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
		<link href="http://fonts.googleapis.com/css?family=Rubik:300,400,500" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="css/main.css" rel="stylesheet" type="text/css" />
		<title>Animated menu icons</title>
	</head>

	<body>
		<div class="container">

			<h1>Animated menu icons &nbsp;&bull;&nbsp; take your pick.</h1>

			<div class="icons-container">

				<?php for ($i = 1; $i <= 10; $i++) { ?>

					<div class="icon-container">

						<div class="icon icon<?php echo $i; ?>">
							<div class="line line1"></div>
							<div class="line line2"></div>
							<div class="line line3"></div>
						</div>

						<div class="tabs-container">

							<div class="tabs">
								<div class="tab-title active" data-tab=".tab-js">JS</div>
								<div class="tab-title" data-tab=".tab-css">SCSS</div>
								<div class="tab-title" data-tab=".tab-html">HTML</div>
								<div class="tab-content tab-js active">
									<a target="_blank" href="https://github.com/luukdv/animated-menu-icons/blob/master/js/main.js">JavaScript</a>
								</div>
								<div class="tab-content tab-css">
									<a target="_blank" href="https://github.com/luukdv/animated-menu-icons/blob/master/css/icons/icon<?php echo $i; ?>.scss">SCSS</a>
								</div>
								<div class="tab-content tab-html">
									
								</div>
							</div>

						</div>

					</div>

				<?php } for ($i = 11; $i <= 15; $i++) { ?>

					<div class="icon-container">

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

					</div>

				<?php } ?>

			</div>

		</div>

		<script src="http://code.jquery.com/jquery-1.12.0.min.js" type="text/javascript"></script>
		<script src="js/icon.js" type="text/javascript"></script>
		<script src="js/tabs.js" type="text/javascript"></script>
	</body>

</html>