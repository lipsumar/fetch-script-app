import axios from 'axios'

export default {
  execute (code, sessionId) {
    return axios.request({
      url: 'http://localhost:3000/execute',
      method: 'post',
      headers: {
        'Private-token': 'the-token'
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
