function validacaoNome(field, nomeErro, mensagemErro){
    let nome = field.value;

    if((nome.length >=1) &&
       (nome.length <= 50)){
        erro = false;
    } else geraMensagemErro(field, nomeErro,mensagemErro);
}