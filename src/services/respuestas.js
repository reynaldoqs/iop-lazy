import axios from 'axios'
export default {
  getRespuestas(idRuta, limit = 100, page = 1) {
    return axios
      .get(`/rutas/${idRuta}/respuestas?limite=${limit}&pagina=${page}`)
      .then(data => {
        return data
      })
      .catch(err => {
        return err.response
      })
  },
  getRespuestaParametros(idRuta, idRespuesta) {
    return axios
      .get(`/rutas/${idRuta}/respuestas/${idRespuesta}`)
      .then(data => {
        return data
      })
      .catch(err => {
        return err.response
      })
  }
}
