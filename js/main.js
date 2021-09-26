const product = document.querySelectorAll('.product')
const bag = document.querySelector('.uses-bag_item')
let counter = 0

product.forEach(function (element){
    element.addEventListener('click', function () {
        bag.classList.add('active')
        counter += 1
        bag.innerText = `${counter}`
    })
})


const mobileBtn = document.querySelector('.mobile-btn')
const submenu = document.querySelector('.sub-nav')
const links = document.querySelectorAll('.link')
const linkDestkop = document.querySelector('.links')

mobileBtn.addEventListener('click', () => {
    submenu.classList.toggle('active')
})



function checkMediaQuery() {
    if (window.innerWidth <= 980) {
        submenu.appendChild(document.createElement('li').appendChild(links[0]))
        submenu.appendChild(document.createElement('li').appendChild(links[1]))
        submenu.appendChild(document.createElement('li').appendChild(links[2]))
    }

    if (window.innerWidth <= 1140) {
        submenu.appendChild(document.createElement('li').appendChild(links[3]))
        submenu.appendChild(document.createElement('li').appendChild(links[4]))
    }


    if (window.innerWidth <= 1280) {
        submenu.appendChild(document.createElement('li').appendChild(links[6]))
        submenu.appendChild(document.createElement('li').appendChild(links[5]))
    }

}

function checkMediaQueryBack() {
    if (window.innerWidth > 980) {
        linkDestkop.appendChild(document.createElement('li').appendChild(links[0]))
        linkDestkop.appendChild(document.createElement('li').appendChild(links[1]))
        linkDestkop.appendChild(document.createElement('li').appendChild(links[2]))
    }

    if (window.innerWidth > 1140) {
        linkDestkop.appendChild(document.createElement('li').appendChild(links[3]))
        linkDestkop.appendChild(document.createElement('li').appendChild(links[4]))
    }


    if (window.innerWidth > 1280) {
        linkDestkop.appendChild(document.createElement('li').appendChild(links[5]))
        linkDestkop.appendChild(document.createElement('li').appendChild(links[6]))
    }

}


window.addEventListener('resize', checkMediaQuery);
window.addEventListener('resize', checkMediaQueryBack);

