const btnEl = document.getElementById('btn');
const appEl = document.getElementById('app');

const createNoteNode = ()=>{
	const element = document.createElement('textarea');
	element.classList.add('note');
	element.placeholder = 'Enter Note' ;

	return element;
}

const addNote = function(){
	const noteObj = {
		id:Math.floor(Math.random()*100000),
		content:'',
	}
	const newEl = createNoteNode() ;

	newEl.addEventListener('keyup', (event)=>{
		console.log(event.target.value);
	});

	appEl.insertBefore(newEl, btnEl);
}

addNote();

btnEl.addEventListener('click', addNote);