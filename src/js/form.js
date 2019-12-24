const myForm = document.querySelector(".form");
const popupBtn = document.querySelector('.popup__close'),
    popup = document.querySelector('.popup');


myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(myForm);
    formData.append("to", "kanonel@yandex.ru");
    const request = new XMLHttpRequest();
    request.open("POST", "https://webdev-api.loftschool.com/sendmail");
    request.send(formData);
    request.addEventListener("load", function () {
        const responce = JSON.parse(request.response);
        if (request.status < 400) {
            myForm.reset();
            popup.style.display = 'flex';
        }
    });
});
popupBtn.addEventListener('click', function () {
    popup.style.display = 'none';
})