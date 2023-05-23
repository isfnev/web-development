const ratingEls = document.querySelectorAll('.rating') ;
const btnEl = document.getElementById('btn');
const containerEl = document.getElementById('container');

let selectText = '';

ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener('click',(event)=>{
		removeActive();
		selectText = event.target.innerText || event.target.parentNode.innerText ;
		ratingEl.classList.add('active');
    });
});


function removeActive(){
 	ratingEls.forEach((ratingEl)=>{
 		ratingEl.classList.remove('active');
	});
}


btnEl.addEventListener('click',()=>{
	if ( selectText !== '' )
	{
		containerEl.innerHTML = `
		<strong>Thank you</strong>
		<br>
		<br>
		<strong>Feedback: ${selectText}</strong>
		<p>we'll use your feedback to improve our customer support</p>
		`;
	}
});