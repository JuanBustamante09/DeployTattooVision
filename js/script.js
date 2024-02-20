/*efecto de transicion de menu de navegacion*/
window.addEventListener("scroll", function(){              
    var header = document.querySelector("header");          
     header.classList.toggle("abajo", window.scrollY>0);
 })
            //lo que hace es crear un nuevo evento cuando el usuario este navegando(scroll), 
            //despues se crea una variable llamada header y selecciono la etiqueta de mi html llamada header,
            //despues creo una clase llamada abajo para darle los estilos para activar ete efecto y cuando el usuario navegue y baje se acticara el efecto.
/*-------------------------------------------------------------------------------*/

window.addEventListener('load', () => {

    setTimeout(carga, 2000);

    function carga(){
        document.getElementById('loader').className = 'hide';
 
        document.getElementById('contenido').className = '';
    }

}) 

 
/*------------------------------Verificar la aceptacion de los terminos-------------------------------------------------*/


function verifica(){
    let prueba = document.getElementById('tyc')
    if (prueba.checked == true) {
        var pre = document.createElement('pre');
        //custom style.
        pre.style.maxHeight = "400px";
        pre.style.margin = "0";
        pre.style.padding = "10px";
        pre.style.whiteSpace = "pre-line";
        pre.style.textAlign = "justify";
        pre.style.overflow = 'scroll';
        pre.appendChild(document.createTextNode($('#la').text()));
        //show as confirm
        alertify.confirm(pre, function(){
            
            if (alertify.success('Aceptado')) {
                prueba.checked = true;
            }
            },function(){
                if (alertify.error('Cancelado')) {
                    prueba.checked = false;
                }
            }).set({labels:{
                ok:'Estoy De Acuerdo', cancel: 'Cancelar'
            }, padding: false}).set('maximizable', true);
    }
}

/*-------------------------verificar valida la extencion-----------------------*/

function validarExt(){
    let file = document.getElementById('file').files[0].name;

    let extPermitida = /(.jpg|.png|.jpeg)$/i;

    if(!extPermitida.exec(file)){
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          );
        alert('Ese tipo de archivo no es compatible, por favor intente subir de nuevo un archivo tipo imagen');
        file.value = null;   
        return false;
    }else{return true;}
}
