const btnEl = document.getElementById('btn') ;
const jokeEl = document.getElementById('joke');

apiKey="pFFx0VThAIGz5wd7ArAsNg==yAQyTW8GmyVFG5bV";
url="https://api.api-ninjas.com/v1/dadjokes?limit=1";

options = {
    method:'GET',
    headers:{'X-Api-Key':apiKey}
}

async function getJoke()
{
    jokeEl.innerHTML = 'Updating...' ;
    btnEl.innerHTML = 'Loading...' ;
    btnEl.disabled=true;

    try{
        const response = await fetch(url, options);
        const data = await response.json();

        jokeEl.innerHTML = data[0].joke;
        btnEl.innerHTML = 'Tell me a joke' ;
        btnEl.disabled=false;
    } catch(error){
        jokeEl.innerHTML = 'There is some problem, try again later' ;
        btnEl.innerHTML="Tell me a joke";
        btnEl.disabled=false;
    }
}

btnEl.addEventListener('click', getJoke);