$('.submit-e-erro .form_submit').on(function(e){
    e.preventDefault();
});

//ativar botao
function checkInputs(inputs){
    var filled = true;
    inputs.forEach(function(input){
        if (input.value === ""){
            filled = false;
        }
    });
    return filled;
}

var inputs = document.querySelectorAll("input, textarea");
var button = $(".submit-e-erro .form_submit");
button.addClass('botao-desativo');
inputs.forEach(function(input){
    input.addEventListener("keyup",function(){
        if (checkInputs(inputs)){
            button.disabled = false;
            button.removeClass('botao-desativo');
            button.addClass('botao-ativo');
        } else {
            button.disabled = true;
            button.addClass('botao-desativo');
            button.removeClass('botao-ativo');
        }
    })
})