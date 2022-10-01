function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}
//valor constante
const listaDeTeclas = document.querySelectorAll('.tecla'); //acesso ao botões

listaDeTeclas[0].onclick = tocaSomPom;