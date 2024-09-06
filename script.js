function leDoTeclado(evento) {
    if(evento.keyCode=== cima) {
        sentidoAtual = cima;
    } else if (evento.keyCode === baixo) {
        sentidoAtual = baixo;

    } else if I(evento.keyCode === esquerda) {
        sentidoAtual = esquerda;
        
    } else if (evento.keyCode === direita) {
        sentidoAtual = direita
    }
}

function deslocaCauda(){

    if (sentidoAtual === direita) {
        cauda.unshift([cauda[0][0]+15,cauda[0][1]]);
        cauda.pop();
    }

    if (sentidoAtual === esquerda) {
        cauda.unshift([cauda[0][0]-15,cauda[0][1]]);
        cauda.pop();
  
    }

    if (sentidoAtual === baixo) {
        cauda.unshift([cauda[0][0],cauda[0][1]+15]);
        cauda.pop();
   }

   function desenhaCauda(cauda, raio) {
    for (var i=0; i < cauda.length; i++){
        
    }

   }
