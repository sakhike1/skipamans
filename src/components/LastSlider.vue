<template>
    <div ref="container" class="keen-slider" style="height: 500px">
        <div class="keen-slider__slide number-slide1"><img
                class="object-contain h-full w-full bg-gradient-to-tr from-violet-500 to-orange-300"
                :src="require('@/assets/image58.png')" /></div>
        <div class="keen-slider__slide number-slide2"><img
                class="object-contain h-full w-full bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700"
                :src="require('@/assets/image59.png')" /></div>
        <div class="keen-slider__slide number-slide3"><img
                class="object-contain h-full w-full bg-gradient-to-b from-orange-500 to-yellow-300"
                :src="require('@/assets/image65.png')" /></div>
        <div class="keen-slider__slide number-slide4"><img
                class="object-contain h-full w-full bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700"
                :src="require('@/assets/image62.png')" /></div>
        <div class="keen-slider__slide number-slide5"><img
                class="object-contain h-full w-full bg-gradient-to-b from-orange-500 to-yellow-300"
                :src="require('@/assets/image60.png')" /></div>
        <div class="keen-slider__slide number-slide6"><img
                class="object-contain h-full w-full bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700"
                :src="require('@/assets/image61.png')" /></div>
    </div>
</template>
   
<script>
import { useKeenSlider } from 'keen-slider/vue.es'
import 'keen-slider/keen-slider.min.css'


const WheelControls = (slider) => {
    let touchTimeout
    let position
    let wheelActive

    function dispatch(e, name) {
        position.x -= e.deltaX
        position.y -= e.deltaY
        slider.container.dispatchEvent(
            new CustomEvent(name, {
                detail: {
                    x: position.x,
                    y: position.y,
                },
            })
        )
    }

    function wheelStart(e) {
        position = {
            x: e.pageX,
            y: e.pageY,
        }
        dispatch(e, "ksDragStart")
    }

    function wheel(e) {
        dispatch(e, "ksDrag")
    }

    function wheelEnd(e) {
        dispatch(e, "ksDragEnd")
    }

    function eventWheel(e) {
        e.preventDefault()
        if (!wheelActive) {
            wheelStart(e)
            wheelActive = true
        }
        wheel(e)
        clearTimeout(touchTimeout)
        touchTimeout = setTimeout(() => {
            wheelActive = false
            wheelEnd(e)
        }, 50)
    }

    slider.on("created", () => {
        slider.container.addEventListener("wheel", eventWheel, {
            passive: false,
        })
    })
}

export default {
    setup() {
        const [container] = useKeenSlider(
            {
                loop: false,
                rubberband: false,
                vertical: true,
            },
            [WheelControls]
        )
        return { container }
    }
}
</script>
   
<style>
body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

[class^="number-slide"],
[class*=" number-slide"] {
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    height: 700px;
    max-height: 200vh;
}

.number-slide1 {
    background: rgb(64, 175, 255);
    background: linear-gradient(128deg,
            rgba(64, 175, 255, 1) 0%,
            rgba(63, 97, 255, 1) 100%);
}

.number-slide2 {
    background: rgb(255, 75, 64);
    background: linear-gradient(128deg,
            rgba(255, 154, 63, 1) 0%,
            rgba(255, 75, 64, 1) 100%);
}

.number-slide3 {
    background: rgb(182, 255, 64);
    background: linear-gradient(128deg,
            rgba(182, 255, 64, 1) 0%,
            rgba(63, 255, 71, 1) 100%);
    background: linear-gradient(128deg,
            rgba(189, 255, 83, 1) 0%,
            rgba(43, 250, 82, 1) 100%);
}

.number-slide4 {
    background: rgb(64, 255, 242);
    background: linear-gradient(128deg,
            rgba(64, 255, 242, 1) 0%,
            rgba(63, 188, 255, 1) 100%);
}

.number-slide5 {
    background: rgb(255, 64, 156);
    background: linear-gradient(128deg,
            rgba(255, 64, 156, 1) 0%,
            rgba(255, 63, 63, 1) 100%);
}

.number-slide6 {
    background: rgb(64, 76, 255);
    background: linear-gradient(128deg,
            rgba(64, 76, 255, 1) 0%,
            rgba(174, 63, 255, 1) 100%);
}
</style>
   