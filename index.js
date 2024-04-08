let products = [];

const uimaker = () => {
    document.getElementById("data").innerHTML=""
    for (let i = 0; i < products.length; i++) {
        let title = document.createElement("th");
        title.innerHTML = products[i].title;
        let description = document.createElement("th");
        description.innerHTML = products[i].description;
        let brand = document.createElement("th");
        brand.innerHTML = products[i].brand;
        let price = document.createElement("th");
        price.innerHTML = products[i].price;
        let img = document.createElement("img");
        img.src = products[i].img;
        let btt = document.createElement("button");
        btt.innerHTML = "Delete";
        btt.addEventListener("click", () => {
            div.remove();
        });

        let div = document.createElement("tr");
        div.append(title, description, brand, price, img, btt);
        document.getElementById("data").appendChild(div);
    }
};

const uidata = (e) => {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let brand = document.getElementById("brand").value;
    let price = document.getElementById("price").value;
    let img = document.getElementById("img").value;

    let product = {
        title: title,
        description: description,
        brand: brand,
        price: price,
        img: img
    };
    products.push(product);
    uimaker();
};

document.getElementById("formData").addEventListener("submit", uidata);
