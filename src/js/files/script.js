// Подключение функционала "Чертоги фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Анимация

gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline();
tl.fromTo(".start-title", 
  { scale: 1.5 },
  { duration: 1.5, scale: 1, ease: "circ.out" }
)
  .from(".start-content", {
    opacity: 0,
    duration: 1,
    x: -50,
    ease: "power4.out",
  })
  .fromTo(
    ".header",
    { y: -500 },
    { duration: 0.2, y: 0, ease: "power4.out" }
  );
TweenMax.to(".active-btn", 1, { translateY: 10, repeat: -1, yoyo: true });

if (ScrollTrigger.isTouch !== 1) {


let itemsL = gsap.utils.toArray('.booking-hero, .content-photo__container, .comfort__content, .list-comfort__items, .title-section, .cost__text, .content-cost__prices, .content-cost__profitable, .content-cost__additionally, .prices-card-center, .lessons__title, .description-rules__descr, .list-rules__item, .list-booking__item, .content-news__title, .questions__title')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0,  scale: 0 }, {
			opacity: 1, scale: 1,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-200',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.bottom-hero__text, .content-photo__items, .content-aboutUs__text, .info-house__text, .rules__text, .content-booking__text, .news-descr')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0 }, {
			opacity: 1,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top 50%',
				scrub: true
			}
		})
	})

	let itemsTransX = gsap.utils.toArray('.left-description__image, .list-description, .prices-card-left, .content-lessons-left, .reviews__inst, .news-img, .item-contacts__img, .item-shop__slider, .map-house__maps')

	itemsTransX.forEach(item => {
		gsap.fromTo(item, { translateX: -1600 }, {
			translateX: 0,
			scrollTrigger: {
				trigger: item,
				start: '-550',
				end: 'top 50%',
				scrub: true
			}
		})
	})

	let itemsTransY = gsap.utils.toArray('.description-house__right, .prices-card-right, .content-lessons-right, .content-stocks, .list-news__descr, .item-contacts__content, .bottom-hero__content')

	itemsTransY.forEach(item => {
		gsap.fromTo(item, { translateX: 1600 }, {
			translateX: 0,
			scrollTrigger: {
				trigger: item,
				start: '-550',
				end: 'top 50%',
				scrub: true
			}
		})
	})

	let itemsFAQ = gsap.utils.toArray('.content-questions__spollers')

	itemsFAQ.forEach(item => {
		gsap.fromTo(item, { opacity: 0,  scale: 0 }, {
			opacity: 1, scale: 1,
			scrollTrigger: {
				trigger: item,
				start: 'start 100%',
				end: 'end 85%',
				scrub: true
			}
		})
	})
}



//YA
// ymaps.ready(init);
// function init() {
// 	// Создание карты.
// 	var myMap = new ymaps.Map("map", {
// 		//Координаты центра карты.
// 		// Порядок по умолчанию:"широта, долгота".
// 		// Чтобы не определять координаты центра карты вручную,
// 		// воспользуйтесь инструментом определения координат.
// 		controls: ['default', 'routeButtonControl'],
// 		center: [55.569805, 35.811725],
// 		// Уровень масштабирования. Допустимые значения:
// 		// от 0 (весь мир) до 19.
// 		zoom: 15
// 	});

// 	let myPlacemark = new ymaps.Placemark([55.569805, 35.811725], {
// 	},{
// 		// Опции.
// 		//balloonContentHeader: 'Mistoun',
// 		//balloonContentBody: '',
// 		//balloonContentFooter: '',
// 		//hasBalloon: true,
// 		//hideIconOnBalloonOpen: true,

// 		hasBalloon: false,
// 		hideIconOnBalloonOpen: false,
// 		// Необходимо указать этот тип макета.
// 		iconLayout: 'default#imageWithContent',
// 		// Свое изображение иконки метки.
// 		iconImageHref: 'img/map.svg',
// 		// Размеры метки.
// 		iconImageSize: [40, 40],
// 		// Смещение верхнего левого угла иконки относительно
// 		// ее "ножки" (точки привязки).
// 		iconImageOffset: [-20, -20],
// 		// Смещение слоя с содержимым относительно слоя с картинкой.
// 		iconContentOffset: [0, 0],
// 	});
// 	myMap.geoObjects.add(myPlacemark);
// 	myMap.behaviors.disable('scrollZoom');
// }





	


	

		
