const jsonData = '../data.json';
const abilitiesElem = document.querySelector('[data-abilities]');

async function getJsonData() {
    const response = await fetch(jsonData);
    const data = await response.json();

    return data;
}

getJsonData().then(data => {
    data.forEach(( { icon, category, score} = d) => {
        abilitiesElem.innerHTML += `
            <div>
                <div class="icon-ability">
                    <img src="${icon}" alt="Graphic icon" aria-hidden="true">
                    <h3>${category}</h3>
                </div>
                <div class="score">
                    <p><span>${score}</span> / 100</p>
                </div>
            </div>
        `;
    });
});
