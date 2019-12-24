var menu = document.getElementsByClassName('accordeon-menu__item');
var m;
for (m = 0; m < menu.length; m++) {
    menu[m].onclick = function () {
        var k;
        for (k = 0; k < menu.length; k++) {
            if (this != menu[k]) menu[k].classList.remove('open');
        }
        this.classList.toggle('open')
    }
}

var btn = document.getElementsByClassName('accordeon-menu__list');
var m;
for (m = 0; m < btn.length; m++) {
    btn[m].onclick = function () {
        var k;
        for (k = 0; k < btn.length; k++) {
            if (this != btn[k]) btn[k].classList.remove('open');
        }
        this.classList.toggle('open')
    }
}