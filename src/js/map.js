
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
        // Создание карты.
    var myMap = new ymaps.Map('mapmy', {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
        center: [51.53278439133085,46.02264814170864],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Батончики CHOCCO'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/map/m1ap.png',
        // Размеры метки.
        iconImageSize: [46, 57],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-30, -60]
    }),

    myPlacemark1 = new ymaps.Placemark([51.53141574463122,46.026953666478875], {
        hintContent: 'Батончики CHOCCO'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/map/m1ap.png',
        // Размеры метки.
        iconImageSize: [46, 57],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -40]
    });

    myMap.behaviors.disable('scrollZoom');

myMap.geoObjects
    .add(myPlacemark)
    .add(myPlacemark1);
}