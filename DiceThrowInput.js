export default {
  props: ['modelValue', 'inputName'],
  setup(props) {
    return { props }
  },
  template: `
    <div class="col"><input class="form-control" maxlength="3" minlength="3" type="text" :value="modelValue.join(',')" @input="event => $emit('update:modelValue', event.target.value.split('').map(c => parseInt(c, 10)).filter(c => !isNaN(c)))"  :placeholder="inputName"/></div>
   `
  // Can also target an in-DOM template:
  // template: '#my-template-element'
}
