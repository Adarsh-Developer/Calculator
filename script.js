const operators = document.querySelectorAll('.num')
const screen = document.querySelector('.screen')
const equal = document.querySelector('.equal')
const clear = document.querySelector('.clear')
const cross = document.querySelector('.cross')
const audio = new Audio('./audio.mp3')

operators.forEach(function(e){
  e.addEventListener('click', function(){
    screen.innerHTML += e.getAttribute('data')
  })
})

equal.addEventListener('click', function(){
  if(screen.innerHTML !== ''){
    screen.innerHTML = eval(screen.innerHTML)
  }else{
    audio.play()
  }
})

clear.addEventListener('click', function(){
  screen.innerHTML = ''
})

cross.addEventListener('click', function(){
  screen.innerHTML = screen.innerHTML.slice(0, -1)
})