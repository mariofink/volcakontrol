<template>
  <div>
    <label>{{label}}</label>
    <input type="range" min="0" max="127" :value="value" :step="Math.floor(127 / steps)" @input="updateValue">
  </div>
</template>

<script>
  export default {
    name: "midi-parameter",
    data() {
      return {
        value: 0
      }
    },
    props: {
      parameter: {},
      initvalue: {
        default: 0
      },
      midiout: Object,
      label: String,
      steps: {
        default: 127
      }
    },
    created() {
      this.value = this.initvalue
    },
    methods: {
      updateValue(event) {
        this.value = event.target.value
        this.midiout.sendControlChange(parseInt(this.parameter), this.value)
      }
    }
  }
  </script>

  <style>
  </style>
