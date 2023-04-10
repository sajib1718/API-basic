const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => display(data))


}

const display = countries => {

    const countriesContainer = document.getElementById('countires-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
         <h3>name : ${country.name.common} </h3>
         <h3>capital name : ${country.capital} </h3>
         <button onclick="lcd('${country.cca2}')">Details</button>
        
        
        `
        countriesContainer.appendChild(countryDiv);

    });

    // for (const country of countries) {
    //     console.log(country);
    // }

}
const lcd = (code) => {

    // https://restcountries.com/v3.1/alpha/{code} 

    const url = ` https://restcountries.com/v3.1/alpha/${code}`
    console.log(url);
}


loadCountries();