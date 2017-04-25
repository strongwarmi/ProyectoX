var modal =  document.getElementById('modal01');
var img = document.getElementById('img1');
var spanX = document.getElementsByClassName("Close")[0];
function OcultarModal(){
  modal.style.display="none";
};
window.addEventListener('load',OcultarModal);
img.addEventListener('click',function(){
modal.style.display="block";
});
spanX.addEventListener('click',OcultarModal);
