const button = document.querySelector("button");
const input = document.querySelectorAll("input");
const arr = Array.from(input);

button.addEventListener("click", ()=>{
    arr.forEach((e)=>{
        if(e.value == ''){
            e.style.border = "1px solid red";
        }else{
            e.style.border = "";
            e.style.border = "1px solid #7eb909";
        }
    })
})