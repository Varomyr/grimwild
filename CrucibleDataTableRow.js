import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

export default {
  props: ['crucible', 'crucibleName'],
  setup(props) {
    return { props }
  },
  template: `
    <tr v-for="(row, index) in crucible.data" :class="{'table-group-divider': index === 0}">
      <th v-if="index === 0" :rowspan="crucible.data.length" scope="rowgroup">{{props.crucibleName}}</th>
      <th scope="row">{{index + 1}}</th>
      <td v-for="(item, index) in row" :colspan="index !== 0 ? (6 / (row.length - 1)) : 1">{{item}}</td>
    </tr>`
  // Can also target an in-DOM template:
  // template: '#my-template-element'
}
