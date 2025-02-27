let leftContainer = document.querySelector(".first-container")
let buttonsContainer = document.querySelector(".second-container")
let rightContainer = document.querySelector(".third-container")

let singleElement = document.querySelectorAll('.single-element')

let input = document.querySelectorAll('input')

let leftBtn = document.querySelector('.left')
let rightBtn = document.querySelector('.right')

leftBtn.disabled = true;
rightBtn.disabled = true;

buttonsContainer.addEventListener('click',function(event){
    
    if(event.target.tagName != 'BUTTON') return

    if(event.target.classList.contains('all-left')){
        allLeft()
    }else if(event.target.classList.contains('all-right')){
        allRight()
    }else if(event.target.classList.contains('left')){
        left()
    }else if(event.target.classList.contains('right')){
        right()
    }
})

function allLeft(){
     singleElement.forEach((ele)=>{
        leftContainer.append(ele)
     })
     updateBtn()
}

function allRight(){
    singleElement.forEach((ele)=>{
        rightContainer.append(ele)
     })
     updateBtn()
}

function left(){
    rightContainer.querySelectorAll('input').forEach((inp)=>{
        if(inp.checked){
             leftContainer.append(inp.parentElement)
             inp.checked = false
        }
    })
    updateBtn()
}

function right(){
    leftContainer.querySelectorAll('input').forEach((inp)=>{
        if(inp.checked){
             rightContainer.append(inp.parentElement)
             inp.checked = false
        }
    })
    updateBtn()
}

function updateBtn() {
    let leftCheckboxes = leftContainer.querySelectorAll("input");
    let leftChecked = false;

    for (let i = 0; i < leftCheckboxes.length; i++) {
        if (leftCheckboxes[i].checked) {
            leftChecked = true;
            break;
        }
    }

    if (leftChecked) {
        rightBtn.disabled = false;
    } else {
        rightBtn.disabled = true;
    }


    let rightCheckboxes = rightContainer.querySelectorAll("input");
    let rightChecked = false;

    for (let i = 0; i < rightCheckboxes.length; i++) {
        if (rightCheckboxes[i].checked) {
            rightChecked = true;
            break;
        }
    }

    if (rightChecked) {
        leftBtn.disabled = false;
    } else {
        leftBtn.disabled = true;
    }
}

document.addEventListener("change", function (event) {
    if (event.target.type === "checkbox") {
        updateBtn();
    }
})