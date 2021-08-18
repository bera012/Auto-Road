$(document).ready(function(){
    $('#book_pick_date, #book_off_date').datepicker({});
    $(window).scroll(function(){
        $('.bolum2, .bolum3, .bolum4, .bolum5, .bolum6, .bolum7, footer').each(function(){
            var ustkenar = $(this).offset().top;
            var pencerealt = $(window).scrollTop()+$(window).height();
            if(pencerealt > ustkenar){
              $(this).animate({'opacity' : '1'},1000)  
            };
        });
    });
});