const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const navigation = document.querySelector('.navigation');
const hambutton = document.querySelector('#hambutton');

hambutton.addEventListener('click', () => {
  navigation.classList.toggle('close');
  hambutton.classList.toggle('open');
});

const products = [
    {
        id: "p1",
        name: "Hydrating serum Centella",
        category: "sensitive",
        description: "Soothes irritation and strengthens the skin barrier with Centella Asiatica extract.",
        price: "$24.00",
        imageUrl: "images/serum.webp"
    },
    {
        id: "p2",
        name: "Purifying Cleansing Gel",
        category: "oily",
        description: "Deep-cleans pores and controls excess oil without drying out the skin.",
        price: "$18.00",
        imageUrl: "images/cleanser.webp"
    },
    {
        id: "p3",
        name: "Nourishing Repairing Cream",
        category: "dry",
        description: "Cream with ceramides and natural oils for long-lasting facial hydration.",
        price: "$28.00",
        imageUrl: "images/cream.webp"
    },
    {
        id: "p4",
        name: "Soothing Chamomile Toner",
        category: "sensitive",
        description: "Balances the skin's pH and instantly reduces redness. Recommended for skin prone to rosacea.",
        price: "$20.00",
        imageUrl: "images/toner"
    },
    {
        id: "p5",
        name: "Detox Clay Mask",
        category: "oily",
        description: "Absorbs impurities and minimizes the appearance of enlarged pores.",
        price: "$22.00",
        imageUrl: "images/mask.webp"
    },
    {
        id: "p6",
        name: "Squalane Facial Oil",
        category: "dry",
        description: "Intense nourishment that restores the elasticity and softness of dry skin.",
        price: "$30.00",
        imageUrl: "images/oil.webp"
    },
];

const productContainer = document.querySelector("#product-container");

 function displayProducts(productsList) {
    if (!productContainer) return;

    productContainer.innerHTML= "";

    productList.forEach(product => {
        const productCard = `
         <article class= "product-card">
            <img src="${product.imageUrl}" alt="${product.name}" loading="lazy" width="300" height="250">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="category">Category: Skin ${product.category}</p>
                <p class="desc">${product.description}</p>
                <span class="price">${product.price}</span>
            </div>
         </article>
        `;
        productContainer.innerHTML += productCard;
    });
 }

 const filterButtons = document.querySelectorAll(".filter-btn");
   if (filterButtons.length > 0) {
    filteredButtons.forEach(button => {
        button.addEvenListener("click", (e) => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");

            const filterType = e.target.id;

            if (filterType === "all") {
                displayProducts(products);
            } else {
                const filtered = products.filter(item => item.category === filterType);
                displayProducts(filtered);
            }
        });
    });

    displayProducts(products);
 }