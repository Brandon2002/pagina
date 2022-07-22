function verificadorEra(){
    let era = document.getElementById("era")
    if(isNaN(era.value)){
        alert("Por favor selecciona una era")
    }else{
        let div = document.getElementById("e")
        div.innerText = "" + era.value
        console.log(era.value);
        document.getElementById("es").style.display="block"
        
    }
   
    if(era.value == 19){
        era19();
        alert("¡Regresemos a la era 19!")
        document.getElementById("btn2").disabled=false;
        document.getElementById("era").disabled=true;
    } else if(era.value == 21){
        alert("¡Regresemos a la era 21!")
        era21();
        document.getElementById("btn2").disabled=false;
        document.getElementById("era").disabled=true;
    } else if(era.value == 25){
        alert("¡Regresemos a la era 25!")
        era25();
        document.getElementById("btn2").disabled=false;
        document.getElementById("era").disabled=true;
    } else if(era.value ==30){
        alert("¡En buena hora por el regreso de Adele!")
        era30();
        document.getElementById("btn2").disabled=false;
        document.getElementById("era").disabled=true;
    }
}

function era19(){
    let div = document.getElementById("eras")
        div.innerText = "Álbum debut de Adele" 
    let fr = document.getElementById("frase")
        fr.innerText = "Should I give up, or should I just keep chasing pavements?"
        
    document.getElementById("img").src="https://cutt.ly/QL1FMiR";
    let bo = document.getElementById("e")
        bo.style.color="#D5951C"
    
}

function era21(){
    let div = document.getElementById("eras")
        div.innerText = "Segundo álbum de Adele, un éxito en ventas"
       
    let fr = document.getElementById("frase")
        fr.innerText = "We could've had it all, rolling in the deep"
    document.getElementById("img").src="https://cutt.ly/CL1FnBv";
    let bo = document.getElementById("e")
        bo.style.color="#81BD00"
}

function era25(){
    let div = document.getElementById("eras")
        div.innerText = "Tercer álbum de Adele, un éxito en ventas"
    let fr = document.getElementById("frase")
        fr.innerText = "Hello from the other side"
    document.getElementById("img").src="https://cutt.ly/JL1FOmi";
    let bo = document.getElementById("e")
        bo.style.color="#BC0000"
}

function era30(){
    let div = document.getElementById("eras")
        div.innerText = "Cuarto álbum de Adele, un éxito en ventas a pesar de la era del streaming"
    let fr = document.getElementById("frase")
        fr.innerText = "Go easy on me, baby"
    document.getElementById("img").src="https://cutt.ly/6L1FJID";
    let bo = document.getElementById("e")
        bo.style.color="#B2A200"
}

// function cambioId(){
//     if(era.value == 19){
//         document.getElementById("btn2").id="19"
//     } else if(era.value == 21){
//         document.getElementById("btn2").id="21"
//     } else if(era.value == 25){
//         document.getElementById("btn2").id="25"
//     } else if(era.value == 30){
//         document.getElementById("btn2").id="30"
//     }
//     }

function verificadorA(){
    
    let era = document.getElementById("era")
    if(era.value == 19){
        console.log("Esto será para la era 19")
        document.getElementById("btn2").disabled=true;
        document.getElementById("era").disabled=false;
    } 
    if(era.value == 21){
        console.log("Esto será para la era 21")
        document.getElementById("btn2").disabled=true;
        document.getElementById("era").disabled=false;
    } 
    if(era.value == 25){
        console.log("Esto será para la era 25")
        document.getElementById("btn2").disabled=true;
        document.getElementById("era").disabled=false;
    }
    if(era.value ==30){
        console.log("Esto será para la era 30")
        document.getElementById("btn2").disabled=true;
        document.getElementById("era").disabled=false;
    }
}





// function button(){
//     let button = document.createElement("button")
//         button.type = 'button';
//         button.innerHTML = 'Obtener';
//         button.id = 'btn-styled'
//     let div1 = document.getElementById('es');
//         div1.appendChild(button)
        
// }