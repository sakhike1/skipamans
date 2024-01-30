import Vue from 'vue';
import Vuex from 'vuex';
import cake from '../assets/cake.png';
import noodles from '../assets/noodles.png';
import fries from '../assets/fries.png';

import macroni from '../assets/macroni.png';
import pizza from '../assets/pizza.png';
import salad from '../assets/salad.png';

import samosa from '../assets/samosa.png';
import soup from '../assets/soup.png';
import tacos from '../assets/tacos.png';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
        topRated: [
            { id: 1, name: 'skipaman', price: 100, url: cake, desc: "Very tasty", rate: 4.1 },
            { id: 2, name: 'skipaman', price: 200, url: noodles, desc: 'Chilly', rate: 4.1 },
            { id: 3, name: 'skipaman', price: 70, url: fries, desc: "Crispy", rate: 4.2 }
        ],

        allCategories: [
            { id: 4, name: 'skipaman', price: 150, url: macroni, desc: "Yummy", rate: 4.5 },
            { id: 5, name: 'skipaman', price: 400, url: pizza, desc: "Very tasty", rate: 4.0 },
            { id: 6, name: 'skipaman', price: 60, url: salad, desc: "Very tasty", rate: 4.2 }
        ],

        dishesNearYou: [
            { id: 7, name: 'skipaman', price: 20, url: samosa, desc: "Very tasty", rate: 4.2 },
            { id: 8, name: 'skipaman', price: 50, url: soup, desc: "Delicious", rate: 4.2 },
            { id: 9, name: 'skipaman', price: 110, url: tacos, desc: "Awesome!!", rate: 4.4 }
        ],

        count: 0,
        cartItemCount: 0,
        cartItems: [],
        totalPrice: 0,
        todos: [
            { id: 1, name: "Shopping at 7", done: true },
            { id: 2, name: "Learn Vue", done: true },
            { id: 1, name: "Gaming", done: false }
        ],

        imageSources: [
            require('@/assets/nice112.png'),
            require('@/assets/nicer11.png'),
            require('@/assets/kpi.png'),
            // Add more image sources as needed
        ],
    },
    mutations: {
        increment(state) {
            state.count++
        },
        addToCart(state, payload) {
            let item = payload;
            item = { ...item, quantity: 1 };
            if (state.cartItems.length > 0) {
                let bool = state.cartItems.some(i => i.id == item.id);
                if (bool == true) {
                    let itemIndex = state.cartItems.findIndex(el => el.id == item.id);
                    state.cartItems[itemIndex]["quantity"] += 1;
                } else {
                    state.cartItems.push(item);
                }
            } else {
                state.cartItems.push(item);
            }
            state.cartItemCount++
        },
        removeItem(state, payload) {
            if (state.cartItems.length > 0) {
                let bool = state.cartItems.some(i => i.id == payload.id);
                if (bool) {
                    let index = state.cartItems.findIndex(el => el.id == payload.id);
                    state.cartItems[index]["quantity"] === 0
                        ? (state.cartItems[index]["quantity"] = 0)
                        : (state.cartItems[index]["quantity"] -= 1);
                    if (state.cartItems[index]["quantity"] === 0)
                        state.cartItems.splice(index, 1)
                    if (state.cartItemCount !== 0)
                        state.cartItemCount--
                }
            }
        }
    },
    actions: {
        addToCart: (context, payload) => {
            context.commit('addToCart', payload)
        },
        removeItem: (context, payload) => {
            context.commit('removeItem', payload)
        },
        increment: (context, payload) => {
            setTimeout(() => {
                context.commit('increment')
            }, 5000)
        },
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        }
    }
});
