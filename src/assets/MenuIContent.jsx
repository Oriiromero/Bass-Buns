import brownie from '/images/brownie.jpg';
import cheescake from '/images/cheescake.jpg';
import burger3 from '/images/burger3.jpg';
import chicken2 from '/images/chicken2.jpg';
import veg1 from '/images/veg1.jpg';
import veg2 from '/images/veg2.jpg';
import nachos from '/images/nachos.jpg';
import onion from '/images/onion.jpg';
import ribs from '/images/ribs.jpg';
import salad from '/images/salad.jpg';

const burgers = [
    {
        name: 'The Classic',
        ingredients: 'Burger buns, fried egg, bacon, cheddar cheese, meat, lettuce, onion, tomatoes, mayonise',
        spicy: true,
        veggie: false,
        price: 14.90,
        image: burger3
    },
    {
        name: 'Cheeky chicken',
        ingredients: 'Burger buns, crunchy chicken, guacamole, onion, lettuce, tomato, cheddar cheese',
        spicy: false,
        veggie: false,
        price: 12.50,
        image: chicken2
    },
    {
        name: 'The no-moo',
        ingredients: 'vegan burger buns, soy based burger, vegan cheddar cheese, spicy guacamole',
        spicy: true,
        veggie: true,
        price: 14.90,
        image: veg1
    },
    {
        name: 'Beyond insanity',
        ingredients: 'vegan burger buns, beyond meat burger, tomato, lettuce, fresh cucumber, vegan mayo',
        spicy: false,
        veggie: true,
        price: 13,
        image: veg2
    },
    {
        name: 'Special salad',
        ingredients: 'lettuce, tomatoes, hazenults, feta cheese, parsley',
        spicy: false,
        veggie: true,
        price: 8.90,
        image: salad
    },
    {
        name: 'Rib by rib',
        ingredients: 'pork ribs, bbq sauce',
        spicy: false,
        veggie: false,
        price: 15.90,
        image: ribs
    }
]

const starters = [
    {
        name: 'Nachos',
        ingredients: 'Crispy nacho chips, cheddar cheese, "pico de gallo", sour cream',
        spicy: true,
        veggie: true,
        price: 12.90,
        image: nachos
    },
    {
        name: 'Onion rings',
        ingredients: 'Onion',
        spicy: false,
        veggie: true,
        price: 10.80,
        image: onion
    },
]

const desserts = [
    {
        name: 'Cheescake',
        ingredients: 'Cookie base, creamy cheese, berries, ice cream, chocolate syrup',
        spicy: false,
        veggie: false,
        price: 13,
        image: cheescake
    },
    {
        name: 'Brownie',
        ingredients: 'Creamy brownie, coffee syrup, vanilla ice cream',
        spicy: false,
        veggie: false,
        price: 11.90,
        image: brownie
    },
]


export {burgers, starters, desserts};