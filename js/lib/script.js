const burger = document.querySelector('.burger-menu'); // кнопка бургер меню
const menuList = document.querySelector('#menu'); // меню

burger.addEventListener('click', () => {
	menuList.classList.toggle('active');
})


/* swiper  reviews container*/
var swiper = new Swiper(".reviewsSwiper", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});


/* swiper discounts container*/
var swiper_discounts = new Swiper(".discounts_slider", {
	spaceBetween: 31,
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar",
		clickable: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		375: {
			slidesPerView: 1,
		},
		425: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
		1440: {
			slidesPerView: 5,
		},
		1920: {
			slidesPerView: 5,
		},
	}
});


/* tabs */
document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelector('.tabs');
	const tabsBtn = document.querySelectorAll('.tabs__btn');
	const tabsContent = document.querySelectorAll('.tabs__content');

	if (tabs) {
		tabs.addEventListener('click', e => {
			if (e.target.classList.contains('tabs__btn')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsBtn.forEach(el => el.classList.remove('tabs__btn--active'));
				document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
				tabsHandler(tabsPath);
			}
		})
	}

	const tabsHandler = path => {
		tabsContent.forEach(el => el.classList.remove('tabs__content--active'));
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
	}
})