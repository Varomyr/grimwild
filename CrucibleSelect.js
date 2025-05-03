export default {
  props: ['modelValue', 'optionItems', 'emptyText', 'titles'],
  setup(props) {
    return {props}
  },
  template: `
    <div class="col">
      <select class="form-select" :value="props.modelValue" :title="(titles||[])[props.modelValue]" @change="$emit('update:modelValue', $event.target.value)">
        <option v-for="item in ['' , ...props.optionItems]" :title="(titles||[])[item]" :value="item">{{item || props.emptyText}}</option>
      </select>
    </div>`
  // Can also target an in-DOM template:
  // template: '#my-template-element'
}
