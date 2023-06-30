// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

//Hamburger Menu onclick 
document.querySelector('#hamburger-menu').
onclick = (e) => {
	e.preventDefault();
	navbarNav.classList.toggle('active');
};

// close element
const hamburger = document.querySelector('#hamburger-menu');
const searchBtn = document.querySelector('#search-btn');
const shoppingCartBtn = document.querySelector('#shopping-cart-btn');

document.addEventListener('click', function(e) {
	if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active');
	}
	if(!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
		searchForm.classList.remove('active');
	}
	if(!shoppingCartBtn.contains(e.target) && !cart.contains(e.target)) {
		cart.classList.remove('active');
	}
});

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.getElementById('search-btn').onclick = (e) => {
	e.preventDefault();
	searchForm.classList.toggle('active');
	searchBox.focus();
}

const cart = document.querySelector('.shopping-cart');

document.getElementById('shopping-cart-btn').onclick = (e) => {
	e.preventDefault();
	cart.classList.toggle('active')
}

const itemDetailModal = document.getElementById('item-detail-modal')
const itemDetailBtn = document.querySelectorAll('.item-detail-btn')

// itemDetailBtn.onclick = (e) => {
// 	e.preventDefault()
// 	itemDetailModal.style.display = 'flex'
// }

itemDetailBtn.forEach(e => {
	e.onclick = (i) => {
		i.preventDefault()
		itemDetailModal.style.display = 'flex'
	}
})

document.querySelector('.modal .close-icon').onclick = (e) => {
	e.preventDefault()
	itemDetailModal.style.display = 'none'
}

window.onclick = (e) => {
	if(e.target === itemDetailModal) {
		itemDetailModal.style.display = 'none'
	}
}