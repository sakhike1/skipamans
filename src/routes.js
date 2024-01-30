import Dashboard from './components/Dashboard'
import FoodDetails from './components/FoodDetails'
import HomeFace from "./views/HomeFace.vue";
import Cart from './components/Cart';
import Demo from './components/demo';
import LatestArrival from "./views/LatestArrival";

export default [
    {
        path: "/",
        name: "HomeFace",
        component: HomeFace,
      },
    { path: '/Dashboard', component: Dashboard },
    { path: '/food-details', name: 'food-details', component: FoodDetails },
    { path: '/cart', component: Cart },
    { path: '/demo', component: Demo },
    { path: '/LatestArrival', component: LatestArrival }
]