$(document).ready(function() {
    
    if ($('#map').length) {

        // POINTS
        let points = [
            {
                name: 'Центральный офис',
                coordinates: [55.755819, 37.617644],
                phone: '8 (800) 300-68-37',
                address: '119530, Москва, Очаковское шоссе, д. 34'
            },

            {
                name: 'Офис Воронеж',
                coordinates: [51.660781, 39.200296],
                phone: '8 (800) 300-68-37',
                address: '123456, Воронеж, Очаковское шоссе, д. 34'
            },

            {
                name: 'Офис Нижний Новгород',
                coordinates: [56.326797, 44.006516],
                phone: '8 (800) 300-68-37',
                address: '123456, Нижний Новгород, Очаковское шоссе, д. 34'
            },

            {
                name: 'Офис Татарстан',
                coordinates: [55.796129, 49.106414],
                phone: '8 (800) 300-68-37',
                address: '123456, Татарстан, Очаковское шоссе, д. 34'
            },

            {
                name: 'Офис Екатеринбург',
                coordinates: [56.838011, 60.597474],
                phone: '8 (800) 300-68-37',
                address: '123456, Екатеринбург, Очаковское шоссе, д. 34'
            },

            {
                name: 'Офис Кемерово',
                coordinates: [55.355198, 86.086847],
                phone: '8 (800) 300-68-37',
                address: '123456, Кемерово, Очаковское шоссе, д. 34'
            },

            {
                name: 'Офис Уссурийск',
                coordinates: [43.797247, 131.952122],
                phone: '8 (800) 300-68-37',
                address: '123456, Уссурийск, Очаковское шоссе, д. 34'
            },

            {
                name: 'Офис Барнаул',
                coordinates: [53.346785, 83.776856],
                phone: '8 (800) 300-68-37',
                address: '123456, Барнаул, Очаковское шоссе, д. 34'
            },

            {
                name: 'Офис Краснодар',
                coordinates: [45.035470, 38.975313],
                phone: '8 (800) 300-68-37',
                address: '123456, Краснодар, Очаковское шоссе, д. 34'
            }
        ];
        
        
        var myMap;

        ymaps.ready(init);
        
        function init() {
            myMap = new ymaps.Map(
                'map', {
                    center: [65, 100],
                    zoom: 3,
                    type: 'yandex#map',
                    controls: []
                }, {
                    suppressMapOpenBlock: true, // Отключить предложение открыть на сайте яндекс
                    autoFitToViewport: true, // Автоматически подстраивает карту под контейнер
                }
            );
        
            // ДОБАВЛЯЕМ ФОН НА КАРТУ
            var pane = new ymaps.pane.StaticPane(myMap, {
                zIndex: 100, css: {
                    width: '100%', height: '100%', backgroundImage: 'url(assets/images/img_bg2.png)', backgroundColor: '#223B6C'
                }
            });

            myMap.panes.append('white', pane);
        
            // POINTS
            for (let point in points){

                placemark = new ymaps.Placemark(points[point].coordinates , {
                    balloonContentHeader: points[point].name,
                    balloonContentBody: points[point].phone,
                    balloonContentFooter: points[point].address
                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#imageWithContent',
                    // Изображение спрайт
                    iconImageHref: 'assets/images/point_red.svg',
                    // Размеры метки.
                    iconImageSize: [15, 15],
                    iconImageOffset: [0, 0],
                    hideIconOnBalloonOpen: false
                });

                placemark.events.add(['balloonopen', 'balloonclose'], function(e) {
                    if (e.get('type') == 'balloonopen') {
                        e.get('target').options.set('iconImageHref', 'assets/images/point_blue.svg')
                    } else {
                        e.get('target').options.set('iconImageHref', 'assets/images/point_red.svg')
                    }
                })
        
                myMap.geoObjects.add(placemark);
            }
        
        
            ymaps.regions.load('RU', {
                lang: 'ru',
                quality: 1
            }).then(function(result) {
                var regions = result.geoObjects;
        
                regions.each(function(reg) {
                    reg.options.set('preset', {
                        fill: true,
                        strokeWidth: 0.5,
                        fillColor: '959FAF',
                        strokeColor: 'fff0'
                    });
                });
        
                myMap.geoObjects.add(regions);
                myMap.container.getElement().style.background = 'transparent';
            });

            myMap.behaviors.disable('scrollZoom');
            ymapsTouchScroll(myMap, {preventScroll: true, preventTouch: true});
        }
    }
});