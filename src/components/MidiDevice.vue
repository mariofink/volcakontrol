<template>
  <div>
    <h2>Midi Device</h2>
    <div class="form-group">
      <label for="midi-out">Midi output</label>
      <select id="midi-out" name="midi-out" v-model="selectedOutput">
        <option disabled value="">Please select one</option>
        <option v-for="output in midiOutputs" :value="output.id">
          {{ output.manufacturer }} {{ output.name }}
        </option>
      </select>
      <button @click="playNote()">Play note</button>
    </div>
  </div>
</template>

<script>
  import WebMidi from "webmidi"

export default {
  name: "midi-device",
  data() {
    return {
      selectedOutput: "",
      midiOutputs: null,
    }
  },
  mounted() {
    WebMidi.enable(() => {
      this.midiOutputs = WebMidi.outputs
    })
  },
  methods: {
    playNote() {
      const output = WebMidi.getOutputById(this.selectedOutput)
      output.playNote("C3")
    }
  }
}
  </script>

  <style>
  </style>
