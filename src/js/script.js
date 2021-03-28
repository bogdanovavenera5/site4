$(document).ready(function(){
    $('.slider-feed').slick({
        centerMode: true,
        centerPadding: '15px',
        slidesToShow: 3,
        dots: false,
        arrows: true,
        speed: 1200,
        infinite: true, 
        variableWidth: true,       
        responsive: [
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false,
                infinite: true, 
                variableWidth: true,
                }
            },
        ]
    });
        
});

function downloadJSAtOnload() {
    const element = document.createElement("script");
    element.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCpRJ4LKhmeW2hmhfM1HWFFqen8GGcTIY0&callback=initMap";
    document.body.appendChild(element);
};
if (window.addEventListener)
    window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
    window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;

function initMap() {
    const elem = document.getElementById('map');
    const options = {
        zoom: 16,
        center: {lat: 55.748777, lng: 37.627159}
    };

    const myMap = new google.maps.Map(elem, options);

    const marker = new google.maps.Marker({
        position: {lat: 55.747965, lng: 37.627218},
        map: myMap,
        icon: '../icons/marker.png'
    });

    var InfoWindow = new google.maps.InfoWindow({
        content: '<div class="map__card"><h2 class="title">г. Москва</h2><div class="map__address">ул. Садовническая, дом 5, офис 4-6<br>700 от м. Новокузнецкая <br>Тел: +7 (926) 423 01 00</div><a href="#" class="map__email">info@glopt.ru</a></div>'
    });

    marker.addListener('click', function(){
        InfoWindow.open(myMap, marker);
    });
};

$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href=#]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;

});
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header-menu'),
        menuItem = document.querySelectorAll('.header__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('header-menu__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('header-menu__active');
        })
    })
})
    











