let textAreaIn = document.getElementById('textAreaInput');

textAreaIn.style.cssText = `height: ${textAreaIn.scrollHeight}px; overflow-y: hidden`;


textAreaIn.addEventListener("input", function(){
    this.style.height = "auto";
    this.style.height = `${this.scrollHeight}px`;
});
