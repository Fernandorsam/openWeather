const searchForm = document.querySelector('#search-form > form');
const inputForm = searchForm.querySelector('#input-localizacao');
const tempoInfo = document.querySelector('#tempo-info')

//function to manipulaton the API openWeather
async function dataOpenWeather(body){
try {

    //page don't reload after click in button of <form>
    body.preventDefault();

    // validating the input of <form>
     const inputLocale = inputForm.value;
    if(inputLocale.length < 3){
        alert('→ Erro!!!\nDigite novamente!!!');
        return;
    }
             
  // acessing data of API with request 'fetch()' 
  const response =   await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputLocale}&appid=c19fa009a9da994bcc1c761635944fb3&lang=pt_br&units=metric`);

   // get data of API in format 'json'
   const data =  await response.json();

   //insert descripton of API to user view 
   tempoInfo.innerHTML = `
   <div class="tempo-data">
   <h2>${data.name}</h2>
   <span>${Math.round(data.main.temp)}°C</span>

</div>
<div class="desc-img">
   <h2>${data.weather[0].description}</h2>
   <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=" icone do tempo agora">
</div>`;

//clear the input after typed
inputForm.value=''
    
} catch (error) {
    alert("Erro ao Buscar Localidade :( ");
    console.log(error);
}
}

//events
searchForm.addEventListener('submit',dataOpenWeather)




