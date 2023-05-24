const btnEl = document.querySelector('.btn');
const animeImgEl = document.querySelector('.anime-img');
const animeNameEl = document.querySelector('.anime-name');
const animeContainerEl = document.querySelector('.anime-container');

const fetchAPI = async function(){

    try {

        btnEl.disabled = true ;
        btnEl.innerText = 'Loading...';
        animeImgEl.src = "/images/spinner.svg";
        animeNameEl.innerText = 'Updating...';
        const url = 'https://api.catboys.com/img';
        const data = await fetch(url).then(res=>res.json());
        animeImgEl.src = data.url;
        animeNameEl.innerText = data.artist ;
        animeContainerEl.style.display = 'block';
        btnEl.disabled = false ;
        btnEl.innerText = 'Get Anime';

    } catch(error) {
        animeContainerEl.style.display = 'none' ;
        btnEl.innerText = 'an error happened, try again later';
        btnEl.disabled = false ;
    }
}

btnEl.addEventListener('click',()=>{
    fetchAPI();
});