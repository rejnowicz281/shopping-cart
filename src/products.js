import uniqid from "uniqid";
import images from "./assets/";

const products = [
    {
        id: uniqid(),
        image: images.bread,
        name: "Bread",
        description: "A humble loaf of bread.",
        price: 15,
    },
    {
        id: uniqid(),
        image: images.can1,
        name: "Tomato Soup",
        description: "Classic tomato soup. A taste of warmth and salvation amidst the cold and desolation.",
        price: 15,
    },
    {
        id: uniqid(),
        image: images.can2,
        name: "Onion Soup",
        description: "A bowl of onion soup—aromatic, savory, and a respite from the Zone's harsh embrace.",
        price: 20,
    },
    {
        id: uniqid(),
        image: images.can3,
        name: "Ramen",
        description:
            "A delicious blend of tender noodles, flavorful broth, and delightful toppings that will warm your heart and fill your belly,",
        price: 30,
    },
    {
        id: uniqid(),
        image: images.drink,
        name: "Refreshing Drink",
        description: "A refreshing breeze on a scorching day.",
        price: 15,
    },
    {
        id: uniqid(),
        image: images.militarypack,
        name: "Military Pack",
        description:
            "24 hours of satisfying sustenance, compact and ready to keep you fueled in the Zone's unforgiving terrain.",
        price: 50,
    },
    {
        id: uniqid(),
        image: images.sausage,
        name: "Sausage",
        description: "A sausage.",
        price: 8,
    },
    {
        id: uniqid(),
        image: images.soda,
        name: "Cola",
        description: "Quench your thirst with this refreshing beverage.",
        price: 15,
    },
    {
        id: uniqid(),
        image: images.dogfood,
        name: "Dog Food",
        description: "A can of dog food. It's not for you, but it's better than starving.",
        price: 5,
    },
];

export default products;
