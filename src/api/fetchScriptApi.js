import axios from 'axios'
import tokenManager from './tokenManager'

export default {
  execute (code, sessionId) {
    return axios.request({
      url: 'http://localhost:3000/execute',
      method: 'post',
      headers: {
        'Private-token': tokenManager.token
      },
      data: {
        code,
        sessionId,
        dumpVars: true
      }
    })
  },
  startSession () {
    return axios.request({
      url: 'http://localhost:3000/start-session',
      method: 'post',
      headers: {
        'Private-token': 'the-token'
      }
    }).then(resp => resp.data.sessionId)
  }
}
