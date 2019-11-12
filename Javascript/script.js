$(document).ready(function(){
    $(window).scroll(function(){
      if($(document).scrollTop() > 90){
        $("#nav1").addClass("shrink");
      }
      else{
        $("#nav1").removeClass("shrink");            
    }
    });
});
