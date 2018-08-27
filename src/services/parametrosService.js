import axios from 'axios'
export default {
  getParametros(idRuta, limit = 100, page = 1) {
    return axios
      .get(`/rutas/${idRuta}/parametros?limite=${limit}&pagina=${page}`)
      .then(data => {
        return data
      })
      .catch(err => {
        return err.response
      })
  }

}
