<template>
    <div class="banner-navigation border-b-1 border-gray-200  p-8">
        <div class="banner-content flex items-center">
            <p>{{ salesText }}</p>

            <button @click="redirectToSalesPage"
                class="shopnow inline-flex items-center justify-center h-10 px-8 m-5 font-medium tracking-wide text-white transition duration-200 bg-gradient-to-r from-indigo-300 to-purple-400 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none">
                {{ buttonText }}
            </button>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            salesText: "Summer Sale! Up to 50% Off" + "  ",
            buttonText: "Shop Now",
        };
    },
    methods: {
        redirectToSalesPage() {
            // Add your logic to redirect to the sales page here
            // You can use Vue Router or a simple window.location.href
            // Example with Vue Router: this.$router.push("/sales");
        },
    },
};
</script>
  
<style>
.banner-navigation {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234));
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    height: 61px;
    padding-left: 100px;
    /* Use padding-left to create space instead of margin-left */
    padding-right: 100px;
    /* Use padding-right to create space instead of margin-right */
}

.banner-content {
    display: flex;
    align-items: center;
}

p {
    margin: 0;
    font-size: 18px;
    margin-right: 20px;
}

@media screen and (max-width: 432px) {

    .banner-navigation {
        padding-left: 20px;
        padding-right: 20px;
        font-size: 20px;

    }

    .shopnow {
        display: flex;
        font-size: 10px;
        width: 40%;
    }

}

.banner-navigation {
    /* Existing styles */

    /* Add responsive styles */
    @media screen and (max-width: 768px) {
        padding-left: 20px;
        padding-right: 20px;
        font-size: 16px;

    }
}

.shopnow {
    display: flex;
    font-size: 10px;
    width: 40%;
}

@media only screen and (max-width: 600px) {
    .banner-navigation {
        padding-left: 20px;
        padding-right: 20px;
        font-size: 20px;

    }

    .shopnow {
        display: flex;
        font-size: 10px;
        width: 40%;
    }
}
</style>
  