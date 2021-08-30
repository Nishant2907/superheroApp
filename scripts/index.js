document.querySelector('form').addEventListener('change', getApi);
document.getElementById('getApi').addEventListener('click', getApi);

const token = 'https://superheroapi.com/api.php/1320815831666438/search/';


function getApi() {
    var heroName = document.getElementById('heroName').value;

    var url = token + heroName;

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
            <div class=" text-center mx-2 my-0 p-0" id="${api.id}" style="color:white;">
                <img src="${api.image.url}" class="w-50 h-75">
                <h3>${api.name}</h3>
                <button class="btn btn-dark" id="heroDetails">More Details</button>
            </div>
           `;
            });
            document.getElementById('output').innerHTML = output;
        }).catch((err) => console.log(err))
}

