const operators = document.querySelectorAll('.num')
const screen = document.querySelector('.screen')
const equal = document.querySelector('.equal')
const clear = document.querySelector('.clear')
const cross = document.querySelector('.cross')

operators.forEach(function(e){
  e.addEventListener('click', function(){
    screen.innerHTML += e.getAttribute('data')
  })
})

equal.addEventListener('click', function(){
  screen.innerHTML = eval(screen.innerHTML)
})

clear.addEventListener('click', function(){
  screen.innerHTML = ''
})

cross.addEventListener('click', function(){
  screen.innerHTML = screen.innerHTML.slice(0, -1)
})