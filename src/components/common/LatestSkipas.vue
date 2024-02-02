<template>
    <div class="mx-auto">
        <SalesText />
        <InfiniteSlider />
        <section class="overflow-hidden shadow-lg p-4 md:p-8 ">
            <div class="flex flex-col w-[80%] md:flex-row mx-auto">
                <div :style="{ background: color }"
                    class="p-4 sm:p-8 lg:p-16 md:w-32 lg:w-48 flex-grow order-last md:order-first">
                    <div class="text-center pt-7 sm:text-left rtl:sm:text-right">
                        <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold text-black">
                            Latest skipas
                        </h2>
                        <p class="text-xs max-w-lg text-black mt-4 md:mt-6 md:block md:leading-relaxed">
                            High-quality t-shirts made from durable fabrics will ensure that your favorite tees remain
                            comfortable and stylish for a long time, providing excellent value for your money.
                        </p>
                        <div class="mt-4 sm:mt-8">
                            <a href="#" @click="randomColor"
                                class="inline-block rounded-full bg-green border border-gray-900   px-4 sm:px-12 py-3 text-sm font-medium hover:text-white hover:bg-black transition  ">
                                Get your cool now!
                            </a>
                        </div>
                    </div>
                </div>
                <div class="bg-gradient-to-r from-gray-400 via-gray-600  to-blue-800">
                    <img rel="preload" class="w-[350px] h-[350px] object-cover " :src="currentImage" />
                </div>
            </div>
        </section>
    </div>
</template>
  
<script>
export default {
    computed: {
        imageSources() {
            return this.$store.state.imageSources;
        },
    },
    data() {
        return {
            currentImageIndex: 0,
            autoPlayTimer: null,
            currentImage: '',
            color: 'linear-gradient(to right, rgb(192, 132, 252), rgb(250, 204, 21))',
        };
    },
    methods: {
        startAutoPlay() {
            // Set the initial image source before starting auto-play
            this.currentImage = this.imageSources[this.currentImageIndex];

            const interval = 3000; // 3 seconds
            this.autoPlayTimer = setInterval(this.changeImage, interval);
        },
        changeImage() {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.imageSources.length;
            this.currentImage = this.imageSources[this.currentImageIndex];
        },

        randomColor() {
            const gradients = [
                'linear-gradient(to right, rgb(254, 240, 138), rgb(187, 247, 208), rgb(134, 239, 172))',
                'linear-gradient(to right, rgb(192, 132, 252), rgb(250, 204, 21))',
                'linear-gradient(to right, rgb(192, 132, 252), rgb(250, 204, 21))',
                'linear-gradient(to right, rgb(123, 104, 238), rgb(255, 69, 0))', // Add more gradients as needed
                'linear-gradient(to right, rgb(59, 130, 246), rgb(37, 99, 235))',

            ];
            this.color = gradients[Math.floor(Math.random() * gradients.length)];
        },
    },
    mounted() {
        this.startAutoPlay();
        setInterval(this.randomColor, 3000);
    },
    beforeDestroy() {
        clearInterval(this.autoPlayTimer);
    },
};
</script>
  
<style  scoped>
.inline-block:hover {
    opacity: 1;
}

.hvr-grow {
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
    transform: scale(1.1);
}

.mx-auto {
    background: linear-gradient(90deg, rgba(254, 250, 252, 1) 0%, rgba(242, 248, 255, 1) 100%);
}
</style>
