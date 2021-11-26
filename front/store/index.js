export const state = () => ({
  socket: {
    isConnected: true,
    message: '',
    reconnectError: false
  }
})

export const mutations = {
  SOCKET_ONOPEN (state, event) {
    console.log('What can I do for you?')
    state.socket.isConnected = true
  },
  SOCKET_ONCLOSE (state, event) {
    console.log('Oh dang, I can\'t reach you anymore!')
    state.socket.isConnected = false
  },
  SOCKET_ONERROR (state, event) {
    console.error(state, event)
  },
  SOCKET_ONMESSAGE (state, message) {
    state.socket.message = message
  },
  SOCKET_RECONNECT (state, count) {
    console.info(state, count)
  },
  SOCKET_RECONNECT_ERROR (state) {
    console.log('We are back up and sailing guys! Nothing to worry about.')
    state.socket.reconnectError = true
  }
}

export const actions = {

}
