document.getElementById('cars').addEventListener('change', Exibir);
const img = document.querySelector("#img-card");
const select = document.querySelector('#cars');

function Exibir() {
  const valor = document.querySelector("#cars").value;
  let choose = getImage(valor);  // choose está recebendo um array
  img.setAttribute('src', choose.idfile);
  const option = select.children[select.selectedIndex];
  img.setAttribute('alt', option.textContent);
  document.querySelector("#h2-card").textContent=option.textContent;
  document.querySelector("#p-card").textContent=choose.description;
  document.querySelector("#ctn-card").style.display="flex";
}   
  
  function getImage(id){
    let idfile='';
    let description='';
    switch (id){
      case 'audi-rs6-avanti':
        idfile = './assets/img/audi-rs6-avanti.webp';
        description = 'O novo RS 6 Avant exibe o visual atualizado da gama esportiva da marca das quatro argolas, com destaque para a grade frontal estilo colmeia e os faróis redesenhados. A perua vai de 0 a 100 km/h em 3,6 segundos e de 0 a 200 km/h em 12 segundos, sendo a velocidade máxima de 250 km/h.'
        break;
      case 'buggati-centodieti':
        idfile = './assets/img/buggati-centodieti.webp';
        description = 'É um carro ultra-exclusivo, do qual serão produzidas apenas 10 unidades no mundo. Um de seus afortunados clientes é Cristiano Ronaldo, que em breve poderá adicioná-lo à sua coleção. Como lembrete, o Centodieci é um dos carros mais caros do mercado. Seu preço começa em 8 milhões de euros (R$ 42,2 milhões em conversão direta), o que é bem mais em relação ao Bugatti Chiron em que é baseado'
        break;
      case 'koenigsegg-gemera':
        idfile = './assets/img/koenigsegg-gemera.webp';
        description = 'A Koenigsegg se destaca por fazer carros que passam de 200 km/h no tempo que você leva para falar o nome deles. De tão devotada ao desempenho, a marca sueca apenas fabricava supercarros de dois lugares. São 1.700 hp, o equivalente a 1.723 cv. A marca diz que o torque equivale a 1,27 megawatt de energia';
        break;
      case 'lotus-elise':
        idfile = './assets/img/lotus-elise.webp';
        description = 'O Lotus Elise Final Edition homenageia os 25 anos de história do roadster. E ele é movido pela clássica combinação do motor 1.8 de origem Toyota com um supercharger, que eleva seus números a 240 cv e 24,9 kgfm';
        break;
      case 'mclaren-765-lt':
        idfile = './assets/img/mclaren-765-lt.webp';
        description = 'Este é o LT mais poderoso lançado até hoje, com incríveis 765 cv de potência. Apenas 765 veículos serão fabricados. 0–100 km/h leva apenas 2,8 segundos. 0–200 km/h leva apenas 7,0 segundos';
        break;
      case 'mercedes-benz-gla':
        idfile = './assets/img/mercedes-benz-gla.webp';
        description='Trata-se de um veículo alemão que agora pode ser considerado um SUV. Sua altura foi elevada em 10 cm enquanto a largura total aumentou 3cm, e seu comprimento foi reduzido em 1.4cm em relação ao modelo anterior. Eles podem ser encontrados com motores 1.3 turbo com 164 cavalos de potência, 2.0 turbo com opções de 224, 347 e 387 cavalos de potência, ou o modelo 2.0 turbo diesel com opções de 116, 150 e 190 cavalos. Apresenta suspensão independente nas quatro rodas, possui quatro amortecedores com válvula eletrônica que varia o fluxo de óleo. Na aceleração, vai do 0 ao 100 em 6,7 segundos';
        break;
      case 'pininfarina-battista':
        idfile = './assets/img/pininfarina-battista.webp';
        description = 'com impressionantes 1.899 cv de potência (1.397 quilowatts) e torque de 234,5 kgfm (2.300 Nm), o novo modelo da Automobili Pininfarina é imediatamente digno de levar o nome do fundador Battista "Pinin" Farina. Para atingir esta potência, há um motor elétrico alimentando cada roda. A Automobili Pininfarina afirma que o Battista pode atingir uma velocidade máxima de 350 km/h e acelerar de 0 a 100 km/h em menos de 2 segundos';
        break;
      case 'porshe-911':
        idfile = './assets/img/porshe-911.webp';
        description='Este é um verdadeiro veículo de corrida. É um veículo de luxo muito especial, seu motor possui 385 cavalos de potência com um torque máximo de 45,9 kgf/m, conseguindo alcançar a velocidade máxima de 293 km/h, sendo que faz de 0 a 100 em incríveis 4.2 segundos';
        break;
      case 'porshe-cayene':
        idfile = './assets/img/porshe-cayene.webp';
        description = 'Trata-se de um SUV da montadora alemã Porsche. Neste ano, entrou para a categoria das SUVs Cupê, com um design mais harmonioso. Trata-se de um dos veículos de luxo mais desejados no Brasil, além de ser considerado também um veículo esportivo de luxo; tem motor de 462 cavalos de potência e torque máximo de 71,4 kgf.m, possui câmbio automático com modo manual de 8 marchas e tração 4x4.'; 
        break;
      default:                
        idfile = 'error';
        description = 'error'
    } 
    return {idfile, description};   // retorna uma array
  }