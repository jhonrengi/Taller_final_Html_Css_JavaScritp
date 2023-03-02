
    
    function colorChange() {
        var selecvalor = document.getElementById("Seleccion").value;
        document.body.style.backgroundColor = selecvalor;
    }

   
    const main = ()=>{
        let elemetosAcordeon = document.getElementsByClassName("acordeon");
    
     for (let i = 0; i< elemetosAcordeon.length; i++) {  
        elemetosAcordeon[i].addEventListener("click",function() {
    
            this.classList.toggle("active");
    
            let panel = this.nextElementSibling;
            if(panel.style.display == "block"){
                panel.style.display = "none"
            }else{
                panel.style.display = "block"
            }
            
        })
     }
     }

