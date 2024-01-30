<template>
    <div class="HomeFace 
    ">
        <sales-text />
        <LatestSkipas />

        <div class="product-cards-container">
            <Dashboard />
        </div>
    </div>
</template>
  
<script>
// @ is an alias to /src

import SalesText from "@/components/common/SalesText.vue";
import LatestSkipas from '../components/common/LatestSkipas.vue';
import Dashboard from '../components/Dashboard.vue'


export default {
    components: { Dashboard, LatestSkipas, SalesText },
    data() {
        return {
            items: items,
            product: null,
            active: {
                product_drawer: false
            }
        }
    },
    methods: {
        viewProduct(product) {
            this.product = product
            this.active.product_drawer = true
        },
        closeProductDrawer() {
            this.active.product_drawer = false
        }
    }
};
</script>
  
<style ></style>