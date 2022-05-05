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
    alert("Volta aqui cara")
})