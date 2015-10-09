/*-----------------------------------top-fixed header----------------------------------*/

(function ($) {
  Drupal.behaviors.yourBehaviorName = {
    attach: function (context, settings) {
  var fixed = false;

$(document).scroll(function() {
    if( $(this).scrollTop() >= 100 ) {
        if( !fixed ) {
            fixed = true;
             $('#navbar').wrapAll('<div class="nav-wrapper"></div>')
            $('#navbar').css({ position: "fixed",   zIndex:99 , left: "0px", right: "0px", top: "0px" ,transition:'all 0.4s ease-in-out 0s'});
            // $("#top_menu #block-menu-menu-top-menu li").eq(0).prependTo('#navbar .menu li.first');
           
            
           
           }

    } else {
        if( fixed ) {
            fixed = false;
            $('#navbar').css({position:'static'  ,transition:'all 0s ease-in-out 0s' , borderTop:'none' , borderBottom:'none'});
            
           
        }
    }

    
});

/////////////////////
 }
  };})(jQuery);

/*-------------------------------------end of fixed header-------------------------------*/