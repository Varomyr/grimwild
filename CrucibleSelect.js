export default {
  props: ['modelValue', 'optionItems', 'emptyText', 'itemTitles'],
  setup(props) {
    return {props}
  },
  template: `
    <div class="col">
      <select class="form-select" :value="props.modelValue" :title="(itemTitles||[])[props.modelValue]" @change="$emit('update:modelValue', $event.target.value)">
        <option v-for="item in ['' , ...props.optionItems]" :title="(itemTitles||[])[item]" :value="item">{{item || props.emptyText}}</option>
      </select>
    </div>`
  // Can also target an in-DOM template:
  // template: '#my-template-element'
}
