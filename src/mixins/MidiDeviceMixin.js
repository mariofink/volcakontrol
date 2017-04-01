import WebMidi from "webmidi"

export default {
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
    selectOutput(event) {
      const outputId = event.target.value
      this.selectOutputById(outputId)
    },
    selectOutputById(id) {
      this.midiOut = WebMidi.getOutputById(id)
    }
  }
}

