<template>
  <h2>Midi Device</h2>
</template>

<script>
  import WebMidi from "webmidi"

  export default {
    name: "midi-device",
    data() {
      return {
        devices: null,
      }
    },
    created() {
      console.log("midi device", WebMidi)
    },
  }
  </script>

  <style>
  </style>
