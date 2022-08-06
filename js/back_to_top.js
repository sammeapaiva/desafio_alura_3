var btn = $(".back-to-top");

//aparece / desaparece
$(window).scroll(function() {
    if($(window).scrollTop() > $(".skills").height()-50){
        btn.addClass('aparece');
    } else {
        btn.removeClass('aparece');
    }
 });

//função de voltar pra cima
btn.click(function() {
  $('html, body').animate({scrollTop:0}, 'slow');
});