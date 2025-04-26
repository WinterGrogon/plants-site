const init = () => {
    const coords = [55.753215, 37.622504];
    
    const myMap = new ymaps.Map("map__src", {
        center: coords,
        zoom: 15
    });
    
    const myPlacemark = new ymaps.Placemark(coords, {
        hintContent: "Красная площадь",
        balloonContent: "Москва, Красная площадь"
    });
    
    myMap.geoObjects.add(myPlacemark);
}

ymaps.ready(init);