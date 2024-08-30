const form = document.getElementById("form")
const inputForm = document.getElementById("inputForm")
const result = document.getElementById("result")


form.addEventListener("submit",(event)=>{
    event.preventDefault()


    const userinput = inputForm.value

    if(userinput==="red"){
        result.innerHTML = "Must Stop"
    }
    else if(userinput==="yellow"){
        result.innerHTML = "Ready To Move"
    }
    else if(userinput==="green"){
         result.innerHTML = "Move Now"
    }
    else{
         alert("Enter Correct Signal Color")
    }
})