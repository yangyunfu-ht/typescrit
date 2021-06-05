import request from './request'

const http = {
  userInfo () {
    return request({
      url: '/user/account'
    })
  },
  hotTopic (limit: number) {
    return request({
      url: '/hot/topic',
      params: {
          limit: limit
      }
  })
  }
}

export default http