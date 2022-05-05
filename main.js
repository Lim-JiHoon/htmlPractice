const btnPause = document.querySelector('#btnPause')

btnPause.addEventListener('click', () => {
  const icon = btnPause.querySelector("i")
  let className = icon.className
  icon.classList.toggle('fa-play')
  icon.classList.toggle('fa-circle-pause')
})

const info = document.querySelector('.info')
const menuBtn = document.querySelector('.menu')
menuBtn.addEventListener('click', () => {
  var isOpen = info.className == 'info' || info.classList.contains('slide-in');
  info.setAttribute('class', isOpen ? 'info slide-out' : 'info slide-in')
})