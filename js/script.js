document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)

function validaFormulario(){
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var contato = document.getElementById("contato").value;
  contato = contato.toString();
  var mensagem = document.getElementById("mensagem").value;

  if( nome != "" && email != "" && contato != "" && mensagem != ""){
    if(contato.length > 11){
      alert("Insira um número de telefone válido. Ex:21983677495");
    }else {
      const UrlFetch = 'http://192.168.0.6:3333/enviar-email';
      fetch(UrlFetch, { 
        headers:  { 
          'Content-Type' : 'application/json'
        }, 
        method: 'post',
        body: JSON.stringify({
          nome: nome,
          email: email,
          contato: contato,
          mensagem: mensagem
        })
      })
      .then(function(resposta) {
        return resposta.json();
      })
      .then(function(resposta) {
        if (resposta.wasSent) {
          alert("E-mail enviado com sucesso");
        } else {
          alert("Erro ao enviar e-mail");
        }
      })
    }
  }else{
    alert("Por favor preencher todos os campos para o envio")
  }
  
}

