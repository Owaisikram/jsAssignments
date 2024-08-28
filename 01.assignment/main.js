const form = document.getElementById("form")
const input = document.getElementById("inputform")
const result = document.getElementById("result")

form.addEventListener("submit",(event) =>{
    event.preventDefault()

    const user = input.value

    if(user==="karachi"){
        result.innerHTML = ("Welcome To The City Of lights")
    }else{
        alert("Enter Correct city Name")
    }
});
