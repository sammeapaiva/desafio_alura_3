var menuTituloCabecalho = document.querySelector('.menu-titulo-cabecalho');
var tituloCabecalho = document.querySelector('.titulo-cabecalho');
var barraOculta = document.querySelector('.barra-oculta');

menuTituloCabecalho.addEventListener('mouseover',function(){
    barraOculta.classList.add('aparece');
});

menuTituloCabecalho.addEventListener('mouseout',function(){
    barraOculta.classList.remove('aparece');
});