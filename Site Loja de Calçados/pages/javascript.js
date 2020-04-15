function clicou(){
    
    var email = window.document.querySelector('input#txtE')
    var mailValue = email.value
    
    if (mailValue.length == 0) {
        alert('[ERRO] Verifique seus dados e tente novamente.')
    } else {
        alert('O processo final da sua compra foi encaminhado para o email digitado,')
    }
}