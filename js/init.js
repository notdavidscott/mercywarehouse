(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


//actual return to top jquery
$('#return-to-top').click(function() {      // button click
  $('body,html').animate({
      scrollTop : 0                       // Scroll to albums
  }, 500);
});

$(function() {
  $('body').scrollTop(0);
});


  //go to video home page

  $('#toVideoContainer').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : $('#videoContainer').position().top                      // Scroll to top of body
    }, 600);
  });

  //go to hours contact page  

  $('#toHoursContainer').click(function() {      // button click
    $('body,html').animate({
        scrollTop : $('#hours').position({
        }).top                       // Scroll to story
    }, 600);
  });

   //go to hours contact page  

   $('#toHowToDonate').click(function() {      // button click
    $('body,html').animate({
        scrollTop : $('#donate').position({
        }).top                       // Scroll to story
    }, 600);
  });


//floating scroll to top botton all pages 
//this automatically hides on document load
$(document).ready(function() {
  $('.fixed-action-btn').hide();
  $('.fixed-action-btn-down').hide();
});

//once you've scrolled 600px, the div will fade in, if you scroll less than 600px it will fade again
$(window).scroll(function() {
   if ($(this).scrollTop() < 600)
      {
          $('.fixed-action-btn').fadeOut();
      } else {
          $('.fixed-action-btn').fadeIn();
      }
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'left',
    hoverEnabled: false
  });
});