'use strict'

let btnBlocksArr = [...document.querySelectorAll('.button__block')];

let mainBtnsArr = [...document.querySelectorAll('.main__btn')];

let iconsBtnArr = [...document.querySelectorAll('.icon__btn')];

let pagesArr = [...document.querySelectorAll('.page')];

let firstInput = document.getElementById('first__in');
let secondInput = document.getElementById('second__in');
let thirdInput = document.getElementById('third__in');

btnBlocksArr.forEach(b_block => {
	b_block.addEventListener('mousedown', () => {
		b_block.classList.add('active-border');
	})
	b_block.addEventListener('click', () => {
		b_block.classList.remove('active-border');
		btnBlocksArr.forEach(b => {b.classList.remove('active');})
		b_block.classList.add('active');
	})
});

btnBlocksArr.forEach(b_block => {
	b_block.addEventListener('touchstart', () => {
		b_block.classList.add('active-border');
	})
	b_block.addEventListener('touchend', () => {
		b_block.classList.remove('active-border');
		btnBlocksArr.forEach(b => {b.classList.remove('active');})
		b_block.classList.add('active');
	})
});

mainBtnsArr.forEach(btn => {
	btn.addEventListener('mousedown', () => {
		btn.classList.add('clicked');
	});
	btn.addEventListener('mouseup', () => {
		btn.classList.remove('clicked');
	})
});
mainBtnsArr.forEach(btn => {
	btn.addEventListener('touchstart', () => {
		btn.classList.add('clicked');
	});
	btn.addEventListener('touchend', () => {
		btn.classList.remove('clicked');
	})
});


iconsBtnArr.forEach(btn => {
	btn.addEventListener('mousedown', () => {
		btn.classList.add('clicked');
	});
	btn.addEventListener('mouseup', () => {
		btn.classList.remove('clicked');
	})
});
iconsBtnArr.forEach(btn => {
	btn.addEventListener('touchstart', () => {
		btn.classList.add('clicked');
	});
	btn.addEventListener('touchend', () => {
		btn.classList.remove('clicked');
	})
});




firstInput.addEventListener('focus', () => {
	let firstIBB = document.getElementById('first__ibb');
	firstIBB.style.height = '13.74vh';
})
firstInput.addEventListener('focusout', () => {
	let firstIBB = document.getElementById('first__ibb');
	firstIBB.style.height = '29.74vh';
})
firstInput.addEventListener('input', () => {
	let firstBtn = document.getElementById('first__btn');
	firstBtn.classList.add("focused");
});


secondInput.addEventListener('focus', () => {
	let secondIBB = document.getElementById('second__ibb');
	secondIBB.style.height = '14.84vh';
})
secondInput.addEventListener('focusout', () => {
	let secondIBB = document.getElementById('second__ibb');
	secondIBB.style.height = '30.84vh';
})
secondInput.addEventListener('input', () => {
	let secondBtn = document.getElementById('second__btn');
	secondBtn.classList.add("focused");
});


thirdInput.addEventListener('focus', () => {
	let thirdIBB = document.getElementById('third__ibb');
	thirdIBB.style.height = '12.75vh';
})
thirdInput.addEventListener('focusout', () => {
	let thirdIBB = document.getElementById('third__ibb');
	thirdIBB.style.height = '28.75vh';
})
thirdInput.addEventListener('input', () => {
	let thirdBtn = document.getElementById('third__btn');
	thirdBtn.classList.add("focused");
});
