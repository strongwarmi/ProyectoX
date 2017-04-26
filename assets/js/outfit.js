//var modal =  document.getElementById('modal01');

window.addEventListener('load',OcultarModal);

//var img = document.getElementById('Outfit1');
var spanX = document.getElementsByClassName("Close")[0];

function OcultarModal(){
  Modal.style.display="none";
  DivOutfit1.style.border="1px solid #ddd";
};

Mask1.addEventListener('click',function(){
Modal.style.display="block";
});
spanX.addEventListener('click',OcultarModal);
