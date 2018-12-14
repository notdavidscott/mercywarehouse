(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// animation!! 

$(document).ready(function() {
  

  $("#toMissionContainer").animate({
   top: '20px',  
  }, 300 );


   /* Every time the window is scrolled ... */
   $(window).scroll( function(){
    
    /* Check the location of each desired element */
    $('.hideme').each( function(i){
        
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > (bottom_of_object - 70) ){
            
            $(this).animate({'opacity':'1'},1200);
                
        }
        
    }); 

    $('.hidemedelay1').each( function(i){
        
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > (bottom_of_object - 70)){
          
          $(this).animate({'opacity':'1'},1400);
              
      }
      
  }); 

  $('.hidemedelay2').each( function(i){
        
    var bottom_of_object = $(this).position().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    
    /* If the object is completely visible in the window, fade it it */
    if( bottom_of_window > (bottom_of_object - 70) ){
        
        $(this).animate({'opacity':'1'},2000);
            
    }
    
}); 


});







});


//get current year for copyright 

let currentYear = "Copyright " + (new Date()).getFullYear() + " &#169; Mercy Warehouse";
//console.log(currentYear);
document.getElementById("getFooterText").innerHTML = currentYear;


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

  // go to mission section home page on large only
  $('#toMissionContainer').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : $('#mission').position().top                      // Scroll to top of body
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