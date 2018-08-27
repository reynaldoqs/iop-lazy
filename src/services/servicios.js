import axios from 'axios'
export default {
  getServicios(limit = 10, page = 1) {
    return axios
      .get(`/servicios?limite=${limit}&pagina=${page}`)
      .then(data => {
        return data
      })
      .catch(err => {
        return err.response
      })
  },
  getRutas(id) {
    return axios
      .get(`/servicios/${id}/rutas`)
      .then(data => {
        return data
      })
      .catch(err => {
        return err.response
      })
  },
  getServicio(id) {
    return axios
      .get(`/servicios/${id}`)
      .then(data => {
        return data
      })
      .catch(err => {
        return err.response
      })
  },
  patchServicio(id, data) {
    return axios
      .patch(`/servicios/${id}`, data)
      .then(data => {
        return data
      })
      .catch(err => {
        return err.response
      })
  },
  searchServicio(query) {
    return axios
      .get(`/servicios?palabraClave=${query}`)
      .then(data => {
        return data
      })
      .catch(err => {
        return err.response
      })
  },
  postServicio(data) {
    return axios
      .post(`/servicios`, data)
      .then(data => {
        return data
      })
      .catch(err => {
        return err.response
      })
  }
}
