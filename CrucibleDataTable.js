import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import CrucibleDataTableRow from "./CrucibleDataTableRow.js";

export default {
  components: {
    CrucibleDataTableRow
  },
  props: ['heading', 'crucibles', 'crucibleNames'],
  setup(props) {
    return { props }
  },
  template: `
    <div>
      <h2 class="mt-5">{{props.heading}}</h2>
      <div class="row">
        <table class="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th v-for="(entry, index) in crucibles[0].data[0]">{{index + 1}}</th>
            </tr>
         
          </thead>
          <tbody>
            <crucible-data-table-row v-for="(crucible, index) in props.crucibles" :crucible="crucible" :crucibleName="props.crucibleNames[index]"/>
          </tbody>
        </table>
      </div>
    </div>`
  // Can also target an in-DOM template:
  // template: '#my-template-element'
}
