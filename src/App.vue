<template>
  <div id="app">
    <banner-view />

    <Header />
    <search-bar />



    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import BannerView from "@/components/common/BannerView.vue";
import Header from "@/components/common/Header.vue";
import SearchBar from './components/common/SearchBar.vue';

import Footer from "@/components/common/Footer.vue";




export default {
  name: "App",
  components: {
    BannerView,
    Header,
    SearchBar,
    Footer


  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
