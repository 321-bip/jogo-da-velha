let jogadorX = "X";
let jogadorO = "O";
let el;
let id;
let cedulas;
let rodada = true;
let jogadas = 0;
let velha = true
const tabuleiro = [ ["","",""],
                    ["","",""],
                    ["","",""], ]  
/*const conbinasoesVitoria = [ [0,1,2],
                             [3,4,5],
                             [6,7,8],
                             [0,3,6],
                             [1,4,7],
                             [2,5,8],
                             [0,4,8],
                             [2,4,6], ];*/
                           
document.querySelectorAll('button.cedula').forEach(function(button){
    
      button.addEventListener("click",function(event){
          el = event.target
          id = el.id;
          jogar()
     });
 });
                  
 function jogar()
  {     
    
      let img = rodada == true  ? "url(imagen/x.png.png)" : "url(imagen/o.png.png)";   
          cedulas = document.getElementById(id).style.backgroundImage = img;
                    document.getElementById(id).disabled = true
      let jogador = rodada == true ? jogadorX : jogadorO    
              
        switch (id)
         {
           case "0":
            tabuleiro[0][0] = jogador;
           break;
           case "1":
            tabuleiro[0][1] = jogador;
           break;
           case "2":
            tabuleiro[0][2] = jogador;
           break;  
           case "3":
            tabuleiro[1][0] = jogador;
           break;
           case "4":
            tabuleiro[1][1] = jogador;
           break;
           case "5":
            tabuleiro[1][2] = jogador;
           break;
           case "6":
            tabuleiro[2][0] = jogador;
           break;
           case "7":
            tabuleiro[2][1] = jogador;
           break; 
           case "8":
            tabuleiro[2][2] = jogador;
           break;
         }
             rodada = !rodada
             jogadas+=1
            // console.log(jogadas)
            // console.table(tabuleiro)
            
                testeVitoria()
            
  }

function testeVitoria()
 {
    if(tabuleiro[0][0] == jogadorX && tabuleiro[0][1] == jogadorX && tabuleiro[0][2] == jogadorX)
     {
       velha = false
       alert(jogadorX)
     }
    else if(tabuleiro[1][0] == jogadorX && tabuleiro[1][1] == jogadorX && tabuleiro[1][2] == jogadorX)
     {
       velha = false
       alert(jogadorX)
     }
    else if(tabuleiro[2][0] == jogadorX && tabuleiro[2][1] == jogadorX && tabuleiro[2][2] == jogadorX)
     {
       velha = false
       alert(jogadorX)
     }
    else if(tabuleiro[0][0] == jogadorX && tabuleiro[1][0] == jogadorX && tabuleiro[2][0] == jogadorX)
     {
        velha = false
        alert(jogadorX)
     }
    else if(tabuleiro[0][1] == jogadorX && tabuleiro[1][1] == jogadorX && tabuleiro[2][1] == jogadorX)
     {
       velha = false
       alert(jogadorX)
     }
    else if(tabuleiro[0][2] == jogadorX && tabuleiro[1][2] == jogadorX && tabuleiro[2][2] == jogadorX)
     {
       velha = false
       alert(jogadorX)
     }
    else if(tabuleiro[0][2] == jogadorX && tabuleiro[1][1] == jogadorX && tabuleiro[2][0] == jogadorX)
     {
       velha = false
       alert(jogadorX)
     }
    else if(tabuleiro[0][0] == jogadorX && tabuleiro[1][1] == jogadorX && tabuleiro[2][2] == jogadorX)
     {
       velha = false
       alert(jogadorX)
     }
     if(tabuleiro[0][0] == jogadorO && tabuleiro[0][1] == jogadorO && tabuleiro[0][2] == jogadorO)
     {
        velha = false
        alert(jogadorO)
     }
    else if(tabuleiro[1][0] == jogadorO && tabuleiro[1][1] == jogadorO && tabuleiro[1][2] == jogadorO)
     {
                alert(jogadorO)
     }
    else if(tabuleiro[2][0] == jogadorO && tabuleiro[2][1] == jogadorO && tabuleiro[2][2] == jogadorO)
     {
       velha = false
       alert(jogadorO)
     }
    else if(tabuleiro[0][0] == jogadorO && tabuleiro[1][0] == jogadorO && tabuleiro[2][0] == jogadorO)
     {
        velha = false
        alert(jogadorO)
     }
    else if(tabuleiro[0][1] == jogadorO && tabuleiro[1][1] == jogadorO && tabuleiro[2][1] == jogadorO)
     {
       velha = false
       alert(jogadorO)
     }
    else if(tabuleiro[0][2] == jogadorO && tabuleiro[1][2] == jogadorO && tabuleiro[2][2] == jogadorO)
     {
       velha = false
       alert(jogadorO)
     }
    else if(tabuleiro[0][2] == jogadorO && tabuleiro[1][1] == jogadorO && tabuleiro[2][0] == jogadorO)
     {
        velha = false
        alert(jogadorO)
     }
    else if(tabuleiro[0][0] == jogadorO && tabuleiro[1][1] == jogadorO && tabuleiro[2][2] == jogadorO)
     {
        velha = false
        alert(jogadorO)
     }
    else if(velha == true && jogadas == 9)
     {
       alert("enpato")
     } 
 }

             
        
  