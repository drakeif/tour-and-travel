//BURGER MENU
(function () {
    const btn = document.querySelector('.js--btn');
    const menu = document.querySelector('.js--nav');

    btn.addEventListener('click', function() {
        menu.classList.toggle('active');
        btn.classList.toggle('btn--active');
    });
}());

//SWIPER
var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

//WAYPOINT
let waypoint = new Waypoint({
  element: document.getElementById('point-1'),
  handler: function(direction) {

    let header = document.querySelector('header');

    if(direction === 'down') {
      header.classList.add('header--scroll');
    } else {
      header.classList.remove('header--scroll');
    }
  }
});