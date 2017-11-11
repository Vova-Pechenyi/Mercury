$(document).ready(function() {
	var header = $('.header');
	var login = $('.login_btn');
	$(window).scroll(function(e) {
		var h = window.pageYOffset;
		if(h > 300) {
			header.addClass('header_rgba');
			header.css('padding','5px 80px');
		}else {
			header.removeClass('header_rgba');
			header.css('padding','20px 80px');
		};
	});
	
	login.click(function() {
		$('.shadow_block').fadeIn('slow');
		$('.authentication').fadeIn('slow');
	});
	
	$('.shadow_block').click(function() {
		$('.shadow_block').fadeOut('slow');
		$('.authentication').fadeOut('slow');
		$('.info_user').fadeOut('slow');
	});
	
	
	class User {
		constructor() {
			this.name = 'Vova';
			this.lastName = 'Pechenyi';
			this.old = 20;
			this.password = 1234;
		}
	}
	var user = new User();
	
	$('.submit_form').click(function() {
		var login_inpt = $('.login_inpt').val();
		var password_inpt = $('.password_inpt').val();
		$('.authentication').fadeOut('slow');
		$('.info_user_block ul li').addClass('grid');
		if(login_inpt == user.name && password_inpt == user.password) {
			$('.info_user').fadeIn('slow');
			$('.user_name').text(user.name);
			$('.user_lastname').text(user.lastName);
			$('.user_old').text(user.old);
			$('.about_password').text(user.password);
		}else {
			alert('Вы ввели неверный логин или пароль');
			//$('.info_user').fadeOut('slow');
			$('.authentication').fadeIn('slow');
		};
		
	});
	
	
	$('.bars').click(function() {
		$('.local_menu').slideToggle(); 
	});
	
	
	
	
	
	
	
	
});