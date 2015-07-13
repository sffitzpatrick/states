jQuery(document).ready( function() {
  
  jQuery('#map svg path').click( function() {
    var text = jQuery(this).attr('id');
    jQuery('#info').text(text);
  });
  
});