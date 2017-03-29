import Vue from "vue"
import Router from "vue-router"
import MidiDevice from "@/components/MidiDevice"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "MidiDevice",
      component: MidiDevice,
    },
  ],
})
