//var modal =  document.getElementById('modal01');

window.addEventListener('load',OcultarModal);

//var img = document.getElementById('img1');
var spanX = document.getElementsByClassName("Close")[0];
function OcultarModal(){
  ModalInformativo.style.display="none";
  ImgFilter.style.border="1px solid #ddd";
};
function RotateImg() {
  ImgFilter.style.border="1px solid rgba(233, 30, 99, 0.47)";
  img1.style.rotateY="180deg";
}
MaskImg1.addEventListener('click',function(){
ModalInformativo.style.display="block";
});
spanX.addEventListener('click',OcultarModal);
MaskImg1.addEventListener('mouseover',RotateImg);
