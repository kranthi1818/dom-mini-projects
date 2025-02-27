
let numbers = document.querySelectorAll(".numbers")

let lines = document.querySelectorAll(".line")

let prevBtn = document.querySelector("#firstbutton")
let nextBtn = document.querySelector("#secondbutton")


let contentChange = document.querySelector("#content-change")

let messages = [
  "Add contact details for further communications",
  "Add shipping address for successful delivery",
  "Complete payment to complete the order",
  "Ready to get delivered!",
  "Order Delivered successfully! 🎉",
]

let count = 0

nextBtn.addEventListener("click", function () {
  if (count < numbers.length) {
    count++
    updateNumbers()
  }
})
prevBtn.addEventListener("click", function () {
  if (count > 0) {
    count--
    updateNumbers()
  }
})


function updateNumbers() {
  for (let i = 0; i < numbers.length; i++) {
    if (i < count) {
     numbers[i].classList.add('numberBg')
      numbers[i].innerText = '✔'
    }else{
      numbers[i].classList.remove('numberBg')
      numbers[i].innerText = i+1
    }

    if (i === count) {
      numbers[i].classList.add("nextNumberBg");
    } else {
      numbers[i].classList.remove("nextNumberBg");
    }

    if( count == 0){
      prevBtn.disabled = true
    }else{
      prevBtn.disabled = false
    }

    if(count > 2){
      nextBtn.innerText = 'Finish'
    }else{
      nextBtn.innerText = 'Next'
    }
    if(count == 4){
      nextBtn.disabled = true
      prevBtn.disabled = true
    }
  }

  for(let i=0;i<lines.length;i++){
    if(i < count){
      lines[i].classList.add('linesBg')
    }else{
      lines[i].classList.remove('linesBg')
    }
  }
  contentChange.innerText = messages[count]
}


updateNumbers()
