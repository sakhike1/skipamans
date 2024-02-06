<template>
    <!-- component -->
    <div class="flex flex-col h-screen items-center justify-center mx-auto">
        <video autoplay muted loop class="video-bg"></video>

        <div class="z-10 w-full max-w-lg p-6 bg-white bg-opacity-40 backdrop-blur-lg rounded-lg shadow-lg md:p-10 lg:p-16">
            <div class="mb-6 text-xl font-light text-gray-100 sm:text-2xl dark:text-white">
                Login to your account
            </div>
            <base-dialog :show="isLoading" title="Authenticating..." fixed></base-dialog>
            <div class="mt-8">
                <form action="#" autoComplete="off" @submit.prevent="submitForm">
                    <div class="flex flex-col mb-4">
                        <div class="flex relative">
                            <span
                                class="rounded-l-md inline-flex items-center px-3 border-t bg-white bg-opacity-20 backdrop-blur-lg border-[1px] border-b border-gray-400 text-gray-500 shadow-sm text-sm">
                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                    </path>
                                </svg>
                            </span>
                            <input type="text" id="sign-in-email"
                                class="rounded-r-lg flex-1 appearance-none w-full py-2 px-4 bg-white bg-opacity-20 backdrop-blur-lg text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:border-transparent"
                                placeholder="Your email" v-model.trim="email" />
                        </div>
                    </div>
                    <div class="flex flex-col mb-6">
                        <div class="flex relative">
                            <span
                                class="rounded-l-md inline-flex items-center px-3 border-t bg-white bg-opacity-20 backdrop-blur-lg border-[1px] border-b border-gray-400 text-gray-500 shadow-sm text-sm">
                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                    </path>
                                </svg>
                            </span>
                            <input type="text" id="sign-in-email"
                                class="rounded-r-lg flex-1 appearance-none w-full py-2 px-4 bg-white bg-opacity-20 backdrop-blur-lg text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:border-transparent"
                                placeholder="Your email" v-model.trim="email" />
                        </div>
                        <p class="text-xs text-gray-700" v-if="!formIsValid">Please enter a valid email and password (must
                            be at least 6
                            characters long).
                        </p>
                    </div>

                    <div class="flex w-full">
                        <button type="submit"
                            class="glow-on-hover py-2 px-4 bg-gradient-to-r from-slate-500 to-yellow-100 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                            {{ submitButtonCaption }}
                        </button>
                    </div>
                </form>
            </div>
            <div class="flex items-center justify-center mt-6">
                <a href="#" target="_blank"
                    class="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                    <router-link to="CreateAccount" type="button" mode="flat" @click="switchAuthMode">
                        {{ switchModeButtonCaption }}
                    </router-link>
                </a>
            </div>
        </div>

        <MyVideo />
    </div>
</template>

<script>
import MyVideo from "@/components/MyVideo.vue";
export default {
    components: {
        MyVideo,
    },
    data() {
        return {
            email: '',
            password: '',
            formIsValid: true,
            mode: 'login',
            isLoading: false,
            error: null,
        };
    },
    computed: {
        submitButtonCaption() {
            if (this.mode === 'login') {
                return 'Login';
            } else {
                return 'Signup';
            }
        },
        switchModeButtonCaption() {
            if (this.mode === 'login') {
                return `Don't have an account create account`;
            } else {
                return 'Login instead';
            }
        },
    },
    methods: {
        async submitForm() {
            this.formIsValid = true;
            if (
                this.email === '' ||
                !this.email.includes('@') ||
                this.password.length < 6
            ) {
                this.formIsValid = false;
                return;
            }

            this.isLoading = true;

            const actionPayload = {
                email: this.email,
                password: this.password,
            };

            try {
                if (this.mode === 'login') {
                    await this.$store.dispatch('login', actionPayload);
                } else {
                    await this.$store.dispatch('signup', actionPayload);
                }
                const redirectUrl = '/' + (this.$route.query.redirect || 'products');
                this.$router.replace(redirectUrl);
            } catch (err) {
                this.error = err.message || 'Failed to authenticate, try later.';
            }

            this.isLoading = false;
        },
        switchAuthMode() {
            this.mode = (this.mode === 'login') ? 'signup' : 'login';
        },
        handleError() {
            this.error = null;
        },
    },
};
</script>

<style scoped>
.video-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

.glow-on-hover {
    border: none;
    outline: none;
    color: #fff;
    background: #8f8383;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.glow-on-hover:before {
    content: "";
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active {
    color: #000;
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% {
        background-position: 0 0;
    }

    50% {
        background-position: 400% 0;
    }

    100% {
        background-position: 0 0;
    }
}
</style>
