'use strict'

let btnBlocksArr = [...document.querySelectorAll('.button__block')];

let mainBtnsArr = [...document.querySelectorAll('.main__btn')];

let iconsBtnArr = [...document.querySelectorAll('.icon__btn')];

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

mainBtnsArr.forEach(btn => {
	btn.addEventListener('mousedown', () => {
		btn.classList.add('clicked');
	});
	btn.addEventListener('mouseup', () => {
		btn.classList.remove('clicked');
	})
});

console.log(mainBtnsArr)

iconsBtnArr.forEach(btn => {
	btn.addEventListener('mousedown', () => {
		btn.classList.add('clicked');
	});
	btn.addEventListener('mouseup', () => {
		btn.classList.remove('clicked');
	})
});


firstInput.addEventListener('focus', () => {
	let firstPageText = document.getElementById('first__pt');
	firstPageText.style.marginTop = '15.97vh';
})
firstInput.addEventListener('input', () => {
	let firstBtn = document.getElementById('first__btn');
	firstBtn.classList.add("focused");
});


secondInput.addEventListener('focus', () => {
	let secondBtn = document.getElementById('second__btn');
	secondBtn.style.marginTop = '15.97vh';
})
secondInput.addEventListener('input', () => {
	let secondBtn = document.getElementById('second__btn');
	secondBtn.classList.add("focused");
});


thirdInput.addEventListener('focus', () => {
	let thirdBtn = document.getElementById('third__btn');
	thirdBtn.style.marginTop = '15.97vh';
})
thirdInput.addEventListener('input', () => {
	let thirdBtn = document.getElementById('third__btn');
	thirdBtn.classList.add("focused");
});
