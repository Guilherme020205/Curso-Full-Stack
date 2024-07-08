var area = document.getElementById('area');

function entrar(){
    var nome = prompt('Digite seu nome');

    if(nome === " " || nome === null){
        area.innerHTML = "Clique no botão"
    }else{
        area.innerHTML = "Bem-vindo " + nome + " ";
        let botaoSair = document.createElement('button');
        botaoSair.innerText = 'Sair da conta'; 
        botaoSair.onclick = sair;

        area.appendChild(botaoSair);
        
    }

}

function sair() {
    area.innerHTML = "Voce saiuu"
}