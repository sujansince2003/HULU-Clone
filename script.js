// let hamburger=document.querySelector(".hamburger");
let modal=document.querySelector(".login-modal-container");
let closemodal=document.querySelector(".closemodal");
let openmodal=document.querySelector(".openmodal");
openmodal.addEventListener("click",showmodal);
closemodal.addEventListener("click",closemodal);


function showmodal()
{
     modal.style.display="inline";
     closemodal.style.display="inline";
     openmodal.style.display="none"
        


        
   
}
function closemodal()
{
    
  
     openmodal.style.display="inline"
        }