// list open and close and channge form the icon 
let icon = document.querySelector('.icon')
let navbar = document.querySelector('.navbar')
let nativ = document.querySelector('.icon .nativ')
let spans = document.querySelectorAll('.icon span')

icon.addEventListener('click', function () {
    // open and close
    navbar.classList.toggle('open')

// styles change style the eicon
    nativ.style.cssText = 'margin:-2px;background-color:#eee'
    icon.style.height = '15px '
    spans[0].style.transform = 'rotate(41deg)'
    spans[2].style.transform = 'rotate(137deg)'

    if (navbar.classList.contains('open')) {
        nativ.style.cssText = 'margin:-2px;background-color:#eee'
        // icon.style.height = '15px '
        spans[0].style.transform = 'rotate(41deg)'
        spans[2].style.transform = 'rotate(137deg)'
    } else {
        nativ.style.cssText = 'margin:4px 0;background-color: $grayColor'
        // icon.style.height = '15px '
        spans[0].style.transform = 'rotate(0deg)'
        spans[2].style.transform = 'rotate(0deg)'
    }
    
})


// special for add class sbecial for any element clickepol
let links = document.querySelectorAll('.header .navbar ul a ')
document.addEventListener('click', function (e) {
    for (let i = 0; i < links.length; i++) {
        if (links[i].innerHTML == e.target.innerHTML) {
            for (let j = 0; j < links.length; j++) {
                links[j].classList.remove('special')
            }
          links[i].classList.add('special')
        }
    }
})
// end icon
console.log('sdsd');