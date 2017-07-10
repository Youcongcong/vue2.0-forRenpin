<template>
  <div class="v-misc">
    <c-pane style="background-color:gray">it's pane</c-pane>
    <c-modal :show.sync="showModal">showModal</c-modal>
    <c-modal :show.sync="showSheet" :actions="{}">
      <c-cell direction="row">
        <c-button>Action 1</c-button>
      </c-cell>
      <c-cell direction="row">
        <c-button>Action 2</c-button>
      </c-cell>
    </c-modal>
    <c-pane>
      <c-cell direction="column" style="height:100px">
        <c-flex align="center" @click="this.showModal=true">Show Modal</c-flex>
        <c-flex align="center" @click="this.showSheet=true">Show sheet-like Modal</c-flex>
      </c-cell>
      <c-cell direction="row">
        <c-icon class="c-cell-icon icon-user"></c-icon>
        <c-label class="c-cell-label">Align Center</c-label>
        <c-flex align="center">
          <c-switch :value.sync="model2.value"></c-switch>
        </c-flex>
      </c-cell>
      <c-cell direction="row">
        <c-icon class="c-cell-icon icon-check"></c-icon>
        <c-label class="c-cell-label">Align Right</c-label>
        <c-flex align="right">
          <c-switch :value.sync="model1.value"></c-switch>
        </c-flex>
      </c-cell>
    </c-pane>
    <c-image class="img1" src="images/logo.png"></c-image>
    <c-image class="img2" src="images/logo.png"
      width="500"
      height="500"></c-image>
  </div>
</template>

<script>
import CImage from 'components/c-image'
import CPane from 'components/c-pane'
import CCell from 'components/c-cell'
import CIcon from 'components/c-icon'
import CLabel from 'components/c-label'
import CSwitch from 'components/c-switch'
import CFlex from 'components/c-flex'
import CModal from 'components/c-modal'
import CButton from 'components/c-button'
export default {
  data () {
    return {
      model1: {
        label: 'Label',
        value: true
      },
      model2: {
        label: 'Label',
        value: 1
      },
      showModal: false,
      showSheet: false
    }
  },

  methods: {
    click1 () {
      this.click1ed = true
    },
    click2 () {
      this.click2ed = true
    }
  },

  components: {
    CImage,
    CPane,
    CIcon,
    CLabel,
    CSwitch,
    CCell,
    CFlex,
    CModal,
    CButton
  }
}
</script>
