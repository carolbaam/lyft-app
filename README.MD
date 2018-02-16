L Y F T
 Una web-app que replique el sitio de Lyft para el registro del usuario

FLUJO DE LA APLICACIÓN.
Vista splash con duración de 5 segundos que redirecciona a la vista de inicio. La vista de inicio cuenta con dos botones, en esta ocasión seguiremos el flujo de SING UP. inicio

En la siguiente vista tenemos un formulario donde nuestro usuario puede escoger el país y debe ingresar su número de teléfono. El botón de NEXT debe estar deshabilitado hasta que se ingrese un número de 10 dígitos. registro

Una vez ingresado el número de teléfono se habilita el botón y al dar click se envía una alerta con un código generado aleatoriamente (LAB-000) y redireccionar a la siguiente vista. 

En esta vista se debería ingresar el código dado anteriormente (aunque eso se logará en un segundo alcance, por ahora pude ingresar cualquier código solo con 3 dígitos) y una vez hecho esto se habilita el botón que redirecciona a nuestro usuario a la vista donde ingresa sus datos. Tiene la posibildad de enviar un nuevo código

Para ingresar sus datos necesitamos un formulario que le pida su nombre, apellido y correo electrónico. Deberá también tener un checkbox para que se acepten los términos y condiciones del servicio. 

 se deberá muestra al final una vista al usuario que le indiqua que ha concluido con el registro exitosamente. 

NOTA: Todas nuestras vistas deben de contar con una manera de regresar a la vista anterior:

El index regresa al loader apretando el logo blanco superior de lyft
Todas las demás vistas lo hacen apretando el icono rosa <   que se encuentra en el encabezado
La vista final lo hace apretando la imagen de la paloma gigante blanca y nos redirecciona al loader