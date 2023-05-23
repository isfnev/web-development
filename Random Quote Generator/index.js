const btnEl = document.getElementById('btn');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');


btnEl.addEventListener('click', async ()=>{

    quoteEl.innerText = 'Updating...';
    authorEl.innerText = 'Updating...' ;
    btnEl.innerText = 'Loading...';
    btnEl.disabled = true ;

    try{
        const response = await fetch('https://api.quotable.io/random').then((res)=>res.json());
        quoteEl.innerText = response.content;
        authorEl.innerText = `~ ${response.author}`;
    } catch(error){
        quoteEl.innerText = 'an error happened' ;
        authorEl.innerText = 'an error happened';
    }

    btnEl.innerText = 'get a quote' ;
    btnEl.disabled = false ;
});