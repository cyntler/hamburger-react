<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <link href="http://fonts.googleapis.com/css?family=Roboto:400,500,700,900" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="css/main.css" rel="stylesheet" type="text/css">
    <?php include('partials/favicons.html'); ?>
    <title>Animated hamburger icons</title>
    <script type="text/javascript"><?php include('js/analytics.js'); ?></script>
  </head>

  <body>
    <section class="container icons">
      <?php for ($i = 1; $i <= 15; $i++) { ?>
        <div class="icon-container">
          <p>
            <strong><?php echo sprintf('%02d', $i); ?>. </strong>
            <a target="_blank" href="https://github.com/luukdv/animated-hamburger-icons/blob/master/partials/icons/icon<?php echo $i; ?>.html">HTML</a>
            <?php echo '/'; ?>
            <a target="_blank" href="https://github.com/luukdv/animated-hamburger-icons/blob/master/css/icons/icon<?php echo $i; ?>.scss">SCSS</a>
          </p>

          <?php include('partials/icons/icon' . $i . '.html'); ?>
        </div>
      <?php } ?>
    </section>

    <section class="container description">
      <div class="text">
        <h1>Animated hamburger icons</h1>

        <p>Take your pick, grab the HTML + SCSS, and add a class on click with some JS. For more information, visit <a target="_blank" href="https://github.com/luukdv/animated-hamburger-icons">GitHub</a>.</p>
      </div>
    </section>

    <script type="text/javascript"><?php include('js/icon.js'); ?></script>
  </body>
</html>
