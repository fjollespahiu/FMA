const selectTemp = document.querySelector('#selectTemp');
const temp = document.querySelector('#temp');

for (let i = 0; i <= 20; i++) {
    selectTemp.innerHTML += `
        <option value="${i}">Temp: ${i}</option>
    `;
}

function changeTemp(t){
    temp.textContent = t;
}