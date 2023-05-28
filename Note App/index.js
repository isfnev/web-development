const btnEl = document.getElementById('btn');
const appEl = document.getElementById('app');
const noteEls = document.querySelectorAll('.note');

noteEls.forEach((noteEl)=>{
    noteEl.addEventListener('dbclick', ()=>{
        // remove this element

        // remove the data of this element from local storage

    });
});

function addNote()
{
    const newNote = document.createElement('textarea');
    newNote.classList.add('note');
    newNote.placeholder='Enter Note';
    newNote.rows='10';
    newNote.cols='30';

    appEl.insertBefore(newNote, btnEl);
}

btnEl.addEventListener('click', addNote);