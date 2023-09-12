let mailres=document.getElementById("mailres");
let passres=document.getElementById("passres");
let fnres=document.getElementById("fnresult");
let lnres=document.getElementById("lnresult");


let btn=document.getElementById("form");




 
btn.addEventListener('submit',ans)
function ans(e){
	e.preventDefault();

let mail=document.getElementById("mail").value;

let pass=document.getElementById("pass").value;

let fname=document.getElementById("fname").value;

let lname=document.getElementById("lname").value;

  if((fname==null)||(fname=="")||(fname<0)){
		
		fnres.innerHTML="Ples Enter Your Correct Name";
		fnres.style.color="red"
	}
	else if((lname==null)||(lname=="")||(lname<0)){
		lnres.innerHTML="Ples Enter Your Correct Name";
		lnres.style.color="red"
		
	}
	else if((mail==null)||(mail=="")||(mail<0)){
		 mailres.innerHTML="Enter A Valid Mail or Mobile number";
		mailres.style.color="red"
	}
	else if((pass==null)||(pass=="")||(pass<0)){
		 passres.innerHTML="Please Enter a Correct Password";
		passres.style.color="red"
	}
	
	else{
		signup()
	}
	function signup(){
		localStorage.setItem("reg_mail",mail)
		localStorage.setItem("reg_pass",pass)
		
		
		alert("Register Success");
		location.href="../login pg/index.html"
		
	}
	
}


