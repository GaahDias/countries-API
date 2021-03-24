'use strict';

//const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

function getCountryData(country) {

    const request = new XMLHttpRequest;
    request.open('GET', 'https://restcountries.eu/rest/v2/name/' + country); //request de info de paises
    request.send(); //enviando a request

    request.addEventListener('load', () => {            //setando um listener para quando a informacao chegar
        const [data] = JSON.parse(request.responseText);  //"load", executar o codigo para printar no meu console as infos recebidas
        console.log(data);

        const html = `
            <article class="country">
                <img class="country__img" src="${data.flag}" />
                <div class="country__data">
                    <h3 class="country__name">${data.name}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${((data.population) / 1000000).toFixed(1)}M</p>
                    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
                </div>
            </article>
            `;
        countriesContainer.insertAdjacentHTML('afterbegin', html);
        countriesContainer.style.opacity = 1;
    })
};

//pegando dados dos paises
getCountryData('Brasil');
getCountryData('France');
getCountryData('Israel');
getCountryData('Australia');
getCountryData('Germany');