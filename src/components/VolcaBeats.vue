<template>
  <div>
    <h2>KORG Volca Beats</h2>
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
        <legend>Stutter</legend>
        <midi-parameter :midiout="midiOut" parameter="54" label="Time"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="55" label="Depth"></midi-parameter>
      </fieldset>
      <fieldset>
        <legend>Part Levels</legend>
        <midi-parameter :midiout="midiOut" parameter="40" label="Kick" initvalue="127"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="41" label="Snare" initvalue="127"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="42" label="Lo Tom" initvalue="127"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="43" label="Hi Tom" initvalue="127"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="44" label="Cl Hat" initvalue="127"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="45" label="Op Hat" initvalue="127"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="46" label="Clap" initvalue="127"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="47" label="Claves" initvalue="127"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="48" label="Agogo" initvalue="127"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="49" label="Crash" initvalue="127"></midi-parameter>
      </fieldset>
      <fieldset>
        <legend>PCM Speed</legend>
        <midi-parameter :midiout="midiOut" parameter="50" label="Clap" initvalue="64"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="51" label="Claves" initvalue="64"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="52" label="Agogo" initvalue="64"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="53" label="Crash" initvalue="64"></midi-parameter>
      </fieldset>
      <fieldset>
        <midi-parameter :midiout="midiOut" parameter="56" label="Tom Decay" initvalue="64"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="57" label="Cl Hat Decay" initvalue="64"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="58" label="Op Hat Decay" initvalue="64"></midi-parameter>
        <midi-parameter :midiout="midiOut" parameter="59" label="Hat Grain" initvalue="64"></midi-parameter>
      </fieldset>
    </div>
  </div>
</template>

<script>
  import MidiParameter from "./MidiParameter.vue"
import MidiDeviceMixin from "../mixins/MidiDeviceMixin.js"

export default {
  name: "volca-beats",
  mixins: [MidiDeviceMixin],
  components: {
    "midi-parameter": MidiParameter,
  },
}
  </script>

