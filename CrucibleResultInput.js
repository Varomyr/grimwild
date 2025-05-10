import CrucibleSelect from "./CrucibleSelect.js";
import { notEmpty } from "./utils.js";

export default {
  components: {
    CrucibleSelect
  },
  props: ['resultItems', 'submit', 'duplicate', 'delete'],
  setup(props) {
    return {props}
  },
  methods: {
    emptyTextTemplate (label) {
      return `- ${label} wählen -`
    },
    rollTextTemplate (rolls) {
      return rolls ? rolls.map(roll => roll.join(', ')).join(' x ') : ''
    }
  },
  template: `
      <div class="row my-1 " v-for="(item, index) in props.resultItems">
        <slot name="index" :index="index" :item="item" >
          <div class="col-1 py-2">
           {{index + 1}}{{item.readonly ? ' *' : ''}}:
          </div>
          <div v-if="item.rolls.length" class="col-2 py-2">
            {{rollTextTemplate(item.rolls)}}
          </div>
        </slot>

        <div v-if="item.edit" class="col">
          <div class="row">
            <slot name="selects" :item="item">
            <span v-for="(options, i) in item.data">
              <crucible-select v-if="options.length"
                                v-model="item.selectedValues[i]"
                                :empty-text="emptyTextTemplate(item.labels[i])"
                                :option-items="options"
                                :item-titles="item.descriptions[i]">
               </crucible-select>
               <input v-else class="form-control" v-model="item.selectedValues[i]" :placeholder="emptyTextTemplate(item.labels[i])"/>
            </span>
               
            </slot>
          </div>
        </div>
        <div v-else class="col py-2">
          <slot name="value" :item="item">
            <span v-for="(value, index) in item.value"  :title="(item.descriptions[index] || {})[value]">
              <span v-if="!!value">{{value}}&nbsp;</span>
            </span>
          </slot>
        </div>
        
        <div v-if="!item.readonly" class="col-3">
          <button v-if="item.edit" class="btn btn-primary py-2" @click="props.submit(item)"><i class="bi bi-floppy"></i></button>
          <button v-else class="btn btn-primary py-2" @click="item.edit=true"><i class="bi bi-pencil"></i></button>
          &nbsp;
          <button class="btn btn-secondary py-2" @click="props.duplicate(item)"><i class="bi bi-copy"></i></button>
          &nbsp;
          <button class="btn btn-secondary py-2" @click="props.delete(item)"><i class="bi bi-trash3"></i></button>
        </div>

      </div>
`
  // Can also target an in-DOM template:
  // template: '#my-template-element'
}
