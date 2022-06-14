document.querySelector("#btn-send").addEventListener("click", Enviar);
document.querySelector("#btn-clear").addEventListener("click", Limpar);
//document.querySelector("#mensagem").addEventListener("keyup", Validar);
document.addEventListener("keydown", Validar);
const chat=document.querySelector("#chat");
const mensagem=document.querySelector("#mensagem");
mensagem.focus();

function Enviar() {
  const txtMsg= mensagem.value;
  if (txtMsg == "") {
    } else {
        const today = new Date();
        const time = addZeroes(today.getHours(), 2) + ":" + addZeroes(today.getMinutes(),2) + ":" + addZeroes(today.getSeconds(),2);
        chat.innerHTML += `[`+time+`] Você: ` + txtMsg + `\n\n`;
        mensagem.value = "";
  }
  chat.scrollTop=chat.scrollHeight;
}

function Validar(e) {
  if(e.key == "Enter") {
    e.preventDefault();
    console.log(e.key);
    Enviar();
  }
}

function Limpar() {
  chat.innerHTML = "";
  mensagem.value = "";
  scrollY=0;
  mensagem.focus();
}

function addZeroes(num, len) {
  let numWithZeroes = String(num);
  let counter = numWithZeroes.length;
    
  while(counter < len) {
    numWithZeroes = "0" + numWithZeroes;
    counter++;
  }

  return numWithZeroes;
}