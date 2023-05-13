let openmodal=document.querySelector(".openmodal")
let closemodal=document.querySelector(".closemodal")
let loginmodal=document.querySelector(".login-modal-container");
closemodal.style.display="none";
openmodal.addEventListener("click",showmodal)
closemodal.addEventListener("click",closemodall)

function showmodal()
{
          loginmodal.style.display="inline";
          openmodal.style.display="none";
          closemodal.style.display="inline";
}

function closemodall()
{
          loginmodal.style.display="none";
          openmodal.style.display="inline";
          closemodal.style.display="none";
}
