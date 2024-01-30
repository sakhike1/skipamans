<template>
  <div class="allitems">
    <section id="Projects"
      class="w-fit mx-auto  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center p-20 justify-center gap-y-20 gap-x-14 ">


      <div v-for="items in topRated" :key="items.id" v-on:click="foodDetails(items)"
        class="w-73 bg-gradient-to-r from-rose-100 to-teal-100 shadow-md  rounded-xl duration-500 hover:scale-105 hover:shadow-xl">

        <img :src="items.url" alt="Product" class="object-contain h-[290px] w-96   rounded-t-xl" />
        <hr class="w-full h-[1px] mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700">
        <div class="px-4 py-3 w-72">
          <span class="text-gray-400 mr-3 uppercase text-xs">{{ items.name }}</span>
          <p class="text-lg font-bold text-black truncate block capitalize">100% Cotton Crew neck </p>
          <p class="text-xs font-bold text-gray-500 ">{{ items.desc }}</p>
          <div class="flex items-center">
            <del>
              <p class="text-sm text-gray-600 cursor-auto ml-2">R250</p>
            </del>

            <p class="text-lg font-semibold text-green-400 cursor-auto my-3">R199</p>


          </div>
          <StarRating />
          <button v-on:click="foodDetails(items)"><button
              class="relative  items-center justify-start inline-block px-5 py-3 overflow-hidden  rounded-full group">
              <span
                class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span
                class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-50 group-hover:-translate-x-8"></span>
              <span
                class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-gray-900">View
                Products
              </span>
              <span class="absolute inset-0 border-2 border-gray-400 rounded-full"></span>
            </button>
          </button>
        </div>


      </div>
      <div v-for="items in allCategories" :key="items.id" v-on:click="foodDetails(items)"
        class="w-73 bg-gradient-to-r from-rose-100 to-teal-100 shadow-md  rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <div></div>
        <a href="#">
          <img :src="items.url" alt="Product" class="object-contain h-[290px] w-96   rounded-t-xl" />
          <hr class="w-full h-[1px] mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700">
          <div class="px-4 py-3 w-72">
            <span class="text-gray-400 mr-3 uppercase text-xs">{{ items.name }}</span>
            <p class="text-lg font-bold text-black truncate block capitalize">100% Cotton Crew neck </p>
            <p class="text-xs font-bold text-gray-500 ">designed with heavier cotton
              fabric, double-stitched neckline, and fitted sleeves, elevating a basic t-shirt into a
              timeless short-sleeve style</p>
            <div class="flex items-center">
              <del>
                <p class="text-sm text-gray-600 cursor-auto ml-2">R250</p>
              </del>

              <p class="text-lg font-semibold text-green-400 cursor-auto my-3">R199</p>


            </div>
            <StarRating />
            <button v-on:click="foodDetails(items)"><button
                class="relative  items-center justify-start inline-block px-5 py-3 overflow-hidden  rounded-full group">
                <span
                  class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span
                  class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-50 group-hover:-translate-x-8"></span>
                <span
                  class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-gray-900">View
                  Products
                </span>
                <span class="absolute inset-0 border-2 border-gray-400 rounded-full"></span>
              </button>
            </button>
          </div>

        </a>

      </div>

      <div v-for="items in dishesNearYou" :key="items.id" v-on:click="foodDetails(items)"
        class="w-73 bg-gradient-to-r from-rose-100 to-teal-100 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img :src="items.url" alt="Product" class="object-contain h-[290px] w-96   rounded-t-xl" />
          <hr class="w-full h-[1px] mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700">
          <div class="px-4 py-3 w-72">
            <span class="text-gray-400 mr-3 uppercase text-xs">{{ items.name }}</span>
            <p class="text-lg font-bold text-black truncate block capitalize">100% Cotton Graphic t-shirt</p>
            <p class="text-xs font-bold text-gray-500  ">Add flair and vibrancy to your
              your look with a graphic tee you bound to stand out like you outside get some skipaman and apply
              dopeness to your mess </p>
            <div class="flex items-center">
              <del>
                <p class="text-sm text-gray-600 cursor-auto ml-2">R250</p>
              </del>

              <p class="text-lg font-semibold text-green-400 cursor-auto my-3">R199</p>


            </div>
            <StarRating />
            <button v-on:click="foodDetails(items)"><button
                class="relative  items-center justify-start inline-block px-5 py-3 overflow-hidden  rounded-full group">
                <span
                  class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span
                  class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-50 group-hover:-translate-x-8"></span>
                <span
                  class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-gray-900">View
                  Products
                </span>
                <span class="absolute inset-0 border-2 border-gray-400 rounded-full"></span>
              </button>
            </button>
          </div>

        </a>

      </div>

      <div v-for="items in allCategories" :key="items.id" v-on:click="foodDetails(items)"
        class="w-73 bg-gradient-to-r from-rose-100 to-teal-100 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img :src="items.url" alt="Product" class="object-contain h-[290px] w-96   rounded-t-xl" />
          <hr class="w-full h-[0.5px] mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700">
          <div class="px-4 py-3 w-72">
            <span class="text-gray-400 mr-3 uppercase text-xs">{{ items.name }}</span>
            <p class="text-lg font-bold text-black ">100% cotton Heavy T-shirts
            </p>
            <p class="text-xs font-bold text-gray-500 ">Ideal for cooler temperatures, these t-shirts are more
              durable and made with thicker fabrics to keep wearers warm.
            </p>
            <div class="flex items-center">
              <del>
                <p class="text-sm text-gray-600 cursor-auto ml-2">R250</p>
              </del>

              <p class="text-lg font-semibold text-green-400 cursor-auto my-3">R199</p>


            </div>
            <star-rating />
            <button v-on:click="foodDetails(items)"><button
                class="relative  items-center justify-start inline-block px-5 py-3 overflow-hidden  rounded-full group">
                <span
                  class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span
                  class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-50 group-hover:-translate-x-8"></span>
                <span
                  class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-gray-900">View
                  Products
                </span>
                <span class="absolute inset-0 border-2 border-gray-400 rounded-full"></span>
              </button>
            </button>
          </div>

        </a>

      </div>



    </section>
  </div>
</template>

<script>

import StarRating from "@/components/common/StarRating.vue";

export default {
  components: {
    StarRating

  },
  computed: {
    topRated() {
      return this.$store.state.topRated;
    },
    allCategories() {
      return this.$store.state.allCategories;
    },
    dishesNearYou() {
      return this.$store.state.dishesNearYou;
    },
    trendingItems() {
      return this.$store.state.trendingItems;
    },
  },
  methods: {
    foodDetails(items) {
      this.$router.push({ name: "food-details", params: items });
    }
  }

}

</script>

<style >
.responsive-three-column-grid {
  display: block;
}

.responsive-three-column-grid>* {
  padding: 1rem;
}

@media (min-width:768px) {
  .responsive-three-column-grid {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.allitems {
  background: rgb(202, 199, 200);
  background: linear-gradient(90deg, rgba(254, 250, 252, 1) 0%, rgba(242, 248, 255, 1) 100%);
}
</style>