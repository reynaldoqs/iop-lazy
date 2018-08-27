export default {
  statusCode(value) {
    let respuesta = httpMessages.findIndex(res => res.status === value);
    return httpMessages[respuesta]
  }
}
let httpMessages = [
  {
    status: 200,
    hasMsg: false
  },
  {
    status: 201,
    hasMsg: true,
    message: 'Item creado en la base de datos'
  }
]