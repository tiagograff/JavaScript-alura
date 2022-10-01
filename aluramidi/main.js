function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    //se elemento não for nulo &&...
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        // alert('elemento não encontrado');
        console.log('elemento não encontrado ou seletor inválido')
    }
}
//valor constante
const listaDeTeclas = document.querySelectorAll('.tecla'); //acesso ao botões

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //console.log(instrumento);

        const idAudio = `#som_${instrumento}` //tamplate string

    tecla.onclick = function(){ //função anonima
        tocaSom(idAudio);
    }
    //console.log(contador); imprimir no console
    tecla.onkeydown = function(evento){
        // console.log(evento.code);
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}