function toTop() {
    console.log("toTop")
    window.scrollTo(0, 0)
}

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        document.querySelector('#toTop').classList.toggle('active')
    } else {
        document.querySelector('#toTop').classList.toggle('active')
    }
})

document.addEventListener('mouseleave', () => {
    alert("Você saiu da página")
})

document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let circle = document.getElementById('follow');
    let left = e.offsetX;
    let top = e.offsetY;
    circle.style.left = left + 'px';
    circle.style.top = top + 'px';
  });