import io from 'socket.io-client'
import { socketUrl } from 'config'

const socketAPI = class socketAPI {
  socket

  connect = () => {
    this.socket = io.connect(socketUrl)
    return new Promise((resolve, reject) => {
      this.socket.on('connect', () => resolve(this.socket))
      this.socket.on('connect_error', error => reject(error))
    })
  }

  disconnect() {
    return new Promise((resolve) => {
      this.socket.disconnect(() => {
        this.socket = null
        resolve()
      })
    })
  }

  emit(event, data) {
    return new Promise((resolve, reject) => {
      if (!this.socket) return reject('No socket connection.')

      return this.socket.emit(event, data, (response) => {
        // Response is the optional callback that you can use with socket.io in every request. See 1 above.
        if (response.error) {
          return reject(response.error)
        }

        return resolve()
      })
    })
  }

  on(event, fun) {
    // No promise is needed here, but we're expecting one in the middleware.
    return new Promise((resolve, reject) => {
      if (!this.socket) return reject('No socket connection.')

      this.socket.on(event, fun)
      return resolve()
    })
  }
}

export default socketAPI
