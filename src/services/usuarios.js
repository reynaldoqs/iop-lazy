import axios from 'axios'
export default {
  getUsuario(id) {
    return axios
      .get(`/usuarios/${id}`)
      .then(data => {
        return data
      })
      .catch(err => {
        return err.response
      })
  },
  getAmbientes(idUsuario) {
    return axios
      .get(`/usuarios/${idUsuario}/ambientes`)
      .then(data => {
        return data
      })
      .catch(err => {
        return err.response
      })
  }
}
