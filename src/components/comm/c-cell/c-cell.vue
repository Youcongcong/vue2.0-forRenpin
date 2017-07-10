<template>
  <a class="c-cell">
    <span class="c-cell-mask" v-if="isLink"></span>
    <c-label class="c-cell-title" v-if="title">
      <c-icon v-if="icon" :value='icon'></c-icon>
      <c-image class="c-cell-image" v-if="img.src" :src="img.src" :width="img.width" :height="img.width" :alt="img.alt" :title="img.title"></c-image>
      <span class='c-cell-text'>{{title}}</span>
      <c-label v-if="label" class="c-cell-label">{{label}}</c-label>
    </c-label>
    <c-value class='c-cell-value'>
      <span v-text="value"></span>
    </c-value>
    <slot></slot>
    <c-icon v-if="isLink" class="icon-more"></c-icon>
  </a>
</template>

<script>

/**
 * c-cell
 * @module components/cell
 * @desc 单元格
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .cui-xxx）
 * @param {string} [title] - 标题
 * @param {string} [label] - 备注信息
 * @param {boolean} [is-link=false] - 可点击的链接
 * @param {string} [value] - 右侧显示文字
 *
 * @example
 * <c-cell title="标题文字" icon="back" is-link value="描述文字"></c-cell>
 */
import CTitle from 'components/comm/c-title'
import CIcon from 'components/comm/c-icon'
import CLabel from 'components/comm/c-label'
import CValue from 'components/comm/c-value'
import CImage from 'components/comm/c-image'

export default {
  name: 'c-cell',

  props: {
    icon: String,
    title: String,
    label: String,
    isLink: Boolean,
    value: String,
    img: {
      type : Object,
      default(){
        return {
          width: 0,
          height: 0,
          alt: '',
          title:''
        }
      }
    }
  },
  components: {
      CTitle,
      CIcon,
      CLabel,
      CValue,
      CImage
  }
};
</script>

<style src="./cell"></style>
