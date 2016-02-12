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

				<?php
					for ($i = 1; $i <= 15; $i++) {

						$type = $i <= 10 ? 'basic' : 'complex';

						echo '<div class="icon-container ' . $type . '">';

							include('partials/icons/' . $type . '/icon' . $i . '.html');
							include('partials/tabs.php');

						echo '</div>';

					}
				?>

			</div>

		</div>

		<script src="http://code.jquery.com/jquery-1.12.0.min.js" type="text/javascript"></script>
		<script src="js/tabs.js" type="text/javascript"></script>
	</body>

</html>
