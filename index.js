const rememberDiv = document.querySelector(".husk");
const forgetDiv = document.querySelector(".glem");
const form = document.querySelector("form");
const nameInput = document.querySelector("#skrivnavn");
const submitBtn = document.querySelector("#submitnavn");
const forgetBtn = document.querySelector("#glemnavn");

const h1 = document.querySelector("h1");
const personalGreeting = document.querySelector(".personalGreeting")

form.addEventListener("submit", function(e){
    e.preventDefault();
});

submitBtn.addEventListener("click",function(){
    localStorage.setItem("navn",nameInput.value);
    nameDisplaycheck()
})

forgetBtn.addEventListener("click", function(){
    localStorage.removeItem("navn")
    nameDisplaycheck()
})

function nameDisplaycheck() {
    if(localStorage.getItem("navn")){
        let name = localStorage.getItem("navn");
        h1.textContent = "Velkommen " + name
        personalGreeting.textContent = "Velkommen til vores hjemmeside " + name
        forgetDiv.style.display = "block"
        rememberDiv.style.display = "none"
    } else {
        h1.textContent = "Velkommen ukendt person"
        personalGreeting.textContent = "Hej person jeg ikke kender endnu"
        forgetDiv.style.display = "none"
        rememberDiv.style.display = "block"
    }
}

document.body.onload = nameDisplaycheck