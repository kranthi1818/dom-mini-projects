let input = document.querySelector("input")
let ul = document.querySelector("ul")

let allToDo = []

input.addEventListener("keyup", handleInput)

function createUI() {
  ul.innerHTML = ""

  allToDo.forEach((todo) => {
    let li = document.createElement("li")
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.checked = todo.isDone

    let content = document.createElement("p")
    content.innerText = todo.name

    if (todo.isDone) {
      content.classList.add("lineThrough")
    }

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
  let parentLi = event.target.parentElement

  if (event.target.tagName == "INPUT") {
    let Allchildren = Array.from(parentLi.parentElement.children)
    let index = Allchildren.indexOf(parentLi)
    allToDo[index].isDone = event.target.checked

    let textElement = parentLi.querySelector("p")
    if (event.target.checked) {
      textElement.classList.add("lineThrough")
    } else {
      textElement.classList.remove("lineThrough")
    }
  } else if (event.target.tagName == "SPAN") {
    deleteTask(parentLi)
  }
}

function deleteTask(parentLi) {
  let index = Array.from(ul.children).indexOf(parentLi)
  allToDo.splice(index, 1)

  parentLi.remove()
}
