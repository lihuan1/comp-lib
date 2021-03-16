export default {
  // 防抖
  debounce: (fn, delay) => {
    var timer = null
    return function () {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(fn, delay)
    }
  },
  // 对象转URL参数字符串
  objectToQueryString: (obj) => {
    return Object.keys(obj).map(function (key) {
      return ''.concat(encodeURIComponent(key), '=').concat(encodeURIComponent(obj[key]))
    }).join('&')
  },
  // 深拷贝
  deepClone: function deepClone (source) {
    if (!source && typeof source !== 'object') {
      throw new Error('error arguments', 'shallowClone')
    }
    const targetObj = source?.constructor === Array ? [] : {}
    Object.keys(source).forEach(keys => {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = deepClone(source[keys])
      } else {
        targetObj[keys] = source[keys]
      }
    })
    return targetObj
  },
  // 获取url参数
  getQueryParams: (url) => {
    const search = url.split('?')[1]
    const result = {}
    const strs = search?.split('&') || []
    for (let i = 0; i < strs.length; i++) {
      result[strs[i].split('=')[0]] = unescape(strs[i]?.split('=')[1])
    }
    return result
  },
  // 计算一个元素相比较另外一个元素的偏移
  getOffsetRectRelativeToCustomParent: (element, parent) => {
    if (!element || !parent) {
      return null
    }
    const elementRect = element.getBoundingClientRect()
    const parentRect = parent.getBoundingClientRect()

    const rect = {
      top: elementRect.top - parentRect.top,
      left: elementRect.left - parentRect.left,
      bottom: (elementRect.top - parentRect.top) + elementRect.height,
      right: (elementRect.left - parentRect.left) + elementRect.width,
      width: elementRect.width,
      height: elementRect.height
    }
    return rect
  },
  // 寻找option
  findOption: (options, source) => {
    let target = ''
    const recursion = (arr) => {
      return arr.some(item => {
        if (item.value === source) {
          target = item
          return true
        } else if (item.children && item.children.length) {
          return recursion(item.children)
        } else {
          return false
        }
      })
    }
    recursion(options)
    return target
  },
  // 两个数组的数据是否相等、不包括顺序
  isArrayEqual: (arr1, arr2) => {
    let isEqual = true
    if (arr1.length != arr2.length) {
      isEqual = false
    } else {
      arr1.forEach((i) => {
        if (!arr2.includes(i)) {
          isEqual = false
        }
      })
    }
    return isEqual
  },
  // 比较两个数组是否有交集
  isArrayInclude: (arr1, arr2) => {
    let isInclude = false
    arr1.forEach((i) => {
      if (arr2.includes(i)) {
        isInclude = true
      }
    })
    return isInclude
  },
  // 对象去除属性
  objectDeleteKey: (item, uselessKeys) =>
    Object.keys(item).reduce((acc, key) => {
      return uselessKeys.includes(key) ? acc : { ...acc, [key]: item[key] }
    }, {}
    )
}
