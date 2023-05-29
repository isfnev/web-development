const btnEl = document.getElementById('btn');
const appEl = document.getElementById('app');

const createNoteElement = function(){
    const element = document.createElement('textarea');
    element.classList.add('note');
    element.placeholder = 'Enter Note';
    console.log('clicked');
    
    return element;
}

const addNote = ()=>{
    const noteObj = {
        id:Math.floor(Math.random()*100000),
        content:'',
    };
    console.log('click');
    const noteEl = createNoteElement();
    appEl.insertBefore(noteEl, btnEl);
}

btnEl.addEventListener('click', addNote);