- function() {
  var $icons = document.getElementsByClassName('icon'),
      i;

  for(i = 0; i < $icons.length; i++) {
    - function(current) {
      var $icon = $icons[current];

      $icon.addEventListener('click', function() {
        $icon.classList.toggle('animate');
      });
    }(i);
  }
}();
