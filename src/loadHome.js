import FoodImg from './pexels-edward-eyer-1049626.jpg' 

export default function loadHome() {
    const contentDiv = document.getElementById("content");
    
    const boxContent = document.createElement("div");
    boxContent.id = "box-content";
    contentDiv.appendChild(boxContent);

    let h1 = document.createElement("h1");
    h1.textContent = '🌟 Welcome to "Epicurean Haven" 🌟';
    boxContent.appendChild(h1);

    let h2 = document.createElement("h2");
    h2.textContent = 'Where Culinary Dreams Come True!';
    boxContent.appendChild(h2);

    let p = document.createElement("p");
    p.textContent = "Nestled in the heart of the city, Epicurean Haven is not just a restaurant; it's a gastronomic sanctuary that transcends the ordinary. Step into a world where flavors dance on your palate, and every bite is a symphony of culinary brilliance.";
    boxContent.appendChild(p);

    let h3 = document.createElement("h3");
    h3.textContent = '🍽️ **Exquisite Culinary Mastery:**';
    boxContent.appendChild(h3);

    p = document.createElement("p");
    p.textContent = "Prepare to embark on a culinary journey like no other. Our talented chefs, hailing from diverse backgrounds, have crafted a menu that marries tradition with innovation. From sizzling appetizers that tease your taste buds to decadent desserts that leave you craving more, every dish is a masterpiece.";
    boxContent.appendChild(p);

    h3 = document.createElement("h3");
    h3.textContent = '🌍 **Global Fusion, Local Passion:**';
    boxContent.appendChild(h3);

    p = document.createElement("p");
    p.textContent = "Epicurean Haven proudly embraces global influences while staying true to our local roots. Savory spices, fresh produce, and expertly curated ingredients come together to create a harmonious blend of international flavors. Whether you're a fan of Mediterranean delights, Asian-inspired wonders, or classic comfort food with a twist, our menu caters to all palates.";
    boxContent.appendChild(p);

    h3 = document.createElement("h3");
    h3.textContent = '🥂 **Ambiance Beyond Compare:**';
    boxContent.appendChild(h3);

    p = document.createElement("p");
    p.textContent = "Immerse yourself in an atmosphere that exudes sophistication and warmth. The contemporary design, ambient lighting, and thoughtfully curated decor create an environment that is both inviting and refined. Whether you're celebrating a special occasion or enjoying a casual dinner with friends, Epicurean Haven provides the perfect backdrop for memorable moments.";
    boxContent.appendChild(p);

    h3 = document.createElement("h3");
    h3.textContent = '🍷 **Exceptional Libations:**';
    boxContent.appendChild(h3);

    p = document.createElement("p");
    p.textContent = "Complement your dining experience with a selection of handcrafted cocktails, curated wines, and artisanal beverages. Our skilled mixologists take pride in concocting drinks that elevate your taste buds, providing the perfect accompaniment to the culinary symphony unfolding on your plate.";
    boxContent.appendChild(p);

    h3 = document.createElement("h3");
    h3.textContent = '🌟 **Attentive Service:**';
    boxContent.appendChild(h3);

    p = document.createElement("p");
    p.textContent = "At Epicurean Haven, hospitality is an art. Our attentive and knowledgeable staff is committed to ensuring your dining experience is seamless and unforgettable. From recommendations that suit your preferences to accommodating special requests, we go above and beyond to exceed your expectations.";
    boxContent.appendChild(p);

    h3 = document.createElement("h3");
    h3.textContent = '🌈 **Unforgettable Memories Await:**';
    boxContent.appendChild(h3);

    p = document.createElement("p");
    p.textContent = "Epicurean Haven isn't just a restaurant; it's a celebration of culinary excellence and unforgettable moments. Join us for an experience that transcends the ordinary and creates memories that linger long after the last bite.";
    boxContent.appendChild(p);

    let img = document.createElement("img");
    img.src = FoodImg;
    boxContent.appendChild(img)

    p = document.createElement("p");
    p.textContent = "Indulge your senses. Discover Epicurean Haven – where every meal is a masterpiece, and every moment is an epicurean delight! 🍽️✨";
    boxContent.appendChild(p);
}