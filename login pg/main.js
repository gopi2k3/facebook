
let mailresult=document.getElementById("mailres");
let nameresult=document.getElementById("passres");

let form=document.querySelector("form");


form.addEventListener('submit',result);

function result(e){
	e.preventDefault()


let mail=document.getElementById("input1").value;

let pass=document.getElementById("input2").value;

	
	
	if((mail==null)||(mail=="")||(mail<0)){
	    mailresult.innerHTML="Enter A Valid Mail or Number";
		mailresult.style.color="red"
	}
	else if((pass==null)||(pass=="")||(pass<0)){
	    nameresult.innerHTML="Enter A Valid Password";
		nameresult.style.color="red";
	}
	else{
		login()
	}
	function login(){
	let getMail=localStorage.getItem("reg_mail");
	let getPass=localStorage.getItem("reg_pass");
		
	if(mail==getMail&&pass==getPass){
		alert("login success");
		location.href="../facebook home pg/index.html"
	}
	else{
		alert("enter a correct Password or Mail");
	}	
		
	}
}