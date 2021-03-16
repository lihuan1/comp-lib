import EaseText from '../ease-text'
const components = {
  EaseText
}
const install = function (Vue) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}
export default install
