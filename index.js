document.querySelector('form').addEventListener('change', getApi);
document.getElementById('getApi').addEventListener('click', getApi);

const token = 'https://superheroapi.com/api.php/1320815831666438/search/';

// document.getElementById('heroDetails').addEventListener('click', heroData);

function getApi() {
    var heroName = document.getElementById('heroName').value;
    // console.log(heroName);

    var url = token + heroName;
    // console.log(url);

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let output = `
            <div>
            </div>
            `;
            dataApi = data["results"];
            Array.from(dataApi).forEach(function (api) {
                output += `
            <div class="jumbotron text-center mx-3" id="${api.id}">
                <img src="${api.image.url}" class="w-75 h-75">
                <h3>${api.name}</h3>
                <button class="btn btn-primary" id="heroDetails">More Details</button>
            </div>    
           `;
            });
            document.getElementById('output').innerHTML = output;
        }).catch((err) => console.log(err))
}

// Hero details
// document.getElementById('heroDetails').addEventListener(click, getDetails());
