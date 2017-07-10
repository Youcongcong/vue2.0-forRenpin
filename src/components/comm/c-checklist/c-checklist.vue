<template>
  <div class="['c-checklist', class]" :class="[max <= value.length && type !== 'radio' ? 'is-limit' : '']">
    <label class="c-checklist-title" v-text="title"></label>
    <c-cell v-for="option in options">
      <label class="c-cell-title">
        <span :class="{'is-right': align === 'right', 'c-checklist-box' : type === 'checkbox', 'c-radio-box' : type === 'radio' }" >
          <input
            :class="{'c-checklist-box-core' : type === 'checkbox', 'c-radio-box-core' : type === 'radio'}"
            :type="type"
            v-model="value"
            :disabled="option.disabled"
            :value="option.value || option">
        </span>
        <span class="c-checklist-box-label" v-text="option.label || option"></span>
      </label>
    </c-cell>
  </div>
</template>

<script>
import CCell from 'components/comm/c-cell';

/**
 * c-checklist
 * @module components/checklist
 * @desc 复选框与单选框列表，依赖 cell 组件
 *
 * @param {(string[]|object[])} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string[]} value - 选中值的数组
 * @param {string} title - 标题
 * @param {number} [max] - 最多可选的个数，为checkbox时有效
 * @param {string} [align=left] - checkbox 对齐位置，`left`, `right`
 *
 *
 * @example
 * <c-checklist :value.sync="value" :options="['a', 'b', 'c']"></c-checklist>
 * <c-checklist :value.sync="value" :options="['a', 'b', 'c']" type='radio'></c-checklist>
 */
export default {
  name: 'c-checklist',

  props: {
    class: {
      type: String,
      default: ''
    },
    max: Number,
    title: String,
    align: String,
    type: {
      type: String,
      default : 'checkbox'
    },
    options: {
      type: Array,
      required: true
    },
    value: [Array, String]
  },

  components: {
    CCell
  },

  computed: {
    limit() {
      return this.max < this.value.length;
    }
  },

  watch: {
    value() {
      if (this.limit) {
        this.value.pop();
      }
    }
  }
};
</script>

<style src="./checklist"></style>