
window.onload = function () {

	let up = document.getElementById('popup_overlay');
	let closeBlock = document.getElementById('popup_close');
	closeBlock.onclick = popupClose;

	// Показываем блок

	function popup(){

		up.style.display = 'block';
		popupIn(1);
		
	}
	function popupClose(){

		popupOut(0);
	}


	 // Делаем плавную анимацию
	 
	 function popupIn(x){
			
		// Техническая переменная

		let pp = (up.style.opacity) ? parseFloat(up.style.opacity) : 0;

		if(pp < x){

			pp += 0.05;
			up.style.opacity = pp;
     // Поддержка не всех браузеров
			//setTimeout(popupIn,50,x);

			// для всех браузеров

			setTimeout(function(){

				popupIn(x);
			},50);
		}


	 }

	 function popupOut(x){
			
		// Техническая переменная

		let pp = (up.style.opacity) ? parseFloat(up.style.opacity) : 0;

		if(pp > x){

			pp -= 0.05;
			up.style.opacity = pp;
     // Поддержка не всех браузеров
			//setTimeout(popupIn,50,x);

			// для всех браузеров

			setTimeout(function(){

				popupOut(x);
			},50);
		}
     if(up.style.opacity == x){
			 pp.style.display == 'none';
		 }

	 }
	setTimeout(popup,2000);
}

