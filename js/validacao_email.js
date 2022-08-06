function validacaoEmail(field, nomeErro, mensagemErro) {
    const emailLabel = $('#contato > div > form > div:nth-child(2) > label');
    
    //comportamento do navegador de considerar input vazio em email errado
    if (field.value != "") {
        emailLabel.addClass('forca-input-label');
    } else {
        emailLabel.removeClass('forca-input-label');
    }

    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {

        erro = false;
    } else geraMensagemErro(field,nomeErro,mensagemErro);
}