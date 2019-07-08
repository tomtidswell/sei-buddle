class Auth {
  static setToken(token) {
    localStorage.setItem('token', token)
  }

  static getToken() {
    return localStorage.getItem('token')
  }

  static logout() {
    localStorage.removeItem('token')
  }

  static getPayload() {
    const token = this.getToken()
    if (!token) return false
    const parts = token.split('.')
    if (parts.length < 3) return false
    return JSON.parse(atob(parts[1]))
  }

  static isAuthenticated() {
    const payload = this.getPayload()
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
  }
}

export default Auth
// class Auth {
//
//   static setToken(data){
//     console.log(data)
//     localStorage.setItem('plantswap.portfolio', JSON.stringify(data) )
//   }
//
//
//   static isToken(){
//     return !!localStorage.getItem('plantswap.portfolio')
//   }
//
//
//   static deleteToken(){
//
//   }
//
//
//   static getToken(){
//     const token = localStorage.getItem('plantswap.portfolio')
//     //console.log('Full token', token)
//     if (!token) return null
//     return JSON.parse(token).token
//   }
//
//   static extractPayload(token){
//     if (!token) return false
//     const parts = token.split('.')
//     if (parts.length < 3) return false
//     //console.log('raw token', parts)
//     //console.log('token data', atob(parts[1]))
//     return JSON.parse(atob(parts[1]))
//   }
//
//   static getTokenPayload(){
//     const token = this.getToken()
//     //console.log('Token', token)
//     return this.extractPayload(token)
//   }
//
//   static isAuthenticated(){
//     const payload = this.getTokenPayload()
//     const now = Math.round(Date.now() / 1000)
//     return now < payload.exp
//   }
//
//   static getUser(){
//     return this.getTokenPayload().sub
//   }
//
//   static logOut(){
//     localStorage.removeItem('plantswap.portfolio')
//   }
// }
//
//
// module.exports = Auth
