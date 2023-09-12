let input=document.getElementById("input");

let getbtn=document.getElementById("btn");
let result=document.getElementById("post");
let postimg=["img/1.jpeg","img/2.jpeg","img/3.jpeg","img/4.jpeg","img/5.jpeg","img/me.jpg"];


getbtn.addEventListener('click',ans);

function ans(e){
	e.preventDefault()
	
	readpost()
}
let data={}
function readpost(){
	data['text']=input.value
	// console.log(data);
	createpost()
	
}
function createpost(){
	result.innerHTML+=`<div class="post-area">
	<p>${data.text}</p>
	
     <span class="options"> 
	 <div class="content">
	 
	 <i onclick="editpost(this)" class="bi bi-pencil-square">Edit</i>
	 <i onclick="removepost(this)" class="bi bi-trash3">Dlete</i>
	<i onclick="likepost()"    class="bi bi-heart">like <span id="liked"></span></i>
	 
	
	
	 </span>
	 <img src="img/1.jpeg" class="post-img">
	 </div>
	</div>
	`
     let random=Math.floor(Math.random()*postimg.length);
	 
	 let imgsrc=document.querySelector(".post-img");
	  
	  imgsrc.src=postimg[random]
	 
	 
	input.value=''
}
function editpost(e){
	
	input.value=e.parentElement.parentElement.previousElementSibling.innerHTML
	e.parentElement.parentElement.parentElement.remove();
}
function removepost(e){
	e.parentElement.parentElement.parentElement.remove();
		// e.parentElement.parentElement.previousElementSibling.remove();
}

let count=1;

function likepost(){
	
		liked.innerHTML=count++;

	console.log("click");
}