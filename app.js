// ! TYPED JS and BUTTON Display

let btn = document.querySelector('.main-section .left-side .main-text .btn')


var typed1 = new Typed('#typed1', {
	strings: ['Witaj na mojej stronie!'],
	typeSpeed: 50,
	showCursor: false,
	onComplete: function () {
		setTimeout(function () {
			typed2.start()
		}, 500)
	},
})

var typed2 = new Typed('#typed2', {
	strings: ['Poznaj moją historię.'],
	typeSpeed: 50,
	showCursor: false,
	startDelay: 0,
	autoStart: false,
	onComplete: function () {
		setTimeout(function () {
			typed3.start()
		}, 500)
	},
})

var typed3 = new Typed('#typed3', {
	strings: ['Zainspiruj się zmianą!'],
	typeSpeed: 50,
	showCursor: false,
	startDelay: 0,
	autoStart: false,
	onComplete: function () {
		setTimeout(function () {
			btn.classList.add('visible')
		}, 500)
	},
})

// Start only the first, the rest will be triggered in onComplete
typed2.stop()
typed3.stop()

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
		nav.style.background = 'rgba(0, 0, 0, 0.5)'
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

// ! GRADIENT CIRCLE

const gradient = document.querySelector('.gradient-circle::before') // Pseudo-elementu nie wybierzesz wprost!
const circle = document.querySelector('.gradient-circle')
let t = 0
let direction = 1
function animate() {
	// t: 0 (lewy dół), 1 (prawy góra)
	t += 0.001 * direction
	console.log(t)
	if (t >= 1) {
		t = 1
		direction = -1
	}
	if (t <= 0) {
		t = 0
		direction = 1
	}

	// Interpolacja: x od 0% do 100%, y od 100% do 0%
	const x = 0 + 100 * t
	const y = 100 - 100 * t
	circle.style.setProperty('--gx', `${x}%`)
	circle.style.setProperty('--gy', `${y}%`)

	requestAnimationFrame(animate)
}
animate()
