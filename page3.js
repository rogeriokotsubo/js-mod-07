document.getElementById('btn-check').addEventListener('click', Visualizar);

function Visualizar() {

  const valor = document.querySelector("#id-passaro").value;

  const img = document.querySelector("#img-card");
  img.setAttribute('src', getImage(valor));

  const select = document.querySelector('#id-passaro');
  const option = select.children[select.selectedIndex];
  
  img.setAttribute('alt', option.textContent);
  document.querySelector("#h2-card").textContent=option.textContent;
} 


function getImage(id){
  let idfile='';
  switch (id){
    case 'araras':
      idfile = './assets/img/araras.webp';
      break;
    case 'canario-da-terra':
      idfile = './assets/img/canario-da-terra.webp';
      break;
    case 'soco-dorminhoco':
      idfile = './assets/img/soco-dorminhoco.webp';
      break;
    case 'coleirinha':
      idfile = './assets/img/coleirinha.webp';
      break;
    case 'joao-bobo':
      idfile = './assets/img/joao-bobo.webp';
      break;
    case 'joao-bobo2':
      idfile = './assets/img/joao-bobo2.webp';
      break;
    case 'lavadeira-mascarada':
      idfile = './assets/img/lavadeira-mascarada.webp';
      break;
    case 'maria-faceira':
      idfile = './assets/img/maria-faceira.webp';
      break;
    case 'saracura-3-potes':
      idfile = './assets/img/saracura-3-potes.webp';
      break;
    case 'tico-tico-rei':
      idfile = './assets/img/tico-tico-rei.webp';
      break;
    default:                
      idfile = 'error';
  } 
  return idfile;   
}

