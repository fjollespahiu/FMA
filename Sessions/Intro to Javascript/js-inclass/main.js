// fetch('https://dogapi.dog/api/v2/facts?limit=4')
// .then(res => res.json())
// .then((json)=>processData(json.data))

// function processData(data) {
//     let ul = document.createElement("ul");

//     data.forEach(element => {
//         let li = document.createElement("li");
//         li.textContent = element.attributes.body;
//         ul.appendChild(li);
//     });

//     document.body.appendChild(ul)
// }

fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>fakeStore(json));

// function fakeStore(data){
//     data.forEach(element => {
//         let card = document.createElement("div");
//         let title = document.createElement("h3");
//         let image = document.createElement("img");
//         let description = document.createElement("p");
//         let price = document.createElement("p");

//         title.textContent = element.title;
//         image.src = element.image;
//         description.textContent = element.description;
//         price.textContent = element.price;

//         card.appendChild(title);
//         card.appendChild(image);
//         card.appendChild(description);
//         card.appendChild(price);

//         document.body.appendChild(card)
//     });
// }

function fakeStore(data){
for (let i = 0; i < data.length; i++) {
    const element = data[i];
        
    let card = document.createElement("div");
    let title = document.createElement("h3");
    let image = document.createElement("img");
    let description = document.createElement("p");
    let price = document.createElement("p");

    title.textContent = element.title;
    image.src = element.image;
    description.textContent = element.description;
    price.textContent = element.price;

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(description);
    card.appendChild(price);

    document.body.appendChild(card);
}};
