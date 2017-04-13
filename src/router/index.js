import Vue from "vue"
import Router from "vue-router"
import VolcaKeys from "@/components/VolcaKeys.vue"
import VolcaBass from "@/components/VolcaBass.vue"
import VolcaBeats from "@/components/VolcaBeats.vue"

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
    {
      path: "/beats",
      name: "VolcaBeats",
      component: VolcaBeats,
    },
  ],
})
