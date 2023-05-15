

    let navbar = document.querySelector('.navbar');
    document.querySelector('#menu-btn').onclick =() =>{
    	navbar.classList.toggle('active');
		cartItem.classList.remove('active');
	}

	let cartItem = document.querySelector('.cart-items-container');
	document.querySelector('#cart-btn').onclick =() =>{
		cartItem.classList.toggle('active');
		navbar.classList.remove('active');
	}

	window.onscroll = () =>{
		navbar.classList.remove('active');
		cartItem.classList.remove('active');
	}

	let videoList = document.querySelectorAll('.video-list-container .list');

	videoList.forEach(vid =>{
		vid.onclick = () =>{
			let src = vid.querySelector('.list-video').src;
			let title = vid.querySelector('.list-title').innerHTML;
			document.querySelector('.main-video-container .main-video').src = src;
			document.querySelector('.main-video-container .main-video').play();
			document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
		};
	});

