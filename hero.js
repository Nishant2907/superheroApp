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
            <div>
            <h3>Hero Details</h3>
            </div>
            <img src="${data.image.url}" style="height:10rem;">            
            <h2>Name: ${data.name}</h2>
            <p>Intelligence: ${data.powerstats.intelligence}</p>
            <p>Strength: ${data.powerstats.strength}</p>
            <p>Strength: ${data.powerstats.strength}</p>
            <p>Speed: ${data.powerstats.speed}</p>
            <p>Durability: ${data.powerstats.durability}</p>
            <p>Power: ${data.powerstats.power}</p>
            <p>Combat: ${data.powerstats.combat}</p>

            `;
            console.log('printing data',data);
        document.getElementById('heroDetail').innerHTML = output;
    }).catch((err) => console.log(err))
// }