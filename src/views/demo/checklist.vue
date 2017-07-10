<template>
    <div class="page-checklist">
        <div class="page-title">Checklist & radio</div>

        <c-checklist type='checkbox' class="page-part" title="复选框列表" :value.sync="value1" :options="options1">
        </c-checklist>

        <div>
            <c-cell title="选中的项">{{ value1 | json }}</c-cell>
        </div>

        <c-checklist class="page-part" title="第二个复选框列表" :value.sync="value2" :options="options2">
        </c-checklist>

        <div>
            <c-cell title="选中的项">{{ value2 | json }}</c-cell>
        </div>

        <c-checklist class="page-part" title="最多选两个" :max="2" :value.sync="value3" :options="options3">
        </c-checklist>

        <div>
            <c-cell title="选中的项">{{ value3 | json }}</c-cell>
        </div>

        <c-checklist type='radio' align="right" class="page-part" title="右对齐" :value.sync="value4" :options="options4">
        </c-checklist>

        <div>
            <c-cell title="radio">{{ value4 | json }}</c-cell>
        </div>
    </div>
</template>

<script>
import {CCell, CChecklist} from 'components'

export default {
  data() {
    return {
      value1: [],
      value2: ['选中禁用的值'],
      value3: ['选项A'],
      value4: "选项B"
    };
  },
  components: {
      CCell, 
      CChecklist
  },

  created() {
    this.options1 = ['选项A', '选项B', '选项C'];
    this.options3 = ['选项A', '选项B', '选项C', '选项D'];
    this.options4 = ['选项A', {
        label: '选项B',
        value: '选项B',
        disabled: true
      }, '选项C', '选项D'];
    this.options2 = [
      {
        label: '被禁用',
        value: '值F',
        disabled: true
      },
      {
        label: '选中禁用',
        value: '选中禁用的值',
        disabled: true
      },
      {
        label: '选项A',
        value: '值A'
      },
      {
        label: '选项B',
        value: '值B'
      }
    ];
  }
};
</script>

<style>
    .page-checklist .page-part {
        margin-top: 40px;
    }
</style>