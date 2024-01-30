<template>
    <div>
        <nav
            class="relative flex w-full flex-wrap border-solid border-1 items-center justify-between  py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
            <div class="flex w-full flex-wrap items-center justify-between px-3">
                <ul class="flex space-x-4">
                    <li>
                        <router-link to="/" class="text-black text-xs hover:text-gray-500">Trending</router-link>
                    </li>
                    <li>
                        <router-link to="/about" class="text-black text-xs hover:text-gray-500">Accessories</router-link>
                    </li>
                    <li>
                        <router-link to="/contact" class="text-black text-xs hover:text-gray-500">Fleece</router-link>
                    </li>
                    <li>
                        <router-link to="/contact" class="text-black text-xs hover:text-gray-500">Explore</router-link>
                    </li>
                    <li>
                        <router-link to="/contact" class="text-red-400 text-xs hover:text-gray-500">SALE</router-link>
                    </li>
                </ul>
                <div class="ml-5 flex w-full lg:w-[30%] items-center justify-between">
                    <input type="search"
                        class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="What are you looking for ?" aria-label="Search" aria-describedby="button-addon2" />
                    <span
                        class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                        id="basic-addon2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                            <path fill-rule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clip-rule="evenodd" />
                        </svg>
                    </span>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>


<style >
nav {
    background: rgb(202, 199, 200);
    background: linear-gradient(90deg, rgba(254, 250, 252, 1) 0%, rgba(242, 248, 255, 1) 100%);
}
</style>