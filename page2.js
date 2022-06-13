const cepInputObj = document.querySelector("#cep");
let cep=cepInputObj.value;
cepInputObj.addEventListener('keyup', limita8);
cepInputObj.addEventListener('keydown', validateBackSpace);
cepInputObj.addEventListener('input', validateInput);

function validateBackSpace(e) {
  if (e.key==='Backspace'){
    const lenCEP = cep.length 
    if (lenCEP > 0){
      cep = cep.substr(0, lenCEP-1);
    }    
  }
}

function validateInput(e){
  switch (e.data){
    case '0':  // 0 
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':   //9
      break;
    default:
      cepInputObj.value = cep;
  }    
}

function limita8(e){
  const newcep = cepInputObj.value.replace('-','');
  const lenCEP = newcep.length;
  if (lenCEP > 8){
    cepInputObj.value = cep;
  } else 
  if (lenCEP>5) {
    cepInputObj.value = newcep.substr(0,5)+'-'+newcep.substr(5);        
  } 
  cep=cepInputObj.value;
}

function validateInputSemNecessidadeKeyup(e){
  switch (e.data){
    case '0':  // 0 
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':   //9
      const newcep = cepInputObj.value.replace('-','');
      const lenCEP = newcep.length;
      if (lenCEP > 8){
        cepInputObj.value = cep;
      } else 
      if (lenCEP>5) {
        cepInputObj.value = newcep.substr(0,5)+'-'+newcep.substr(5);        
      } 
      cep = cepInputObj.value;
      break;
    default:
      cepInputObj.value = cep;
  }    
}
