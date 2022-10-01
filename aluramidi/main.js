function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
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
}