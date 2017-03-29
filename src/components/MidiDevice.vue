<template>
  <div>
    <h2>Midi Device</h2>
    <div class="form-group">
      <label for="midi-out">Midi output</label>
      <select id="midi-out" name="midi-out" v-model="selectedOutputId" @change="selectOutput">
        <option disabled value="">Please select one</option>
        <option v-for="output in midiOutputs" :value="output.id">
          {{ output.manufacturer }} {{ output.name }}
        </option>
      </select>
      <button @click="playNote()" v-if="midiOut">Play note</button>
    </div>
    <div v-if="midiOut">
      <midi-parameter :midiout="midiOut" parameter="44" initvalue="100" label="Cutoff"></midi-parameter>
    </div>
  </div>
</template>

<script>
  import WebMidi from "webmidi"
  import MidiParameter from "./MidiParameter.vue"

export default {
  name: "midi-device",
  components: {
    "midi-parameter": MidiParameter
  },
  data() {
    return {
      selectedOutputId: "",
      midiOutputs: null,
      midiOut: null
    }
  },
  mounted() {
    WebMidi.enable(() => {
      this.midiOutputs = WebMidi.outputs
      if (this.midiOutputs.length === 1) {
        const outputId = this.midiOutputs[0].id
        this.selectedOutputId = outputId
        this.selectOutputById(outputId)
      }
    })
  },
  methods: {
    playNote() {
      this.midiOut.playNote("C3")
    },
    selectOutput(event) {
      const outputId = event.target.value
      this.selectOutputById(outputId)
    },
    selectOutputById(id) {
      this.midiOut = WebMidi.getOutputById(id)
    }
  }
}
  </script>

  <style>
  </style>
