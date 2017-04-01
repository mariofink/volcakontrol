<template>
  <div>
    <h2>KORG Volca Keys</h2>
    <div class="form-group">
      <label for="midi-out">Midi output</label>
      <select id="midi-out" name="midi-out" v-model="selectedOutputId" @change="selectOutput">
        <option disabled value="">Please select one</option>
        <option v-for="output in midiOutputs" :value="output.id">
          {{ output.manufacturer }} {{ output.name }}
        </option>
      </select>
    </div>
    <div v-if="midiOut">
      <fieldset>
        <legend>VCO</legend>
        <midi-parameter :midiout="midiOut" parameter="42" initvalue="0" label="Detune"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="5" initvalue="0" label="Portamento"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="43" initvalue="0" label="EG Int"></midi-parameter>
      </fieldset>
      <fieldset>
        <legend>VCF</legend>
        <midi-parameter :midiout="midiOut" parameter="44" initvalue="100" label="Cutoff"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="52" initvalue="0" label="Delay"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="53" initvalue="0" label="Feedback"></midi-parameter>
      </fieldset>
    </div>
  </div>
</template>

<script>
  import MidiParameter from "./MidiParameter.vue"
  import MidiDeviceMixin from "../mixins/MidiDeviceMixin.js"

export default {
  name: "volca-keys",
  mixins: [MidiDeviceMixin],
  components: {
    "midi-parameter": MidiParameter,
  },
}
  </script>

