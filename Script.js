const header = document.querySelector('.header')
const logo = document.querySelector('.header .logo')

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 250) {
        header.style.backgroundColor = 'black'
    } else {
        header.style.backgroundColor = 'transparent'
    }
});
