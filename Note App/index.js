const btnEl = document.getElementById('btn');
const appEl = document.getElementById('app');

const saveNote = (notes)=>{
    localStorage.setItem('note-app', JSON.stringify(notes));
};

const deleteNote = function(id, note){
    saveNote(getNote().filter((note)=>note.id != id));
    appEl.removeChild(note);
}

function updateNote(id, value){
    const notes = getNote();
    const noteObj = notes.filter((note)=>note.id == id)[0];
    noteObj.content = value;
    saveNote(notes);
}

const createNoteElement = (id, content)=>{
    const element = document.createElement('textarea');
    element.classList.add('note');
    element.placeholder = 'Enter Note' ;
    element.value = content;

    element.addEventListener('dblclick', ()=>{
        if ( confirm('Do you want to delete this note') )
            deleteNote(id, element);
    });

    element.addEventListener('input', (event)=>{
        updateNote(id, event.target.value);
    });

    return element ;
}

getNote().forEach((note)=>{
    appEl.insertBefore(createNoteElement(note.id, note.content), btnEl);
});

function getNote()
{
    return JSON.parse(localStorage.getItem('note-app') || '[]');
}

const addNote = function(){
    const notes = getNote();
    const noteObj = {
        id:Math.floor(Math.random()*100000),
        content:'',
    }
    const noteEl = createNoteElement(noteObj.id, noteObj.content);
    appEl.insertBefore(noteEl, btnEl);
    notes.push(noteObj);
    saveNote(notes);
}

btnEl.addEventListener('click', addNote);