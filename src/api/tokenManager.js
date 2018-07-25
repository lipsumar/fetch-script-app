export default {
  token: null,
  hasToken () {
    return this.token !== null
  },
  setToken (token) {
    this.token = token
  }
}
