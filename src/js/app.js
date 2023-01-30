const button = document.querySelector("button");
const form = document.querySelector("form");
const input = document.querySelectorAll("input");
const arr = Array.from(input);

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    arr.forEach((e)=>{
        if(e.value == ''){
            e.style.border = "1px solid red";
        }else{
            e.style.border = "";
            e.style.border = "1px solid #7eb909";
        }
    })
    const formData = new FormData(form);
    for(let data of formData){
        console.log(data[0], data[1])
    }
    fetch('http://httpbin.org/post', {
        method: "POST",
        body: formData
    })
    .then(res => {
        if(!res.ok){
            console.log('not success')
            console.log(res)
        }else{
            console.log('ok')
        }
    })
    .then((res)=>res.json())
    .then(res => console.log(res))

})