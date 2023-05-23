const inputEl = document.getElementById('input');
const titleEl = document.getElementById('title');
const meaningEl = document.getElementById('meaning');
const meaningContainerEl = document.getElementById('meaning-container');
const infoTextEl = document.getElementById('info-text');
const audioEl = document.getElementsByTagName('audio');

const fetchApi = async (word)=>{
    try{
        meaningContainerEl.style.display = 'none';
        infoTextEl.style.display = 'block' ;
        infoTextEl.innerText = 'searching the meaning the of \"'+word+'\"' ;
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const result = await response.json();
        
        if ( result.title )
        {
            titleEl.innerText = word ;
            meaningEl.innerText = 'N/A' ;
            audioEl[0].style.display = 'none';
        }
        else
        {
            titleEl.innerText = result[0].word;
            meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
            audioEl[0].src = result[0].phonetics[0].audio ;
        }
        meaningContainerEl.style.display = 'block' ;
        infoTextEl.style.display = 'none';

    } catch(error){
        infoTextEl.style.display = 'block';
        meaningContainerEl.style.display = 'none' ;
        infoTextEl.innerText = 'an error happened, try again later.'
    }
};

inputEl.addEventListener('keyup', (e)=>{
    if ( e.target.value && e.key == 'Enter' )
        fetchApi(e.target.value);
});