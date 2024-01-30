<template>
  <section class="relative overflow-hidden">
    <!-- Remove bg-center and bg-cover classes from the wrapping div -->
    <div class="relative flex items-center justify-center w-full text-center">
      <video autoplay muted loop class="video-bg">
        <!-- Add a source tag for the video file -->
        <source :src="videoSrc" type="video/mp4">
      </video>
      <div class="mx-4 p-40">
        <div class="z-10 max-w-3xl p-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 md:p-16 opacity-80">
          <div class="text-center">
            <h2 class="mb-6 text-4xl font-medium leading-10 tracking-tight text-gray-50 md:text-4xl">
              Looks like you do not have <br> any item in your cart
            </h2>
            <p class="mb-6 tracking-wide text-gray-300 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
              subscribe to our email list to receive notification on new arrivals
            </p>
            <div class="flex flex-wrap justify-center">
              <input
                class="w-full py-3 pl-4 mb-2 text-sm text-gray-900 rounded dark:placeholder-gray-300 dark:text-gray-300 dark:bg-gray-600 md:mb-0 md:w-1/2"
                type="text" placeholder="Type your e-mail">
              <button
                class="w-full px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded md:w-auto md:ml-2 hover:bg-blue-700">
                Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <VideoThree class="h-[300px]" />
  </section>
</template>

<script>
import VideoThree from '@/components/VideoThree.vue';

export default {
  components: {
    VideoThree
  },
  data() {
    return {
      videoSrc: require('@/assets/Noitem.mp4'), // Adjust the path to your video file
    };
  },
};
</script>

<style></style>
