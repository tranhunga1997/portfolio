// Bắt sự kiện scroll hiện nút on top
window.addEventListener('scroll', function () {
    let scrollValue = this.scrollY
    let onTopBtn = document.querySelector('.on-top-btn')
    if (scrollValue >= 600) {
        if (!onTopBtn.classList.contains('open')) {
            onTopBtn.classList.add('open')
        }
    } else {
        if(onTopBtn.classList.contains('open')) {
            onTopBtn.classList.remove('open')
        }
    }
})

// Bắt sự kiện click sreen mode
document.querySelector('#switcherAction').addEventListener('click', function () {
    if (document.querySelector('#dardMode').disabled) {
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

// sự kiện click nút mobile navigation
document.querySelector('.mobile-navigation').onclick = function (e) {
    e.preventDefault()
    document.querySelector('.navigation').classList.toggle('open')
}

document.querySelectorAll('.navigation li').forEach(selector => {
    selector.onclick = function (e) {
        document.querySelector('.navigation').classList.remove('open')
    }
})

$(document).ready(function () {
    // counter up: tăng dần từ 0 đến sô chỉ định
    $('.counter').counterUp({
        delay: 1,
        time: 1000,
    })

    // slider
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        items: 1,
    })
})

// Xử lý form
const contactForm = document.forms["contactForm"]
contactForm.onsubmit = function(e) {
    e.preventDefault()
    const msgSelector = document.querySelector('.msg')
    let fields = document.querySelectorAll('#contactForm .form-control')
    let msgs = []
    let pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
    fields.forEach(field => {
        if(field.name !== 'email' && field.value.trim().length == 0) {
            msgs.push(`Hãy nhập ${field.name}.`)
        } else if(field.name === 'email' && field.value.trim().length == 0) {
            msgs.push(`Hãy nhập ${field.name}.`)
        } else if(field.name === 'email' && !pattern.test(field.value)) {
            msgs.push('Email không đúng định dạng.')
        }
    })
    
    if(msgs.length != 0) {
        msgSelector.style.color = '#ff3333'
        msgSelector.innerHTML = msgs.join("<br/>")
    } else {
        msgSelector.style.color = '#e0a80d'
        msgSelector.innerHTML = "Hiện tại tính năng chưa được phát triển"
    }

    if(msgs.length == 0) {
        // clear field value
        fields.forEach(field => {
            field.value = ''
        })
    }
    
}
