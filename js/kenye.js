const kenye = () => {

    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQoute(data))
}


const displayQoute = data => {

    console.log(data);

    const blockQoute = document.getElementById('bq');

    blockQoute.innerText = data.quote;


}