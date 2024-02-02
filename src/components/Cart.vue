<template>
  <section class="py-24 relative  ">
    <div v-if="totalPrice !== 0" class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto ">

      <h2 class="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart
      </h2>
      <div v-for="items in cartItems" :key="items.id"
        class="rounded-3xl bg-gradient-to-r from-green-300 to-purple-400 transform transition duration-500 
        hover:scale-110 via-red-200 to-yellow-100 border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 ">
        <div class="col-span-12 lg:col-span-2 img box">
          <img :src="items.url" class="max-lg:w-full lg:w-[180px]">
        </div>
        <div v-show="totalPrice !== 0" class="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
          <div class="flex items-center justify-between w-full mb-4">
            <h5 class="font-manrope font-bold text-2xl leading-9 text-gray-900">{{ items.name }}</h5>
            <button v-on:click="removeItem(items)"
              class="rounded-full group flex items-center justify-center focus-within:outline-red-500">
              <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle class="fill-red-50 transition-all duration-500 group-hover:fill-red-400" cx="17" cy="17" r="17"
                  fill="" />
                <path class="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                  d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                  stroke="#EF4444" stroke-width="1.6" stroke-linecap="round" />
              </svg>
            </button>
          </div>
          <p class="font-normal text-xs leading-7 text-gray-500 mb-6">

            Skipaman T-shirts are crafted with precision and care, using 100% cotton materials to ensure durability and
            comfort that lasts Each T-shirt is meticulously designed to stand out, offering a unique blend of style and
            quality. Made to withstand the test of time, Skipaman T-shirts boast a superior craftsmanship that sets them
            apart from the rest <a />

          </p>
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-4">
              <button v-on:click="removeItem(items)"
                class="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" width="10" height="10"
                  viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 9.5H13.5" stroke="" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>

              <span class="cart-quantity h-16 w-16 rounded-full">{{ items.quantity }}</span>

              <button v-on:click="addToCart(items)"
                class="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" width="10" height="10"
                  viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.75 9.5H14.25M9 14.75V4.25" stroke="" stroke-width="1.6" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <h6 class="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right"> {{ totalPrice }} </h6>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
        <h5 class="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
          {{ totalPrice + 50 }}</h5>

        <div class="flex items-center justify-between gap-5 ">
          <button
            class="rounded-full py-2.5 px-3 bg-indigo-50 text-indigo-600 font-semibold text-xs text-center whitespace-nowrap transition-all duration-500 hover:bg-indigo-100">Promo
            Code?</button>
          <h6 class="font-manrope font-bold text-3xl lead-10 text-indigo-600">$440</h6>
        </div>
      </div>
      <div class="max-lg:max-w-lg max-lg:mx-auto">
        <p class="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">Shipping taxes, and discounts
          calculated
          at checkout</p>
        <button
          class="bg  rounded-full py-4 px-6 text-black font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700 ">Checkout</button>

      </div>


    </div>
    <no-item v-else></no-item>
  </section>
</template>

<script>
import NoItem from '@/components/NoItem.vue';

import swal from "sweetalert";

export default {
  name: "Cart",
  components: {
    NoItem
  },
  data() {
    return {
      item: 0
    };
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch("addToCart", item);
    },
    removeItem(item) {
      this.$store.dispatch("removeItem", item);
    },
    checkout() {
      swal("Good job!", "Your order is placed successfully!", "success").then(
        value => {
          window.location.href = "/cart";
        }
      );
    }
  },
  computed: {
    cartItems() {
      return this.$store.state.cartItems;
    },
    totalPrice() {
      let price = 0;
      this.$store.state.cartItems.map(el => {
        price += el["quantity"] * el["price"];
      });
      return price;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-outer-div {
  flex-direction: column;
  height: 100vh;
}

.cart-body {

  flex: 1;
  overflow-y: auto;
}

.cart-quantity {
  display: inline-block;
  padding: 15px 15px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #fff;
  margin: 0 5px;
  text-align: center;
}

.cart-items {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: white;
}

.my-cart {
  color: orange;
  font-weight: 600;
}

input[type="text"] {
  border: none;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  vertical-align: middle;
  text-align: center;
  outline: none;
}

.fw-600 {
  font-weight: 600;
}

.line {
  height: 1px;
  border-bottom: 1px solid black;
}

.w-120 {
  width: 120%;
}

.w-60 {
  width: 60%;
}

.add,
.remove {
  width: 28px;
  height: 28px;
  background: linear-gradient(#fff, #f9f9f9);
  border: 1px solid #c2c2c2;
  cursor: pointer;
  font-size: 16px;
  border-radius: 7px;
  padding-top: 1px;
  outline: none;
}

.mt-10 {
  margin-top: 10px;
}

.mt-15 {
  margin-top: 15px;
}

.orange-red {
  color: orangered;
}

.darkblue {
  color: darkblue;
}

input[type="text"][data-v-530ad160] {
  border: none;
  width: 20%;
  font-size: 14px;
  font-weight: 500;
  vertical-align: middle;
  text-align: center;
  outline: none;
}

.bg {

  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 300% 300%;
  background-image:
    linear-gradient(to right, rgb(254, 240, 138), rgb(251, 207, 232), rgb(244, 114, 182));
  -webkit-animation: AnimateBG 20s ease infinite;
  animation: AnimateBG 20s ease infinite;
}

@-webkit-keyframes AnimateBG {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes AnimateBG {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
