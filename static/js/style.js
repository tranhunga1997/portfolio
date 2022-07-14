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