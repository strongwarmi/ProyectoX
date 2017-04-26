var DataGaleriaOutfit=[{url:"amarillo_accesorios_bolso.jpg"},
                      {url:"amarillo_accesorios_pashmina.jpg"},
                      {url:"amarillo_accesorios_sombrero.jpg"},
                      {url:"amarillo_pantalon_drill.jpg"},
                      {url:"amarillo_pantalon_jeans.jpg"},
                      {url:"amarillo_pantalon_short.jpg"},
                      {url:"amarillo_top_blusa.jpg"},
                      {url:"amarillo_vestido_corto.jpg"},
                      {url:"azul_accesorio_bolso.jpg"},
                      {url:"azul_accesorio_pashmina.jpg"},
                      {url:"azul_accesorio_sombrero.jpg"},
                      {url:"azul_pantalon_jean.jpg"},
                      {url:"azul_pantalon_short.jpg"},
                      {url:"azul_top_blusa.jpg"},
                      {url:"azul_top_crop.jpg"},
                      {url:"azul_top_polo.jpg"},
                      {url:"blanco_accesorios_bolso.jpg"},
                      {url:"blanco_accesorios_pashmina.jpg"},
                      {url:"blanco_pantalon_bermuda.jpg"},
                      {url:"blanco_pantalon_drill.jpg"},
                      {url:"blanco_pantalon_jean.jpg"},
                      {url:"blanco_pantalones_short.jpg"},
                      {url:"blanco_top_blusa.jpg"},
                      {url:"blanco_top_crop.jpg"},
                      {url:"blanco_top_polo.jpg"},
                      {url:"celeste_accesorio_bolso.jpg"},
                      {url:"celeste_accesorio_pashmina.jpg"},
                      {url:"celeste_accesorio_sombrero.jpg"},
                      {url:"celeste_top_crop.jpg"},
                      {url:"celeste_top_blusa.jpg"},
                      {url:"celeste_top_polo.jpg"},
                      {url:"gris_accesorio_bolso.jpg"},
                      {url:"gris_accesorio_pashmina.jpg"},
                      {url:"gris_accesorio_sombrero.jpg"},
                      {url:"gris_pantalon_short.jpg"},
                      {url:"gris_top_blusa.jpg"},
                      {url:"gris_top_crop.jpg"},
                      {url:"gris_top_polo.jpg"},
                      {url:"marron_accesorio_bolso.jpg"},
                      {url:"marron_accesorio_pashmina.jpg"},
                      {url:"marron_pantalon_bermuda.jpg"},
                      {url:"marron_pantalon_drill.jpg"},
                      {url:"marron_pantalon_jean.jpg"},
                      {url:"marron_pantalon_short.jpg"},
                      {url:"marron_top_blusa.jpg"},
                      {url:"marron_top_crop.jpg"},
                      {url:"marron_top_polo.jpg"},
                      {url:"marron_vestido_corto.jpg"},
                      {url:"marron_vestido_largo.jpg"},
                      {url:"morado_accesorio_pashmina.jpg"},
                      {url:"morado_accesorio_sombrero.jpg"},
                      {url:"morado_pantalon_short.jpg"},
                      {url:"morado_top_blusa.jpg"},
                      {url:"morado_top_crop.jpg"},
                      {url:"morado_top_polo.jpg"},
                      {url:"naranja_accesorio_bolso.jpg"},
                      {url:"naranja_accesorio_sombrero.jpg"},
                      {url:"naranja_pantalon_jean.jpg"},
                      {url:"naranja_pantalon_short.jpg"},
                      {url:"naranja_top_crop.jpg"},
                      {url:"naranja_top_polo.jpg"},
                      {url:"naranja_vestido_largo.jpg"},
                      {url:"negro_accesorio_bolso.jpg"},
                      {url:"negro_accesorio_pashmina.jpg"},
                      {url:"negro_accesorio_sombrero.jpg"},
                      {url:"negro_pantalon_short.jpg"},
                      {url:"negro_top_blusa.jpg"},
                      {url:"negro_top_crop.jpg"},
                      {url:"negro_top_polo.jpg"},
                      {url:"rojo_accesorio_bolso.jpg"},
                      {url:"rojo_accesorio_pashmina.jpg"},
                      {url:"rojo_pantalon_drill.jpg"},
                      {url:"rojo_top_blusa.jpg"},
                      {url:"rojo_vestido_corto.jpg"},
                      {url:"rojo_vestido_largo.jpg"},
                      {url:"rosado_accesorio_bolso.jpg"},
                      {url:"rosado_accesorio_pashmina.jpg"},
                      {url:"rosado_accesorio_sombrero.jpg"},
                      {url:"rosado_pantalon_short.jpg"},
                      {url:"rosado_top_blusa.jpg"},
                      {url:"rosado_top_crop.jpg"},
                      {url:"rosado_top_polo.jpg"},
                      {url:"verde_pantalon_jean.jpg"},
                      {url:"verde_pantalon_short.jpg"},
                      {url:"verde_top_crop.jpg"}];

window.addEventListener('load',CreaGaleriaOutfit);
function CreaGaleriaOutfit(){
  DataGaleriaOutfit.forEach(function(Imagen){
    var View = document.createTextNode("Ver Outfit");
    var directorio = "assets/images/data/" + Imagen.url;
    var DivOutfit = document.createElement('div');
    var Outfit = document.createElement('img');
    var DivMask= document.createElement('div');
    var VerOutfit = document.createElement('p');
    DivOutfit.className="DivOutfit";
    DivOutfit.id="DivOutfit" + DataGaleriaOutfit.indexOf(Imagen);
    Outfit.className="Outfit";
    Outfit.id= "Outfit" + DataGaleriaOutfit.indexOf(Imagen);
    Outfit.setAttribute("src",directorio);
    DivMask.className="Mask Outfit";
    DivMask.id="Mask" + DataGaleriaOutfit.indexOf(Imagen);
    VerOutfit.appendChild(View);
    DivMask.appendChild(VerOutfit);
    DivOutfit.appendChild(Outfit);
    DivOutfit.appendChild(DivMask);
    GaleriaOutfit.appendChild(DivOutfit);

  });//cierra forEach
}
var MaskImages = document.getElementsByClassName("Mask");
for (var i = 0; i < MaskImages.length; i++) {
  MaskImages[i].addEventListener("mouseover",RotateImg(this.id));
}
//---------------------
//Mask1.addEventListener('mouseover',RotateImg);
//----Mask1.addEventListener('mouseout',BordeGris);
function RotateImg(DivImages) {
  DivImages.style.border="1px solid rgba(233, 30, 99, 0.47)";
  //Outfit1.style.transform="rotateY(180deg)";
}
function BordeGris(){
  //DivOutfit1.style.border="1px solid #ddd";
  //Outfit1.style.transform="rotateY(360deg)";
};
