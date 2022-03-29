
function listaDeElementos() {

  let campo = document.querySelectorAll('button.cedula');
  const listaCedulas = [];

  campo.forEach((elemento) => {
    listaCedulas.push(elemento);
  })

  return [listaCedulas];
}

function cedulaSelecionada() {
  const [listaCedulas] = listaDeElementos()
  const tabuleiro = [["", "", ""],
  ["", "", ""],
  ["", "", ""],]
  listaCedulas.forEach((elemento) => {

    elemento.addEventListener("click", (event) => {
      let cedulaCricada = event.target.id;

      marcaCedulas(cedulaCricada, tabuleiro);
      testeVitoria(tabuleiro)

    })

  })

}

function jogadores() {

  const jogador1 = {
    nome: "x",
    img: "url(imagen/x.png.png)",

  }

  const jogador2 = {
    nome: "O",
    img: "url(imagen/o.png.png)",

  }
  return { jogador1, jogador2 }

}

 function jogar() {
  let { jogador1, jogador2 } = jogadores();
  let rodada = true;
  let jogador;
      jogador = rodada == true ? jogador1 : jogador2;
     return { jogador, rodada };
}



function marcaCedulas(id, tabuleiro) {
  let { jogador, rodada } = jogar(); 
  switch (id) {
    case "0":
      tabuleiro[0][0] = jogador.nome
      break;
    case "1":
      tabuleiro[0][1] = jogador.nome
      break;
    case "2":
      tabuleiro[0][2] = jogador.nome
      break;
    case "3":
      tabuleiro[1][0] = jogador.nome
      break;
    case "4":
      tabuleiro[1][1] = jogador.nome
      break;
    case "5":
      tabuleiro[1][2] = jogador.nome
      break;
    case "6":
      tabuleiro[2][0] = jogador.nome
      break;
    case "7":
      tabuleiro[2][1] = jogador.nome
      break;
    case "8":
      tabuleiro[2][2] = jogador.nome
      break;
  }
    rodada = !rodada 
    console.log(rodada)
    cedulas = document.getElementById(id).style.backgroundImage = jogador.img
    console.table(tabuleiro)

}

function testeVitoria(tabuleiro) {
  
}

function jogadaContraAmigo() {

}

function jogadaContraMaquina() {

}

function limparTabela() {

}





function man() {

  cedulaSelecionada()
}
man()