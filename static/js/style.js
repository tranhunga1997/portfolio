// Bắt sự kiện scroll hiện nút on top
window.addEventListener('scroll', function () {
    let scrollValue = this.scrollY
    let onTopBtn = document.querySelector('.on-top-btn')
    if (scrollValue >= 600) {
        if (!onTopBtn.classList.contains('open')) {
            onTopBtn.classList.add('open')
        }
    } else {
        onTopBtn.classList.remove('open')
    }
})

// Bắt sự kiện click sreen mode
document.querySelector('#switcherAction').addEventListener('click', function () {
    if(document.querySelector('#dardMode').disabled) {
        // light mode -> dard mode
        document.querySelector('#dardMode').disabled = false
        document.querySelector('#lightMode').disabled = true
        this.classList.remove('switcher-active')
    } else {
        // dark mode -> light mode
        document.querySelector('#lightMode').disabled = false
        document.querySelector('#dardMode').disabled = true
        this.classList.add('switcher-active')
    }
})