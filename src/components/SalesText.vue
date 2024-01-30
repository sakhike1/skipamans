<template>
    <div class="scrolling-text-container bg-gray-50">
        <div class="scrolling-text text-black">
            <div class="flex items-center mb-10">
                <img class="h-10 w-10 mr-4 object-fit" :src="require('@/assets/free.png')" alt="">
                <h1 class="wrapper">Free delivery on orders more than R500. <span class="text-red-400">Get your cool
                        now!</span></h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        const scrollingText = document.querySelector('.scrolling-text');
        const textWidth = scrollingText.clientWidth;
        const containerWidth = scrollingText.parentNode.clientWidth;
        const animationDuration = (textWidth + containerWidth) * 8;
        const cssKeyframes = `scrollTextAnimation ${animationDuration}ms linear infinite`;
        scrollingText.style.animation = cssKeyframes;
    },
};
</script>

<style>
@keyframes scrollTextAnimation {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(100%);
    }
}

.scrollTextAnimation {
    animation-name: scrollTextAnimation;
    animation-duration: 60s;
    /* Adjust the duration to slow down or speed up the animation */
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: normal;
    font-weight: 900;
    font-size: 3.5em;
    display: inline-block;
    line-height: 1em;
    width: 100%;
}

.scrolling-text-container {
    width: 100%;
    overflow: hidden;
}

.scrolling-text {
    white-space: nowrap;
    animation: scrollTextAnimation linear infinite;
}

.wrapper {
    color: #fff;
    font-family: "Josefin Sans", sans-serif;
    background: linear-gradient(to right, #9c58a5 10%, #25abe8 50%, #57d75b 60%);
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 1.5s linear infinite;
    display: inline-block;
}

@keyframes textclip {
    to {
        background-position: 200% center;
    }
}

@media (max-width: 768px) {
    .scrolling-text {
        font-size: 1em;
    }
}

.scrolling-text-container {}
</style>
