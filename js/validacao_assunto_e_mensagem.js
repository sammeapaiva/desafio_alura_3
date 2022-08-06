function validacaoTexto(field,nomeErro,mensagemErro){
    const texto = field.value;

    if((texto.length >=3) &&
       (texto.length <= 50)){
        $(field).parent().find('.mensagem-erro').removeClass('aparece-com-flex');
        erro = false;
    } else geraMensagemErro(field, nomeErro, mensagemErro);
}