<template>
  <div class="view-style" :style="{ color }">
    {{ text || '-' }}
  </div>
</template>
<script>
import Utils from '../utils'
const { findOption } = Utils

export default {
  name: 'easeText',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    // 值
    value: {
      type: [String, Boolean, Number, Array],
      default: ''
    },
    // 颜色
    color: {
      type: String,
      default: '#303133'
    },
    // 下拉项
    options: {
      type: Array,
      default: () => []
    },
    // 时间格式化
    dateFormatPattern: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      text: ''
    }
  },
  watch: {
    value: {
      handler () {
        this.init()
      },
      immediate: true
    },
    /*eslint-disable*/
    options: {
      handler (val) {
        this.init()
      },
      immediate: true
    }
  },
  methods: {
    init () {
      const { value, options, dateFormatPattern } = this
      this.text = value
      if (options.length) {
        // 多选
        if (Array.isArray(value)) {
          const arr = value.map((val) => {
            const res = findOption(options, val)
            return res?.label || ''
          })
          this.text = arr.join('、')
        } else {
          // 单选
          const target = findOption(options, this.value)
          if (target) {
            this.text = target.label
          }
        }
      } else if (dateFormatPattern && this.text) {
        this.text = this.$options.filters.formatDate(this.text, dateFormatPattern)
        // 初始化时获取input值
        this.$emit('input', this.text)
      }
    }
  }
}
</script>
