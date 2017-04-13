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
        <midi-parameter :midiout="midiOut" parameter="40" label="Voice" steps="5"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="41" label="Octave" steps="5"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="11" label="Expression"></midi-parameter>
      </fieldset>
      <fieldset>
        <legend>VCO</legend>
        <midi-parameter :midiout="midiOut" parameter="42" label="Detune"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="5" label="Portamento"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="43" label="EG Int"></midi-parameter>
      </fieldset>
      <fieldset>
        <legend>VCF</legend>
        <midi-parameter :midiout="midiOut" parameter="44" initvalue="127" label="Cutoff"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="45" initvalue="0" label="EG Int"></midi-parameter>
      </fieldset>
      <fieldset>
        <legend>LFO</legend>
        <midi-parameter :midiout="midiOut" parameter="46" label="Rate"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="47" label="Pitch Int"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="48" label="Cutoff Int"></midi-parameter>
      </fieldset>
      <fieldset>
        <legend>EG</legend>
        <midi-parameter :midiout="midiOut" parameter="49" label="Attack"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="50" label="Decay/Release"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="51" label="Sustain"></midi-parameter>
      </fieldset>
      <fieldset>
        <legend>Delay</legend>
        <midi-parameter :midiout="midiOut" parameter="52" label="Time"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="53" label="Feedback"></midi-parameter>
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

