

var $phoneInput =$("#phone-input");
var $randomCode = $("#random-code");
var $button = $("#submit");
var $button2 = $("#continue");
var $button3 = $("#view2-next");
var $codeInput=$("#code-input");

$button.click(makeid);

function loadPage() {
  $(".modal").modal();
  
  
  $phoneInput.keyup(validateNumber);
  $codeInput.keyup(validateCode);
 
  
}

//habilitar botón
function validateNumber () {
  var $button =$("#submit");

  if($(this).val().trim().length== 10) {
    $button.removeAttr("disabled");
  } else {
    $button.attr("disabled" , true); 
    
  }
}


//función para hacer código random

function makeid() {
    var text = "";
    var possible = "0123456789";
  
    for (var i = 0; i < 3; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  localStorage.code=text;
    return $randomCode.text(text), $button.attr("disabled" , true),  $button2.attr("disabled" , false) ;
   
    
    
    
    console.log(text);
    
 }


 function validateCode () {
  var $button3 = $("#view2-next");
  console.log("hola")
  if($(this).val().trim()==localStorage.code)   {
    $button3.attr("disabled",false);
  } else  {
    $button3.attr("disabled" , true); 
   } 
    
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

