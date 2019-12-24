var team = document.getElementsByClassName('accordeon-team__item');
var i;
for (i = 0; i < team.length; i++) {
    team[i].onclick = function () {
        var u;
        for (u = 0; u < team.length; u++) {
            if (this != team[u]) team[u].classList.remove('open');
        }
        this.classList.toggle('open')
    }
}