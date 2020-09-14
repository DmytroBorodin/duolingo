'use strict'

let btnBlocksArr = [...document.querySelectorAll('.button__block')];

let mainBtnsArr = [...document.querySelectorAll('.main__btn')];

let iconsBtnArr = [...document.querySelectorAll('.icon__btn')];

let pagesArr = [...document.querySelectorAll('.page')];

let inputsArr = [...document.querySelectorAll('.input')];



let switchPage = (el) => {
	pagesArr.forEach(page => {
		page.classList.add('disabled');
	})
	el.classList.remove('disabled');
}

btnBlocksArr.forEach(b_block => {
	b_block.addEventListener('mousedown', () => {
		b_block.classList.add('active-border');
	})
	b_block.addEventListener('click', () => {
		b_block.classList.remove('active-border');
		btnBlocksArr.forEach(b => {b.classList.remove('active');})
		b_block.classList.add('active');
		switchPage(pagesArr[1]);
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
		switchPage(pagesArr[1]);
	})
});

mainBtnsArr.forEach(btn => {
	btn.addEventListener('mousedown', () => {
		btn.classList.add('clicked');
	});
	btn.addEventListener('mouseup', () => {
		let scrollBtnAttr = btn.getAttribute('btn');
		for (let i = 0; i < pagesArr.length; i++) {
			let scrollPageAttr = pagesArr[i].getAttribute('scrollPage');
			if (scrollBtnAttr === scrollPageAttr) {
				switchPage(pagesArr[i]);
				break;
			}
		}
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
		switchPage(pagesArr[4]);
	})
});
iconsBtnArr.forEach(btn => {
	btn.addEventListener('touchstart', () => {
		btn.classList.add('clicked');
	});
	btn.addEventListener('touchend', () => {
		btn.classList.remove('clicked');
		switchPage(pagesArr[4]);
	})
});

inputsArr.forEach(inp => {
	inp.addEventListener('input', () => {
		let inputId = inp.getAttribute('id');
		for (let i = 0; i < mainBtnsArr.length; i++) {
			let btnAttr = mainBtnsArr[i].getAttribute('btn');
			if (btnAttr === inputId) {
				mainBtnsArr[i].classList.add('focused');
				break;
			}
		}
	})
});
