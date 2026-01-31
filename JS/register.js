const userSignName = document.getElementById('signname');
const userSignEmail = document.getElementById('signemail');
const userSignPassword = document.getElementById('signpass');
const buttonSubmit = document.getElementById('deditos');



let users = JSON.parse(localStorage.getItem("users")) || [];


buttonSubmit.addEventListener("click",(e)=>{
    e.preventDefault()
    let name = userSignName.value;
    let email = userSignEmail.value;
    let pass = userSignPassword.value;


let userFound = users.some(v=> v.email === email)

if (userFound) {
    alert("no puedes resgistrarte");

    return

}


let user = {
    name : name,
    email : email,
    password : pass,
}


users.push(user)

localStorage.setItem("users",JSON.stringify(users))


alert("te haz registrado correctmente")





})







