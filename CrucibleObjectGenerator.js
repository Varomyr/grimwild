import { ref, computed } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import CrucibleResultInput from "./CrucibleResultInput.js";
import DiceThrowInput from "./DiceThrowInput.js";

export default {
  components: {
    CrucibleResultInput,
    DiceThrowInput
  },
  props: ['heading', 'description', 'rollNames', 'getResult', 'modelValue', 'displayModifier'],
  setup(props) {
    const rolls = ref(new Array(props.rollNames.length).fill([]))
    const results = computed(() => {
      if (props.displayModifier) {
        return props.displayModifier(props.modelValue)
      }
      return props.modelValue
    })

    return {props, rolls, results}
  },
  methods: {
    submitResult (result) {
      const index = this.modelValue.indexOf(result)
      this.modelValue[index].submit();
    },
    duplicateResult (result) {
      const index = this.modelValue.indexOf(result)
      const clone = this.modelValue[index].clone();
      clone.edit = true;
      this.modelValue.splice(index + 1, 0, clone);
    },
    deleteResult (result) {
      const index = this.modelValue.indexOf(result)
      this.modelValue.splice(index, 1)
    },
    rollInputValid(roll) {
      return roll.length === 2 && roll[0] < 7 && roll[1] < 7
    },
    resetInput() {
      this.rolls = this.rolls.map(() => [])
    },
    addResult() {
      let result;
      if (this.rolls.every(this.rollInputValid)) {
        result = this.props.getResult (this.rolls)
      } else {
        result = this.props.getResult()
      }
      this.modelValue.push(result)
      this.resetInput()
    }
  },
  template: `
    <div>
      <h1 class="my-3">{{heading}}</h1>
      <p v-if="description">{{description}}</p>

      <crucible-result-input :result-items="results"
                             :submit="submitResult"
                             :duplicate="duplicateResult"
                             :delete="deleteResult">
      </crucible-result-input>

      <div class="row mt-3">
        <dice-throw-input v-for="(label, index) in props.rollNames"
                          v-model="rolls[index]"
                          :input-name="label + ' Wurf'">
        </dice-throw-input>
        <div class="col">
          <button type="button" class="btn btn-primary" @click="addResult()"><i class="bi bi-file-earmark-plus"></i> Hinzufügen</button>
        </div>
      </div>
      
    </div>`
  // Can also target an in-DOM template:
  // template: '#my-template-element'
}
