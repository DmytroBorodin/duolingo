'use strict'

let btnBlocksArr = [...document.querySelectorAll('.button__block')];

let mainBtnsArr = [...document.querySelectorAll('.main__btn')];

let iconsBtnArr = [...document.querySelectorAll('.icon__btn')];

let pagesArr = [...document.querySelectorAll('.page')];


let firstInput = document.getElementById('first__in');
let secondInput = document.getElementById('second__in');
let thirdInput = document.getElementById('third__in');

let firstBtn = document.getElementById('first__btn');
let secondBtn = document.getElementById('second__btn');
let thirdBtn = document.getElementById('third__btn');
let allowBtn = document.getElementById('allow__btn');

let scrollIt = (el) => {
	window.scrollTo({
		behavior: 'smooth',
		top: el.offsetTop,
		left: 0,
	})
}

btnBlocksArr.forEach(b_block => {
	b_block.addEventListener('mousedown', () => {
		b_block.classList.add('active-border');
	})
	b_block.addEventListener('click', () => {
		b_block.classList.remove('active-border');
		btnBlocksArr.forEach(b => {b.classList.remove('active');})
		b_block.classList.add('active');
		scrollIt(pagesArr[1]);
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
		scrollIt(pagesArr[1]);
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
		scrollIt(pagesArr[4]);
	})
});
iconsBtnArr.forEach(btn => {
	btn.addEventListener('touchstart', () => {
		btn.classList.add('clicked');
	});
	btn.addEventListener('touchend', () => {
		btn.classList.remove('clicked');
		scrollIt(pagesArr[4]);
	})
});


firstBtn.addEventListener('click', () => {
	scrollIt(pagesArr[2]);
});
secondBtn.addEventListener('click', () => {
	scrollIt(pagesArr[3]);
});
allowBtn.addEventListener('click', () => {
	scrollIt(pagesArr[5]);
})


firstInput.addEventListener('focus', () => {
	scrollIt(pagesArr[1]);
	firstIBB.style.height = '13.74vh';
})
firstInput.addEventListener('focusout', () => {
	let firstIBB = document.getElementById('first__ibb');
	firstIBB.style.height = '29.74vh';
})
firstInput.addEventListener('input', () => {
	firstBtn.classList.add("focused");
});


secondInput.addEventListener('focus', () => {
	scrollIt(pagesArr[2]);
	secondIBB.style.height = '14.84vh';
})
secondInput.addEventListener('focusout', () => {
	let secondIBB = document.getElementById('second__ibb');
	secondIBB.style.height = '30.84vh';
})
secondInput.addEventListener('input', () => {
	secondBtn.classList.add("focused");
});


thirdInput.addEventListener('focus', () => {
	scrollIt(pagesArr[5]);
	thirdIBB.style.height = '12.75vh';
})
thirdInput.addEventListener('focusout', () => {
	let thirdIBB = document.getElementById('third__ibb');
	thirdIBB.style.height = '28.75vh';
})
thirdInput.addEventListener('input', () => {
	thirdBtn.classList.add("focused");
});
