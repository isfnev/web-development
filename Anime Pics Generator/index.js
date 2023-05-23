const btnEl = document.querySelector('.btn');
const animeImgEl = document.querySelector('.anime-img');
const animeNameEl = document.querySelector('.anime-name');
const animeContainerEl = document.querySelector('.anime-container');

const fetchAPI = async function(){

    try {

        btnEl.disabled = true ;
        btnEl.innerText = 'Loading...';
        animeNameEl.innerText = 'Updating...';
        const url = 'https://api.catboys.com/img';
        const response = await fetch(url);
        const data = await response.json();
        animeImgEl.src = data.url;
        animeNameEl.innerText = data.artist ;
        animeContainerEl.style.display = 'block';
        btnEl.disabled = false ;
        btnEl.innerText = 'Get Anime';

    } catch(error) {
        console.log(error);
    }
}

btnEl.addEventListener('click',()=>{
    fetchAPI();
});