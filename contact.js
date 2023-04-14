const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
 }

 function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
 }

 inputs.forEach((input) =>{
    input.addEventListener("focus, focusFunc");
    input.addEventListener("blur", blurFunc);
 })


// ============= contact set up===========================
function sendMail(){
   var params ={
      name:document.getElementById("name").value,
      email:document.getElementById("email").value,
      subject:document.getElementById("subject").value,
      message:document.getElementById("message").value,
      
   };



const serviceID =" service_yf0rwce";
const templateID ="template_egmnots"

emailjs
.send(serviceID,templateID,params)
.then(
   res=>{
      document.getElementById("name").value="";
      document.getElementById("email").value="";
      document.getElementById("subject").value="";
      document.getElementById("message").value="";
      console.log(res);
      alert("Message sent sucessfully");
   }
)

.catch((err)=> console.log(err));
}
