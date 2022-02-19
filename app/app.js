
const url = "https://api.api-futebol.com.br/v1/campeonatos/168/tabela"


 let headers = new Headers();

 headers.append('Athorization', 'Bearer test_6ed08d31465ad97311bacd734d8099')
 console.log(headers);

const options = {
 headers: {'Authorization' : 'Bearer test_6ed08d31465ad97311bacd734d8099'},
}


/////////////////////////////////////////////////////////

function buscarPartidas() {
  fetch(url, options)
 .then(resposta => {
   resposta.json()
    .then(obj => {
    mostrarPartidas(obj);
  })
})
.catch()
}


function mostrarPartidas(campeonatos) {
  console.log(campeonatos, "Isso é partidas para mobile")

 for (i=0; i<campeonatos.length; i++){

   var nome  = document.createElement('h3');
   nome.innerText = campeonatos[i].time.nome_popular
   nome.style.marginLeft="-80%"
   nome.style.marginTop='50px'

   var pos = document.createElement('h2');
   pos.innerText = campeonatos[i].pontos
   pos.style.marginTop='-50px'
   pos.style.height='135px'
   pos.style.marginLeft="-50%"

   var gols = document.createElement('h2');
   gols.innerText = campeonatos[i].empates
   gols.style.marginLeft="-25%"
   gols.style.marginTop='-63px'

   var derrota = document.createElement('h2');
   derrota.innerText = campeonatos[i].derrotas
   derrota.style.marginTop='-25px'

   var saldo = document.createElement('h2')
   saldo.innerText = campeonatos[i].gols_pro
   saldo.style.marginTop='-30px'
   saldo.style.marginLeft='25%'

   var negativo = document.createElement('h2');
   negativo.innerText=  campeonatos[i].gols_contra
   negativo.style.marginTop='-30px'
   negativo.style.marginLeft='48%'

   var saldogol = document.createElement('h2');
   saldogol.innerText = campeonatos[i].saldo_gols
   saldogol.style.marginTop='-30px'
   saldogol.style.marginLeft='70%'

   var jogo = document.createElement('h2');
   jogo.innerText=campeonatos[i].jogos
   jogo.style.marginTop='-30px'
   jogo.style.marginLeft='90%'
   
   var ponto = document.createElement('h2');
   ponto.innerText = campeonatos[i].posicao
   ponto.style.marginLeft="-90%"
   ponto.style.marginTop='-100px'


   var escudo = document.createElement('img');
   escudo.setAttribute('src', campeonatos[i].time.escudo)
   escudo.style.width="50px"
   escudo.style.marginLeft="-80%"
   escudo.style.marginTop='20px'


    document.getElementById('partidasAoVivo').append(nome,escudo,pos,ponto,gols,derrota,saldo,negativo,saldogol,jogo);
 }
}

document.write(buscarPartidas());

//////////////////////////////////////////////////////////


function buscarPartidas2() {
  fetch(url, options)
 .then(resposta => {
   resposta.json()
    .then(obj => {
    mostrarPartidas2(obj);
  })
})
.catch()
}

function mostrarPartidas2(partidas) {
  console.log(partidas, "Isso é partidas para pc")

 for (i=0; i<partidas.length; i++){

    var placar = document.createElement('h5');
   placar.innerText = partidas[i].placar;
   placar.style.fontSize = '15px'
   placar.style.color = "red"
   placar.style.width = "200px"
   placar.style.marginLeft = "170px"
   placar.style.marginTop = "10px"

    var escudoMandante = document.createElement('img');
    escudoMandante.style.width = "50px"
    escudoMandante.style.marginLeft = "10px"
    escudoMandante.style.marginTop = "-100px"
    escudoMandante.setAttribute('src', partidas[i].time_mandante.escudo)

    var escudovisitante = document.createElement('img');
    escudovisitante.style.marginLeft = "200px"
    escudovisitante.style.marginTop = "-70px"
    escudovisitante.setAttribute('src',partidas[i].time_visitante.escudo)
    escudovisitante.style.width = "50px"

    var horas = document.createElement('h5'); 
    horas.innerText = partidas[i].hora_realizacao

    var datas = document.createElement('h5');
    datas.innerText = partidas[i].data_realizacao
    document.getElementById('partidasAoVivo2').append(placar,escudoMandante,escudovisitante,datas,horas);
 }
}

document.write(buscarPartidas2());


///////////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////////////



const imgs = document.getElementById("img");
const img1 = document.querySelectorAll("#img img");

let idx1 = 0;

function carrossel (){
  idx1++

  if(idx1 > img1.length - 1){
    idx1 = 0;
  }

  imgs.style.transform = `translateX(${-idx1 * 865}px)`;

}

setInterval(carrossel, 5000);
/////////////////////////////////////////////////////////////////////////////////


const imgss = document.getElementById("pcimg");
const img2 = document.querySelectorAll("#pcimg img");

let idx2 = 0;

function carrosseu (){
  idx2++

  if(idx2 > img2.length - 1){
    idx2 = 0;
  }

  imgss.style.transform = `translateX(${-idx2 * 350}px)`;

}

setInterval(carrosseu, 5000);

