

function extraer(){
    var nom;
    var fecha;
    var datos=[];
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var anio;
    var anioactual;
    var datosfecha=[]; 
    var apaterno;
    var amaterno;

    nom=document.getElementById("nombreapellido").value;
    fecha=document.getElementById("fechaNacimiento").value;

    datos=nom.split(" ");

     

    document.getElementById("apPaterno").value=datos[0];
    document.getElementById("apMaterno").value=datos[1];
    document.getElementById("nombres").value=datos[2];


     apaterno=datos[0].length;
     amaterno=datos[1].length;
    document.getElementById("longitudApe").value=apaterno+amaterno;
    


    datosfecha=fecha.split("-")
    var date=new Date(fecha);

    anio=date.getFullYear();
    anioactual=new Date().getFullYear();  
    document.getElementById("edad").value=anioactual-anio + " años";


     if((datosfecha[1]) &&  datosfecha[1]>= 1  && datosfecha[1]<= 12 ) {
         
        document.getElementById("nombreMes").value=meses[datosfecha[1]-1];
      
     } 
    
}
 let color=0;
function colorear(){
    let colores1 =document.querySelectorAll('.fondo-celeste');
    let colores2 =document.querySelectorAll('.fondo-naranja');
    if(color%2==0){

        colores1.forEach(elementva  => {

            elementva.style.backgroundColor="rgb(224, 75, 16)";
          
          
         });
    
        colores2.forEach(elementva  => {
            elementva.style.backgroundColor="rgb(20, 112, 134)";
            
        }); 
         }else{
            colores1.forEach(elementva  => {
                elementva.style.backgroundColor="rgb(20, 112, 134)";
                
            }); 

            colores2.forEach(elementva  => {

                elementva.style.backgroundColor="rgb(224, 75, 16)";
              
              
             });
    }
    
    color +=1;
}

