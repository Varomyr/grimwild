export default {
  props: ['resultItems', 'submit', 'duplicate', 'delete', 'isSpecialItem'],
  setup(props) {
    return {props}
  },
  template: `
      <div class="row my-1 " v-for="(item, index) in props.resultItems">
        <slot name="index" :index="index" :item="item" >
          <div class="col-1 py-2">
           {{index + 1}}:
          </div>
        </slot>

        <div v-if="item.edit" class="col">
          <div class="row">
            <slot name="selects" :item="item"></slot>
          </div>
        </div>
        <div v-else class="col py-2">
          <slot name="value" :item="item">
              <span>{{item.value}}&nbsp;</span>
          </slot>
        </div>
        
        <div v-if="!isSpecialItem || !isSpecialItem(item)" class="col-3">
          <button v-if="item.edit" class="btn btn-primary py-2" @click="props.submit(index)"><i class="bi bi-floppy"></i></button>
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
