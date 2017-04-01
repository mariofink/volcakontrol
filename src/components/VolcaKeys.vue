<template>
  <midi-device label="KORG Volca Keys">
  </midi-device>
</template>

<script>
  import MidiDevice from "./MidiDevice.vue"

export default {
  name: "volca-keys",
  components: {
    "midi-device": MidiDevice,
  },
}
  </script>

