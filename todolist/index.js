let input = document.querySelector("input")
let ul = document.querySelector("ul")

let allToDo = []

input.addEventListener("keyup", handleInput)

function createUI() {
//   ul.innerHTML = ""
ul.innerHTML = ''
  allToDo.forEach((todo) => {
    let li = document.createElement("li")
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.checked = todo.isDone

    let content = document.createElement("p")
    content.innerText = todo.name

    let cross = document.createElement("span")
    cross.innerText = "X"

    li.append(checkbox, content, cross)

    ul.append(li)
    return li
  })
}
function handleInput(event) {
  if (event.keyCode == 13 && event.target.value !== "") {
    let todo = {
      name: event.target.value,
      isDone: false,
    }
    allToDo.push(todo)
    console.log(allToDo)
    event.target.value = ""
    createUI()
  }
}

ul.addEventListener("click", checkBoxClicked)

function checkBoxClicked(event) {
  if (event.target.tagName == "INPUT") {
    let Allchildren = Array.from(
      event.target.parentElement.parentElement.children
    )
    let index = Allchildren.indexOf(event.target.parentElement)

    allToDo[index].isDone = event.target.checked

  }else if(event.target.tagName == "SPAN"){
    deleteTask(event)
  }
  lineThrough(event)
}

function lineThrough(event) {
  let textElement = event.target.nextSibling

  if (textElement && textElement.tagName === "P" && event.target.checked) {
    textElement.classList.add("lineThrough")
  } else {
    textElement.classList.remove("lineThrough")
  }
     
}

function deleteTask(event) {

    let li = event.target.parentElement;
    let index = Array.from(ul.children).indexOf(li); 
    
    allToDo.splice(index, 1); 
  
    createUI(); 
  }
