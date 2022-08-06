function criaParagrafo(p){
    var p = $('<p />');
    return p;
}

function limpaMensagemNaTela(field){
    var imgErro = $(field).parent().find('.mensagem-erro .erro-img')
    imgErro.fadeIn('fast');

    $(field).parent().find('.texto-erro p').fadeOut(5000);

    setTimeout(function(){
        $(field).parent().find('.texto-erro p').remove();
    },5000);

    let interval = setInterval(() => {
        if($(field).parent().find('.texto-erro').is(':empty')){
            imgErro.fadeOut(250);
            clearInterval(interval);
        }
    },1000);
}

var erro = false;

function geraMensagemErro(field, nomeErro, mensagemErro){
    erro = true;
    var mensagemNaTela = $(field).parent().find('.mensagem-erro');
    mensagemNaTela.addClass('aparece-com-flex');
    mensagemNaTela.fadeIn('fast');

    var textoErro = criaParagrafo(nomeErro);
    textoErro.text(mensagemErro);

    var container = $(field).parent().find('.mensagem-erro .texto-erro');
    container.append(textoErro);

    limpaMensagemNaTela(field);
}

function corInputErro(field){
    if(erro == true){
        $(field).addClass('cor-input-erro');
    } else if (erro==false){
        $(field).removeClass('cor-input-erro');
    }
}