import axios from 'axios'
export default {
  login(creds) {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth', creds)
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err.response.data.error)
        })
    })
  },
  serviceRestPassword(idChange, data) {
    return axios
      .post(`/auth/${idChange}/cambiarClave`, data, {
        'Content-type': 'application/x-www-form-urlencoded'
      })
      .then(() => {
        notificationApi.showSuccessful('Contraseña camabiada')
      })
      .catch(err => {
        notificationApi.showError(err.response.data.error)
      })
  }
}
