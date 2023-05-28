const btnEl = document.getElementById('btn');

const addNote = function(){
	const noteObj = {
		id:Math.floor(Math.random()*100000),
		content:'',
	}
	
}

btnEl.addEventListener('click', addNote);