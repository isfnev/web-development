const btnEl = document.getElementById('btn');
const emojiNameEl = document.getElementById('emoji-name');

const emojis = [];

async function getEmoji(){

    const response = await fetch('https://emoji-api.com/emojis?access_key=f1c87309aaf0df713270cdac482214c9d41982f9');
    const data = await response.json();
        
    for ( let i = 0 ; i <= 1500 ; i++ )
        emojis.push({
            pic:data[i].character,
            name:data[i].unicodeName
        });
}

getEmoji();

btnEl.addEventListener('click', ()=>{
    const randomIndex = Math.floor(Math.random()*1500);
    btnEl.innerHTML = emojis[randomIndex].pic ;
    emojiNameEl.innerText = emojis[randomIndex].name;
});