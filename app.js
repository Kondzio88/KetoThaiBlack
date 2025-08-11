// ! TYPED JS and BUTTON Display

let description = document.querySelector('.main-section .main-text .description')

const arrayWord = [
	'Powiedz mi, co jesz, a powiem ci, kim jesteś — Jean Anthelme Brillat-Savarin (1825)',
	'Człowiek jest tym, co je. — Ludwig Feuerbach (1850)',
	'Dbaj o swoje ciało. To jedyne miejsce, w którym musisz żyć. — Jim Rohn',
	'Jeśli masz ciało — jesteś sportowcem. — Bill Bowerman',
	'Motywacja pozwala zacząć. Nawyk pozwala wytrwać. — Jim Ryun',
	'Jeśli to cię nie wyzywa — nie zmienia cię. — Fred DeVito',
	'Uncja prewencji warta jest funta leczenia. — Benjamin Franklin',
	'Chodzenie to najlepsze lekarstwo. — przypisywane Hipokratesowi',
	'Siła nie pochodzi z możliwości fizycznych, lecz z niezłomnej woli. — Mahatma Gandhi',
	'Jedzenie może być najbezpieczniejszą i najpotężniejszą formą lekarstwa — albo najwolniejszą trucizną. — Ann Wigmore',
	'Nie uciekniesz przed złą dietą. — powiedzenie fitness',
	'Brzuch robi się w kuchni. — powiedzenie fitness',
	'Kto ma zdrowie, ma nadzieję; kto ma nadzieję, ma wszystko. — przysłowie arabskie',
	'Najlepszy plan to ten, którego potrafisz się trzymać. — powiedzenie dietetyczne',
	'Sen jest najlepszą medytacją. — XIV Dalajlama',
	'Ci, którzy nie znajdują czasu na ćwiczenia, prędzej czy później będą musieli znaleźć czas na chorobę. — Edward Stanley (XV Earl of Derby), 1873',
]

var typed = new Typed('.main-section .main-text .description', {
	strings: arrayWord,
	typeSpeed: 35,
	backSpeed: 20,
	backDelay: 1500,
	loop: true,
	smartBackspace: false,
})

// ! COUNT NUMBER CARDS

let valueDispays = document.querySelectorAll('.number')

let interval = 3000
let countingFlag = false

function countingNumbers() {
	valueDispays.forEach(value => {
		let startValue = 0
		let endValue = parseInt(value.getAttribute('data-value'))

		let duration = Math.floor(interval / endValue)
		let counter = setInterval(() => {
			startValue += 1
			value.textContent = startValue
			if (startValue == endValue) {
				clearInterval(counter)
			}
		}, duration)
	})
}

// ! SCROLL LINKS ACTIVE AND SECTION FEATURES

let sections = document.querySelectorAll('section')
let links = document.querySelectorAll('header nav .nav-links a')

window.addEventListener('scroll', function () {
	sections.forEach(sec => {
		let top = this.scrollY
		let offset = sec.offsetTop
		let height = sec.offsetHeight
		let id = sec.id

		if (top >= offset / 2 && top <= offset + height) {
			if (id == 'card-section' && !countingFlag) {
				countingNumbers()
				countingFlag = true
			}
		} else if (id == 'card-section' && top < offset / 2) {
			countingFlag = false
		}
	})
})

// ! NAVIGATION SCROLL DOWN

let nav = document.querySelector('nav')

window.addEventListener('scroll', () => {
	if (window.scrollY > 150) {
		nav.style.background = 'rgba(0, 0, 0, 1)'
		nav.style.transition = 'all 1s'
	} else if (window.scrollY < 150 && !navLinks.classList.contains('active')) {
		nav.style.background = 'transparent'
		nav.style.transition = 'all 1s'
	}
})

// ! HAMBURGER MENU AND NAV LINKS MOBILE

const openMenuIcon = document.querySelector('.bx-menu')
const closeMenuIcon = document.querySelector('.bx-x')
const navLinks = document.querySelector('.nav-links')

closeMenuIcon.style.display = 'none'

openMenuIcon.addEventListener('click', () => {
	navLinks.classList.add('active')
	openMenuIcon.style.display = 'none'
	closeMenuIcon.style.display = 'block'
	closeMenuIcon.addEventListener('click', () => {
		navLinks.classList.remove('active')
		openMenuIcon.style.display = 'block'
		closeMenuIcon.style.display = 'none'
	})
	if (navLinks.classList.contains('active')) {
		nav.style.background = 'rgba(0, 0, 0, 1)'
	}
})

// ! LINKS A EVENTLISTENER

links.forEach(link => {
	link.addEventListener('click', () => {
		if (navLinks.classList.contains('active')) {
			navLinks.classList.remove('active')
			closeMenuIcon.style.display = 'none'
			openMenuIcon.style.display = 'block'
		}
	})
})

// ! IMAGE CARD KETO CHANGES

const imagesKeto = ['images/keto1.jpg', 'images/keto2.jpg', 'images/keto3.jpg', 'images/keto4.jpg', 'images/keto5.jpg']

const imagesAdventure = [
	'images/imagesAdventure/adv1.jpg',
	'images/imagesAdventure/adv2.jpg',
	'images/imagesAdventure/adv3.jpg',
	'images/imagesAdventure/adv4.jpg',
	'images/imagesAdventure/adv5.jpg',
	'images/imagesAdventure/adv6.jpg',
	'images/imagesAdventure/adv7.jpg',
	'images/imagesAdventure/adv8.jpg',
	'images/imagesAdventure/adv9.jpg',
	'images/imagesAdventure/adv10.jpg',
	'images/imagesAdventure/adv11.jpg',
	'images/imagesAdventure/adv12.jpg',
	'images/imagesAdventure/adv13.jpg',
	'images/imagesAdventure/adv14.jpg',
	'images/imagesAdventure/adv15.jpg',
	'images/imagesAdventure/adv16.jpg',
	'images/imagesAdventure/adv17.jpg',
	'images/imagesAdventure/adv18.jpg',
	'images/imagesAdventure/adv19.jpg',
	'images/imagesAdventure/adv20.jpg',
	'images/imagesAdventure/adv21.jpg',
	'images/imagesAdventure/adv22.jpg',
]

const secondCardInner = document.querySelector('.image-keto')
const thirdCardInner = document.querySelector('.image-adventure')
let lastIndex = -1

function changeBackgroundImage(array, obj) {
	let randomIndex
	do {
		randomIndex = Math.floor(Math.random() * array.length)
	} while (randomIndex === lastIndex)

	const randomImage = array[randomIndex]

	lastIndex = randomIndex
	obj.classList.add('fade-out')

	setTimeout(() => {
		obj.style.backgroundImage = `url(${randomImage})`
		obj.classList.remove('fade-out')
	}, 3000)
}

// Uruchamianie funkcji co sekundę
setInterval(() => changeBackgroundImage(imagesKeto, secondCardInner), 3000)

setInterval(() => changeBackgroundImage(imagesAdventure, thirdCardInner), 3000)
