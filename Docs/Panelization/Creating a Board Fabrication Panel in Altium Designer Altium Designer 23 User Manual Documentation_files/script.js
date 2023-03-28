jQuery(document).ready(function(){
  jQuery('div#box_highlighting_switcher a').click(function() {
    jQuery('.custom_box_highlighting').toggleClass('custom_box_highlighting_off');
    return false;
  });
});


