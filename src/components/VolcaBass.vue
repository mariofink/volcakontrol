<template>
  <div>
    <h2>KORG Volca Bass</h2>
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
        <midi-parameter :midiout="midiOut" parameter="5" label="Slide time"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="40" label="Octave" steps="5"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="11" label="Expression"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="49" label="Gate time"></midi-parameter>
      </fieldset>
      <fieldset>
        <legend>VCO</legend>
        <midi-parameter :midiout="midiOut" parameter="43" label="Pitch 1"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="44" label="Pitch 2"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="45" label="Pitch 3"></midi-parameter>
      </fieldset>
      <fieldset>
        <legend>LFO</legend>
        <midi-parameter :midiout="midiOut" parameter="41" label="Rate"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="42" label="Int"></midi-parameter>
      </fieldset>
      <fieldset>
        <legend>EG</legend>
        <midi-parameter :midiout="midiOut" parameter="46" label="Attack"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="47" label="Decay/Release"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="48" label="Cutoff EG Int"></midi-parameter>
      </fieldset>
    </div>
  </div>
</template>

<script>
  import MidiParameter from "./MidiParameter.vue"
  import MidiDeviceMixin from "../mixins/MidiDeviceMixin.js"

export default {
  name: "volca-bass",
  mixins: [MidiDeviceMixin],
  components: {
    "midi-parameter": MidiParameter,
  },
}
  </script>

