

var $button3 = $("#view3-next");



function loadPage() {
  
  
  
  $code.keyup(validateCode);
 
  
}

//habilitar botón
function validateCode () {
  
 

if($(this).val().trim().length == 3) {
    $button3.removeAttr("disabled");
  } else if($(this).val().trim().length !== 3 || $(this).val().trim().length =="") {
    $button3.attr("disabled" , true); 
    
  } 
  loadPage();
}



//función para hacer código random

function makeid2() {
    var text = " Tu código: LAB-";
    var possible = "0123456789";
  
    for (var i = 0; i < 3; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return  $randomCode.text(text) ;
    ;
   
    
    
    
    console.log(text);
    
 }

 
 /*function validateCode(){
   var $button3= $("#view2-next");

   if($(this).val().trim().length== 3) {
    $button3.removeAttr("disabled");
  } else{
    $button3.attr("disabled" , true); 
    
  }

 }
*/
 

  
  
  
  






$(document).ready(loadPage);

