// $(function() {
//     alert("HELLO");
// });

// scroll effect
$('a[href*="#"]:not([href="#"])').click(function(e) {
  e.preventDefault();
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
    || location.hostname == this.hostname) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     if (target.length) {
       $('html,body').animate({
           scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

$(document).on('ready', function(){
  prettyPrint();
  $('.highlight').mouseenter(function(){
    var text = $(this).data('text');
    $('#code-display p').text(text);
    window.console.log(text);
  });
  $('.highlight').mouseleave(function(){
    $('#code-display p').text('Hover over code snippet on the left to learn more.');
  });
});