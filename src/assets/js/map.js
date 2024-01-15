$(document).ready(function() {
    if($("#map").length) {

        function addYaMaps() {
            var myMap;
            ymaps.ready(init);

            function init() {
                myMap = new ymaps.Map('map', {
                    center: [55.743815, 37.712367],
                    zoom: 8,
                    controls: []
                }),
                    myPlacemark = new ymaps.Placemark([55.743815, 37.712367], {
                        // balloonContentHeader: '',
                        // balloonContentBody: "text",
                        // balloonContentFooter: "+7 (925) 603-78-22<br>+7 (926) 263-02-69<br>info@magixkalyan.ru",

                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: './assets/images/map-pin.svg',
                        iconImageSize: [33, 33],
                        iconImageOffset: [-37, -45],
                        balloonOffset: [-25, -5] 
                    });
                myMap.geoObjects.add(myPlacemark);
                ymapsTouchScroll(myMap, {preventScroll: true, preventTouch: true});
            }
        }

        addYaMaps();
    }
})

