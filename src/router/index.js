import Vue from "vue"
import Router from "vue-router"
import VolcaKeys from "@/components/VolcaKeys.vue"
import VolcaBass from "@/components/VolcaBass.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "VolcaKeys",
      component: VolcaKeys,
    },
    {
      path: "/bass",
      name: "VolcaBass",
      component: VolcaBass,
    },
  ],
})
