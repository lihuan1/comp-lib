import qs from 'qs'

const typeConfig = {
  json: (data) => {
    return data
  },
  'x-www-form-urlencoded': (data) => {
    return qs.stringify(data)
  },
  'multipart/form-data': (data) => {
    const formData = new FormData()
    for (const key in data) {
      formData.append(key, data[key])
    }
    return formData
  }
}
function handleData (type, data) {
  return typeConfig[type](data)
}
function request (axios) {
  return {
    post: (url, data, extend = { type: 'json' }) => {
      const defaultConfig = {
        url,
        method: 'POST',
        data: handleData(extend.type, data)
      }
      const config = { ...defaultConfig, ...extend }
      return axios(config).then(res => {
        return res
      }, err => {
        return err
      })
    },
    get: (url, data, extend = {}) => {
      const defaultConfig = {
        url,
        method: 'GET',
        params: data
      }
      const config = { ...defaultConfig, ...extend }
      return axios(config).then(res => {
        return res
      }, err => {
        return err
      })
    },
    put: (url, data, extend = { type: 'json' }) => {
      const defaultConfig = {
        url,
        method: 'PUT',
        data: handleData(extend.type, data)
      }
      const config = { ...defaultConfig, ...extend }
      return axios(config).then(res => {
        return res
      }, err => {
        return err
      })
    },
    deletes: (url, data, extend = { type: 'json' }) => {
      const defaultConfig = {
        url,
        method: 'DELETE',
        data: handleData(extend.type, data)
      }
      const config = { ...defaultConfig, ...extend }
      return axios(config).then(res => {
        return res
      }, err => {
        return err
      })
    }
  }
}
export default request