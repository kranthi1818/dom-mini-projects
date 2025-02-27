let leftContainer = document.querySelector(".first-container")
let buttonsContainer = document.querySelector(".second-container")
let rightContainer = document.querySelector(".third-container")

let leftElements = document.querySelectorAll(".left-elements")
let rightElements = document.querySelectorAll(".right-elements")


let input = document.querySelectorAll("input")

buttonsContainer.addEventListener("click", function (event) {


     if (event.target.tagName !== 'BUTTON') return;

  if (event.target.classList.contains("all-left")) {

    leftContainer.append(...rightElements, ...leftElements)



  } else if (event.target.classList.contains("all-right")) {

    rightContainer.append(...rightElements, ...leftElements)

   

  }else if(event.target.classList.contains("left")){


    input.forEach((inp)=>{
        if(inp.checked == true){
            leftContainer.append(inp.parentElement)
        }
    })
       

  }else if(event.target.classList.contains("right")){
    input.forEach((inp)=>{
        if(inp.checked == true){
            rightContainer.append(inp.parentElement)
        }
    })
        
  }
  input.forEach((inp)=>inp.checked = false)
})
