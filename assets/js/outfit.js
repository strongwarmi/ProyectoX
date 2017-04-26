function OcultarModal(){
  Modal.style.display="none";
  //DivOutfit1.style.border="1px solid #ddd";
};
var spanX = document.getElementsByClassName("Close")[0];
spanX.addEventListener('click',OcultarModal);
//-------------------
var listaimages = document.getElementsByClassName("Mask");
var mostrarModal=function(){
  return this.src;
}
