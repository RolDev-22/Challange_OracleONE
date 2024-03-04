let textAreaInp = document.getElementById("textAreaInput");
let textAreaOut = document.getElementById("textAreaOutput");

let buttonEncriptar = document.getElementById("buttonEncriptar");

let containerText =  document.getElementById('textosOutput');

let buttonCopy =  document.getElementById('buttonCopiar');

textAreaInp.style.cssText = `height: ${textAreaInp.scrollHeight}px; overflow-y: hidden`;
textAreaInp.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = `${this.scrollHeight}px`;
});

textAreaOut.style.cssText = `height: ${textAreaOut.scrollHeight}px; overflow-y: hidden`;
textAreaOut.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = `${this.scrollHeight}px`;
});

function pasarValor() {
  let textoInp = textAreaInp.value;

  if (textAreaInp.scrollHeight > 0) {
    textAreaOut.style.height = `${textAreaInp.scrollHeight}px`;
    containerText.style.display = "none";
    textAreaOut.innerText = textoInp;
    buttonCopy.style.display = "flex";
  }else{
    textAreaOut.style.height = "initial";
    containerText.style.display = "initial";
    buttonCopy.style.display = "initial";
  }
}
