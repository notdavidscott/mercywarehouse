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


//actual return to top jquery
$('#return-to-top').click(function() {      // button click
  $('body,html').animate({
      scrollTop : 0                       
  }, 500);
});

$(function() {
  $('body').scrollTop(0);
});


  //go to video home page

  $('#toVideoContainer').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : $('#videoContainer').position().top-100                      
    }, 600);
  });

  // go to mission section home page on large only
  $('#toMissionContainer').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : $('#mission').position().top-120                  
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


//get current year for copyright 

let currentYear = "Copyright " + (new Date()).getFullYear() + " &#169; Mercy Warehouse";
//console.log(currentYear);
document.getElementById("getFooterText").innerHTML = currentYear;

var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;

//var curHour = 6;

const isOpen = () => {

  //core function +
  if (
    //mon thru friday hours 
    ( dayOfWeek === "Monday" ||
      dayOfWeek === "Tuesday" ||
      dayOfWeek === "Wednesday" ||
      dayOfWeek === "Thursday" ||
      dayOfWeek === "Friday" 
    ) && ( 
          //close time (less than 8pm)            //open time (more than 10am)
    ( curHour < 8 && curMeridiem === "PM") || (curHour >= 10 && curMeridiem === "AM"))) {
      return "the mercy warehouse is open now!";
      //console.log("We are open (weekday)");
      } else if (
        //sat hours                  //close time (less than 8pm)          //open time (more than 10am)                       
     ( dayOfWeek == "Saturday" && ((curHour > 9 && curMeridiem === "PM") || (curHour >= 9 && curMeridiem === "AM")) )) {
        return "the mercy warehouse is open now!";
       // console.log("We are open (Saturday)");
      } else if (
        //sun hours                   //close time (less than 8pm)          //open time (more than 10am)
     ( dayOfWeek == "Sunday" && ((curHour < 8 && curMeridiem === "PM") || (curHour == 12 && curMeridiem === "AM")) )) { 
      //  console.log("We are open (Sunday)");
        return "the mercy warehouse is open now";
      } else {
        return null;
        //console.log("We are closed");
      }

}

 console.log("It is currently " + dayOfWeek + " at the current hour of " + (curHour + curMeridiem)); 

let isOpenResult = isOpen();
//console.log(currentYear);
document.getElementById("isOpenTextResult").innerHTML = isOpenResult;

//end isOpen function 



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'left',
    hoverEnabled: false
  });
});