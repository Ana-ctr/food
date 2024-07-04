
import React, { useState } from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';

const restaurantsData = [
    { 
        id: 1, 
        name: "Burger House", 
        image: 'https://avatars.mds.yandex.net/i?id=de7291126909fef3f79f0cb8f4b0d3ce68157b0752db389e-12715029-images-thumbs&n=13', 
        menu: [
            { id: 1, name: "Classic Burger", price: 5, image: 'https://avatars.mds.yandex.net/i?id=6e3fff0eacfa90e8ed1659e00291cf913965938b-9908477-images-thumbs&n=13' },
            { id: 2, name: "Cheeseburger", price: 6, image: 'https://avatars.mds.yandex.net/i?id=8cbe2adaa12ba56e6b2faa849d8c1decced981b1-10172829-images-thumbs&n=13' },
            { id: 3, name: "French Fries", price: 3, image: 'https://avatars.mds.yandex.net/i?id=8197298f286fb385cd8c9dab57b1fafe3a1fb1c6-10893744-images-thumbs&n=13' }
        ] 
    },
    { 
        id: 2, 
        name: "Pizza Place", 
        image: 'https://avatars.mds.yandex.net/i?id=0a992d8a18129d52163c4fbe645acf737250856b-7133642-images-thumbs&n=13', 
        menu: [
            { id: 4, name: "Margherita Pizza", price: 8, image: 'https://avatars.mds.yandex.net/i?id=d6025aad2029e5bf925d6d671db8460e17326d38-10596448-images-thumbs&n=13' },
            { id: 5, name: "Pepperoni Pizza", price: 9, image: 'https://avatars.mds.yandex.net/i?id=a1307ded80dc60e64ed55369d7bc0472a0bdd486f5a7932b-12322699-images-thumbs&n=13' },
            { id: 6, name: "Garlic Bread", price: 4, image: 'https://avatars.mds.yandex.net/i?id=83ffe19d3084a94aab3ece274224a53bb311ce93-9203527-images-thumbs&n=13' }
        ] 
    },
    { 
        id: 3, 
        name: "Pasta Corner", 
        image: 'https://avatars.mds.yandex.net/i?id=c55076687cb41c165c6f4fa0ebf745d95c39ccc2-9181356-images-thumbs&n=13', 
        menu: [
            { id: 7, name: "Spaghetti Bolognese", price: 7, image: 'https://avatars.mds.yandex.net/i?id=94f9596ddd8de8fc7cf9808881b92cd63a02cbb6-8187817-images-thumbs&n=13' },
            { id: 8, name: "Penne Arrabbiata", price: 6, image: 'https://avatars.mds.yandex.net/i?id=436e99545a86c352f95211f4ca0097137a200e709e9218bb-10930046-images-thumbs&n=13' },
            { id: 9, name: "Caesar Salad", price: 5, image: 'https://avatars.mds.yandex.net/i?id=92bb8f04083e96deaa31651075fbc2e4f5c7ceae-10702829-images-thumbs&n=13' }
        ] 
    },
    { 
        id: 4, 
        name: "Sushi Spot", 
        image: 'https://avatars.mds.yandex.net/i?id=f2c2e222cc0373edde4359d0551f511609220d505f27ec8c-13329543-images-thumbs&n=13', 
        menu: [
            { id: 10, name: "Sushi Roll", price: 12, image: 'https://avatars.mds.yandex.net/i?id=8ccc77d084e88c5c10dc460bf60e90f23d7998a0-10325593-images-thumbs&n=13' },
            { id: 11, name: "Miso Soup", price: 3, image: 'https://avatars.mds.yandex.net/i?id=9b812a90942a136f640a63aeaa68d716dbf22da42b8ea7c3-12447868-images-thumbs&n=13' }
        ] 
    },
    { 
        id: 5, 
        name: "Taco Stand", 
        image: 'https://avatars.mds.yandex.net/i?id=d496722b63e92b69801d0efb31cd46618fa21e73-9725170-images-thumbs&n=13', 
        menu: [
            { id: 12, name: "Taco", price: 4, image: 'https://avatars.mds.yandex.net/i?id=edae8fac18e33fb6c36ecbbe3ed2931af1dfa5c5-8744212-images-thumbs&n=13' },
            { id: 13, name: "Burrito", price: 8, image: 'https://avatars.mds.yandex.net/i?id=ac7ee9f34d0db6b2767ad2e0c7d3c9f806748ce9e123d9cb-4936065-images-thumbs&n=13' }
        ] 
    },
    { 
        id: 6, 
        name: "Salad Shack", 
        image:' https://avatars.mds.yandex.net/i?id=252956062cec7f5e91ff007e9b4e11dceb0dee53-4912286-images-thumbs&n=13', 
        menu: [
            { id: 14, name: "Caesar Salad", price: 6, image: 'https://avatars.mds.yandex.net/i?id=635ab09ddd03f11f092579a384e8e0dd8ece7d024e9e06db-3925299-images-thumbs&n=13' },
            { id: 15, name: "Greek Salad", price: 7, image: 'https://avatars.mds.yandex.net/i?id=e4d9454f90bd0bd0b56232b3b702e5c171b0f2f459b089d1-10503706-images-thumbs&n=13' }
        ] 
    },
    { 
        id: 7, 
        name: "Steakhouse", 
        image: 'https://avatars.mds.yandex.net/i?id=590a9576fe93cbad7a6be61860640c6ced25f008-9229611-images-thumbs&n=13', 
        menu: [
            { id: 16, name: "Ribeye Steak", price: 20, image: 'https://avatars.mds.yandex.net/i?id=4cb26d457b25514a6d6f4b3785629d99e06e26d22313809e-5910641-images-thumbs&n=13' },
            { id: 17, name: "Mashed Potatoes", price: 5, image: 'https://avatars.mds.yandex.net/i?id=bb63c3018f69bdc68fe733fd7c4a5c27c859b9b0-12612889-images-thumbs&n=13'}
        ] 
    },
    { 
        id: 8, 
        name: "Seafood Delight", 
        image: 'https://avatars.mds.yandex.net/i?id=c8ecba14881999ea5aa92e28682e30d7066ab271-12628905-images-thumbs&n=13', 
        menu: [
            { id: 18, name: "Grilled Salmon", price: 18, image: 'https://avatars.mds.yandex.net/i?id=7f10c00b9a7c5bc39e3b471869ce26a22081e065-10931123-images-thumbs&n=13' },
            { id: 19, name: "Shrimp Cocktail", price: 10, image: 'https://avatars.mds.yandex.net/i?id=09e70c3b96f4a45c10ca124c25f1e18692dea8c2-12543315-images-thumbs&n=13' }
        ] 
    },
    { 
        id: 9, 
        name: "Indian Cuisine", 
        image: 'https://avatars.mds.yandex.net/i?id=a30253d1a047e1f7a4b31cdc6d9299a9c26e75c2-5236398-images-thumbs&n=13', 
        menu: [
            { id: 20, name: "Butter Chicken", price: 14, image: 'https://avatars.mds.yandex.net/i?id=134eef09d277aabc06e007b99e9971895cc77fe2608cbdbd-11923369-images-thumbs&n=13' },
            { id: 21, name: "Naan Bread", price: 2, image: 'https://avatars.mds.yandex.net/i?id=a99056e24dad6c5049b4b745499537eee139d096-4276765-images-thumbs&n=13' }
        ] 
    },
    { 
        id: 10, 
        name: "Chinese Buffet", 
        image: 'https://avatars.mds.yandex.net/i?id=489c5bbea68d40adfe76a9e851d76e7285a13960-8376176-images-thumbs&n=13', 
        menu: [
            { id: 22, name: "General Tso's Chicken", price: 12, image: 'https://avatars.mds.yandex.net/i?id=095d2423a8606875fb34c77b81f3b7bac75b685e-12935586-images-thumbs&n=13' },
            { id: 23, name: "Spring Roll", price: 3, image: 'https://avatars.mds.yandex.net/i?id=615f3071c5873bafbd94c09dec6284a40a92245b52cb6a3e-11547469-images-thumbs&n=13' }
        ] 
    }
];

function App1() {
    const [search, setSearch] = useState("");
    const [selectedMenu, setSelectedMenu] = useState([]);
    const [cart, setCart] = useState([]);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const filteredRestaurants = restaurantsData.filter(restaurant =>
        restaurant.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleRestaurantClick = (menu) => {
        setSelectedMenu(menu);
    };

    const handleAddToCart = (item) => {
        setCart([...cart, item]);
    };

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="App">
            <Header cartItemsCount={cart.length} />
            <main>
                <section>
                    <input
                        type="text"
                        placeholder="Search for a restaurant"
                        value={search}
                        onChange={handleSearchChange}
                        className="search-bar"
                    />
                    <div className="restaurant-list">
                        {filteredRestaurants.map(restaurant => (
                            <div
                                key={restaurant.id}
                                className="restaurant-item"
                                onClick={() => handleRestaurantClick(restaurant.menu)}
                                style={{ backgroundImage: `url(${restaurant.image})` }}
                            >
                                <div className="restaurant-name">{restaurant.name}</div>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <h2>Menu</h2>
                    <div className="menu-items">
                        {selectedMenu.map(item => (
                            <div key={item.id} className="menu-item" onClick={() => handleAddToCart(item)}>
                                {item.image && <img src={item.image} alt={item.name} className="menu-item-image" />}
                                <span>{item.name} - ${item.price}</span>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <h2>Cart</h2>
                    <div className="cart-items">
                        {cart.map((item, index) => (
                            <div key={index} className="cart-item">
                                {item.image && <img src={item.image} alt={item.name} className="cart-item-image" />}
                                <span>{item.name} - ${item.price}</span>
                            </div>
                        ))}
                    </div>
                    <div className="total-price">
                        <strong>Total: ${totalPrice.toFixed(2)}</strong>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App1;
