jQuery(document).ready(function ($) {
  // For Play Pause Button
  jQuery(".play_btn").click(function () {
    jQuery(this).toggleClass("pause_btn");
  });

  jQuery(".menu_toggle").on("click", function () {
    jQuery(".theme_header").toggleClass("toggle_menu");
  });
});
