$(document).ready(function() {
    
    if ($('#map').length) {

        var myMap;

        ymaps.ready(init);

        let centerMap;
        let zoomMap;

        if ($(window).width() < 744) {
            centerMap = 50;
        } else {
            centerMap = 100;
        }
        
        if ($(window).width() < 744) {
            zoomMap = 2;
        } else if ($(window).width() > 744 && $(window).width() < 1200) {
            zoomMap = 2.5;
        } else if ($(window).width() > 1560) {
            zoomMap = 3.15;
        } else {
            zoomMap = 3;
        }

        function init() {
            myMap = new ymaps.Map(
                'map', {
                    center: [65, centerMap],
                    zoom: zoomMap,
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
                    width: '100%', height: '100%', backgroundColor: '#223B6C'
                }
            });

            myMap.panes.append('white', pane);

        // Создание макета балуна на основе Twitter Bootstrap.
        let baloonMaxWidth;
        if ($(window).width() < 1024) {
            baloonMaxWidth = 156
        } else {
            baloonMaxWidth = 272
        }

        MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="popover">' +
                '<div class="arrow"></div>' +
                '<div class="popover-inner">' +
                `$[[options.contentLayout observeSize minWidth=${baloonMaxWidth} maxWidth=${baloonMaxWidth} maxHeight=350]]` +
                '</div>' +
                '</div>', {
                /**
                 * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
                 * @function
                 * @name build
                 */
                build: function () {
                    this.constructor.superclass.build.call(this);

                    this._$element = $('.popover', this.getParentElement());

                    this.applyElementOffset();

                    this._$element.find('.close')
                        .on('click', $.proxy(this.onCloseClick, this));
                },

                /**
                 * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onSublayoutSizeChange
                 */
                onSublayoutSizeChange: function () {
                    MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

                    if(!this._isElement(this._$element)) {
                        return;
                    }

                    this.applyElementOffset();

                    this.events.fire('shapechange');
                },

                /**
                 * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name applyElementOffset
                 */

                applyElementOffset: function () {
                    this._$element.css({
                        left: -(this._$element[0].offsetWidth / 2),
                        top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
                    });
                },

                /**
                 * Используется для автопозиционирования (balloonAutoPan).
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
                 * @function
                 * @name getClientBounds
                 * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
                 */

                getShape: function () {
                    if(!this._isElement(this._$element)) {
                        return MyBalloonLayout.superclass.getShape.call(this);
                    }

                    var position = this._$element.position();

                    return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                        [position.left, position.top], [
                            position.left + this._$element[0].offsetWidth,
                            position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
                        ]
                    ]));
                },

                /**
                 * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
                 * @function
                 * @private
                 * @name _isElement
                 * @param {jQuery} [element] Элемент.
                 * @returns {Boolean} Флаг наличия.
                 */
                _isElement: function (element) {
                    return element && element[0] && element.find('.arrow')[0];
                }
            })

        
            
            // POINTS
            for (let point in points){

                // Создание вложенного макета содержимого балуна.
                MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
                    `<div class="baloon-content">
                        <p>${points[point].name}</p>
                        <p>${points[point].phone}</p>
                        <p>${points[point].address}</p>
                    </div>`
                )

                placemark = new ymaps.Placemark(points[point].coordinates , {}, {
                    balloonShadow: false,
                    balloonLayout: MyBalloonLayout,
                    balloonContentLayout: MyBalloonContentLayout,
                    balloonPanelMaxMapArea: 0,
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#imageWithContent',
                    // Изображение спрайт
                    iconImageHref: 'assets/images/point_red.svg',
                    // Размеры метки.
                    iconImageSize: [15, 15],
                    iconImageOffset: [-8, 8],
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
            });

            myMap.behaviors.disable('scrollZoom');
            ymapsTouchScroll(myMap, {preventScroll: true, preventTouch: true});
        }
    }
});