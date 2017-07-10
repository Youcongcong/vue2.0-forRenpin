/*
 * 将目录中所有组件名称转成首字母大写的驼峰表达式，然后全部导出。
 * 例如c-button => CButton，c-group-cell＝>CGroupCell
**/

//const modules = require.context('./', false, /\.vue$/)
// export default modules.keys().reduce((module, key) => {
//   module[key.replace(/-[a-z]/g, $1 => $1.split('-')[1].toUpperCase()).replace(/(^\.\/)|(.vue)$/g, '').replace(/^c/, $1 => $1.toUpperCase())] = modules(key)
//   return module
// }, {})

/**
 *  将目录中所有以./c-开头的目录和.vue结尾的文件转成首字母大写的驼峰表达式，然后全部导出。
 *  './c-picker/c-picker.vue' => CPicker : Object，
 *  './c-picker/c-picker-column.vue' ＝> CPickerColumn : Object
 */
const modulesDir = require.context("./", true, /^\.\/c-.*\.vue$/);

export default modulesDir.keys().reduce((module, key) => {
  let moduleKey = key.split('/')[2].split('.')[0];
  module[moduleKey.replace(/-[a-z]/g, $1 => $1.split('-')[1].toUpperCase()).replace(/.vue$/g, '').replace(/^c/, $1 => $1.toUpperCase())] = modulesDir(key)
  return module
}, {})
