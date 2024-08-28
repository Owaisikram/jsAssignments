const form = document.getElementById("form")
const input =document.getElementById("inputform")
const result = document.getElementById("result")

form.addEventListener("submit",(event)=>{
    event.preventDefault()

    const value = input.value

    if(value==="male"){
        result.innerHTML = "God Morning Sir"
    }else if(value==="female"){
        result.innerHTML = "God Morning Ma'am"
    }else{
        alert("Enter Correct Gender")
    }
})