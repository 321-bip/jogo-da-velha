let jogadorX = "X";
let jogadorO = "O";
let el;
let id;
let cedulas;
let rodada = true;
let jogadas = 0;
let velha = true;
let maquina = false;
let jogador;
let img;
let idMaquina;
let indice;
let estado;
let deg; 
let divRitentin = document.getElementById("londen")
let divRitentin2 = document.getElementById("londen2")
let div1 = document.querySelector('div.londenMaquinait')
let div2 =document.querySelector('div.londenMaquinait2') 
let div3 = document.querySelector('div.londenMaquinait3') 
let div4 = document.querySelector('div.londenMaquinait4')
let anima;
let ang = 0;
let ang2 = 90;
let posisaoSorteadas = []; 
const tabuleiro = [ ["","",""],
                    ["","",""],
                    ["","",""], ];  


  function RegistrarEventos()
  {
    document.querySelectorAll('button.cedula').forEach(function(button){
          
            button.addEventListener("click",function(event){
                el = event.target;
                id = el.id;
                jogar();
          });
      });

    document.getElementById("reset").addEventListener("click",reset);
       
      document.getElementById("maquina").addEventListener("click", function(){
      document.getElementById("amigo").disabled = false;
      document.getElementById("maquina").disabled = true;
      maquina = true ;
     
     })

    document.getElementById("amigo").addEventListener("click",function(){
      reset();
      document.getElementById("maquina").disabled = false;
      document.getElementById("amigo").disabled = true;
    })
  }
           
function jogar()
 {     
      let img = rodada == true  ? "url(imagen/x.png.png)" : "url(imagen/o.png.png)";   
          jogador = rodada == true ? jogadorX : jogadorO; 

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
            posisaoSorteadas.push(id);
            cedulas = document.getElementById(id).style.backgroundImage = img;
            document.getElementById(id).disabled = true;
            rodada = !rodada;
            jogadas+=1;
            velha = true;
            testeVitoria();

            if(document.getElementById("maquina").disabled == true)
            {
              estado = false;
              sorteioNumeroAliatorio();
            }
 }

function testeVitoria()
 {
  
   if(tabuleiro[0][0] == jogadorX && tabuleiro[0][1] == jogadorX && tabuleiro[0][2] == jogadorX)
     {
       velha = false;
       rodada = true;
       alert(`Jogador ${jogadorX} ganhou`);
     }
    else if(tabuleiro[1][0] == jogadorX && tabuleiro[1][1] == jogadorX && tabuleiro[1][2] == jogadorX)
     {
       velha = false;
       rodada = true;
       alert(`Jogador ${jogadorX} ganhou`);
     }
    else if(tabuleiro[2][0] == jogadorX && tabuleiro[2][1] == jogadorX && tabuleiro[2][2] == jogadorX)
     {
       velha = false;
       rodada = true;
       alert(`Jogador ${jogadorX} ganhou`);
     }
    else if(tabuleiro[0][0] == jogadorX && tabuleiro[1][0] == jogadorX && tabuleiro[2][0] == jogadorX)
     {
        velha = false;
        rodada = true;
        alert(`Jogador ${jogadorX} ganhou`);
     }
    else if(tabuleiro[0][1] == jogadorX && tabuleiro[1][1] == jogadorX && tabuleiro[2][1] == jogadorX)
     {
       velha = false;
       rodada = true;
       alert(`Jogador ${jogadorX} ganhou`);
     }
    else if(tabuleiro[0][2] == jogadorX && tabuleiro[1][2] == jogadorX && tabuleiro[2][2] == jogadorX)
     {
       velha = false;
       rodada = true;
       alert(`Jogador ${jogadorX} ganhou`);
     }
    else if(tabuleiro[0][2] == jogadorX && tabuleiro[1][1] == jogadorX && tabuleiro[2][0] == jogadorX)
     {
       velha = false;
       rodada = true;
       alert(`Jogador ${jogadorX} ganhou`);
     }
    else if(tabuleiro[0][0] == jogadorX && tabuleiro[1][1] == jogadorX && tabuleiro[2][2] == jogadorX)
     {
       velha = false;
       rodada = true;
       alert(`Jogador ${jogadorX} ganhou`);
     }
    if(tabuleiro[0][0] == jogadorO && tabuleiro[0][1] == jogadorO && tabuleiro[0][2] == jogadorO)
     {
        velha = false;
        rodada = false;
        alert(`Jogador ${jogadorO} ganhou`);
     }
    else if(tabuleiro[1][0] == jogadorO && tabuleiro[1][1] == jogadorO && tabuleiro[1][2] == jogadorO)
     {
       velha = false;
       rodada = false;
       alert(`Jogador ${jogadorO} ganhou`);
     }
    else if(tabuleiro[2][0] == jogadorO && tabuleiro[2][1] == jogadorO && tabuleiro[2][2] == jogadorO)
     {
       velha = false;
       rodada = false;
       alert(`Jogador ${jogadorO} ganhou`);
     }
    else if(tabuleiro[0][0] == jogadorO && tabuleiro[1][0] == jogadorO && tabuleiro[2][0] == jogadorO)
     {
        velha = false;
        rodada = false;
        alert(`Jogador ${jogadorO} ganhou`);
     }
    else if(tabuleiro[0][1] == jogadorO && tabuleiro[1][1] == jogadorO && tabuleiro[2][1] == jogadorO)
     {
       velha = false;
       rodada = false;
       alert(`Jogador ${jogadorO} ganhou`);
     }
    else if(tabuleiro[0][2] == jogadorO && tabuleiro[1][2] == jogadorO && tabuleiro[2][2] == jogadorO)
     {
       velha = false;
       rodada = false;
       alert(`Jogador ${jogadorO} ganhou`);
     }
    else if(tabuleiro[0][2] == jogadorO && tabuleiro[1][1] == jogadorO && tabuleiro[2][0] == jogadorO)
     {
        velha = false;
        rodada = false;
        alert(`Jogador ${jogadorO} ganhou`);
     }
    else if(tabuleiro[0][0] == jogadorO && tabuleiro[1][1] == jogadorO && tabuleiro[2][2] == jogadorO)
     {
        velha = false;
        rodada = false;
        alert(`Jogador ${jogadorO} ganhou`);
        
     }
    else if(velha == true && jogadas == 9)
     {
        velha = false;
        rodada = true;
        alert("enpato");
     }
     if( (document.getElementById("maquina").disabled == true && velha == false) || (velha == false)  )
       {
         broqueioCedulas(true);
       }
 }

function reset()
 {
    velha == true;
    jogadas = 0;
    posisaoSorteadas = [];
    broqueioCedulas(false);

   for(let linha = 0; linha <= 2; linha++)
    {
      for(let coluna = 0; coluna <= 2; coluna++)
       {
          tabuleiro[linha][coluna] = ""
       }
    }
      
   for(let i = 0; i <= 8; i++)
    {
       cedulas = document.getElementById(i).style.backgroundImage = null;
    } 

    if(rodada == false && document.getElementById("maquina").disabled == true)
     {
      
       setTimeout(jogar,1000);
     }
     
  }

function sorteioNumeroAliatorio()
 {
     idMaquina = Math.floor( Math.random()*9);
     idMaquina.toString(); 
     id = idMaquina.toString();
     indice = posisaoSorteadas.indexOf(id); 
     jogadorMaquina();
 }

function jogadorMaquina()
 {
    if(indice != -1)
      {
         while(indice != -1 && velha == true)
         {
           sorteioNumeroAliatorio()
         }

      }else
        {
          if(maquina == true && velha == true)
           {
             if(rodada == false)
              {
                londen()
              }
             setTimeout(jogar,2400);
             broqueioCedulas(true);
             cedulas = document.getElementById(id).style.backgroundImage = img;
             maquina = false;
          }else
           {
             maquina = true;
             broqueioCedulas(false);
           }  
        }
 }

function broqueioCedulas(broqueio)
 {
   if(rodada == true || velha == true || jogadas == 0)
    {
    for( i = 0; i <= 8; i++)
     {
       document.getElementById(i).disabled = broqueio;
     }
    }
   else
    {
      document.getElementById(id).disabled = broqueio
    } 
 } 

 
function londen()
 {  
        divRitentin.style.transform='rotate('+ang+'deg)';
        divRitentin2.style.transform='rotate('+ang2+'deg)';
        div1.style.backgroundColor="black";
        div2.style.backgroundColor="black";
        div3.style.backgroundColor="black";
        div4.style.backgroundColor="black";
        ang++
        ang2++
        if(ang >360 && ang2 > 360)
         {
           ang = 0
           ang2 = 90
         }
        if(rodada == false)
         {
            anima = requestAnimationFrame(londen)
         
           if(velha == false)
              {
                 cancelAnimationFrame(anima)
                 div1.style.backgroundColor="";
                 div2.style.backgroundColor="";
                 div3.style.backgroundColor="";
                 div4.style.backgroundColor="";
             }
                
          }
       else
       {
        div1.style.backgroundColor="";
        div2.style.backgroundColor="";
        div3.style.backgroundColor="";
        div4.style.backgroundColor="";
       }   
     
} 
 
RegistrarEventos();