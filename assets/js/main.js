//var modal =  document.getElementById('modal01');

window.addEventListener('load',OcultarModal);

//var img = document.getElementById('img1');
var spanX = document.getElementsByClassName("Close")[0];
function BordeGris(){
  ImgFilter.style.border="1px solid #ddd";
  img1.style.transform="rotateY(360deg)";
};
function OcultarModal(){
  Modal.style.display="none";
  ImgFilter.style.border="1px solid #ddd";
};
function RotateImg() {
  ImgFilter.style.border="1px solid rgba(233, 30, 99, 0.47)";
  img1.style.transform="rotateY(180deg)";
}
MaskImg1.addEventListener('click',function(){
Modal.style.display="block";
});
spanX.addEventListener('click',OcultarModal);
MaskImg1.addEventListener('mouseover',RotateImg);
MaskImg1.addEventListener('mouseout',BordeGris);
