/************************* 
  Variables
  **************************/
jQuery(function($){
  
  var browserwidth;
  var desktopwidth=1024;
  var mobilewidth=767;
  
/************************* 
 Functions
**************************/

  function getbrowserwidth(){
    browserwidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;
    return browserwidth;
  }

  function onLoadAndResize(){
    getbrowserwidth();
    homeSlider('#home-gallery');
    productSlider('#product-gallery');
      
    if(browserwidth>=mobilewidth){
      menudesplegable();
    }
  }
  
  function menudesplegable(){
    $("#menu-main ul").superfish({
      delay:100,
      animation:{opacity:'show',height:'show'},
      speed:'fast',
      autoArrows:false,
      dropShadows:true});
   }
   
   function homeSlider(idHomeGallery) {
	  $(idHomeGallery).flexslider({
	      controlNav:true,
	      animation:'fade',
	      directionNav:true,
	      slideshow:true
      });
   }
   
    function productSlider(idProductGallery) {
	   $(idProductGallery).flexslider({
	      animation:"fade",
	      controlNav:"thumbnails",
	      slideshow:false,
	      directionNav:false,
	      start:function(slider){
	        $('#product-gallery div').removeClass('loading');
	      }
	   }); 
   }

   $(window).resize(function(){
     onLoadAndResize();
   });
   
/************************* 
 Execution
**************************/
  $(document).ready(function(){

    onLoadAndResize();
    getbrowserwidth();
        
   });
  
});


