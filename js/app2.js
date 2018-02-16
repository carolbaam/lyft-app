
var $randomCode = $("#random-code");

var $button2 = $("#continue");
var $button3 = $("#view2-next");
var $code=$("#code-input");
var $resend=$("#view2-resend");

$resend.click(makeid2);



function loadPage() {
  
  
  
  $code.keyup(validateCode);
 
  
}

//habilitar botón
/*
function validateCode () {
  var $button3 = $("#view2-next");

  if($(this).val().trim().length == 3) {
    $button3.removeAttr("disabled");
  } else if($(this).val().trim().length !== 3 || $(this).val().trim().length =="") {
    $button.attr("disabled" , true); 
    
  } 
  loadPage();
}
*/

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

