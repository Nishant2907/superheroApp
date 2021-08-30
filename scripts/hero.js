// Handling Hero details
document.addEventListener('click', (event) => {
    // Details button
    if (event.target.id == 'heroDetails') {
        var id = event.target.parentNode.id;
        window.open('./hero.html' + '?id=' + id, "_self");
        getDetails();
        // console.log(id);
    }
});


// extracting ID from the url
function extractId() {
    const url = location.search;
    var returnUrl = url.substring(url.indexOf('=') + 1);
    return returnUrl;
}
var api_id = extractId();

const api_url = 'https://superheroapi.com/api.php/1320815831666438/' + api_id;
// console.log(api_url);

// getDetails();

// function getDetails() {
console.log(api_url);
fetch(api_url)
    .then((res) => res.json())
    .then((data) => {
        let output = `
            <div class="jumbotron w-50 my-4 p-3 text-center" style="background:rgba(255,255,255,0.3);color:white;">
            <h2 class="pb-5">Hero Details</h2>
            <div class="row">
            <div class="col-lg-6 col-12 text-center">
            <img src="${data.image.url}" style="height:20rem;">  
            <h2 class="pt-3">${data.name}</h2>
            </div>
            <div class="col-lg-6 col-12 text-center">
            <h3>Stats</h3>
            <p>Intelligence: ${data.powerstats.intelligence}</p>
            <p>Strength: ${data.powerstats.strength}</p>
            <p>Strength: ${data.powerstats.strength}</p>
            <p>Speed: ${data.powerstats.speed}</p>
            <p>Durability: ${data.powerstats.durability}</p>
            <p>Power: ${data.powerstats.power}</p>
            <p>Combat: ${data.powerstats.combat}</p>
            </div>
            </div>
            </div>
            `;
        console.log('printing data', data);
        document.getElementById('heroDetail').innerHTML = output;
    }).catch((err) => console.log(err))
// }