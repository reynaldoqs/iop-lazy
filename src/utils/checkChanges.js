export default {
  checkIt(oldObj, newerObj) {
    // a partir de un objeto viejo y un objeto nuevo, retorna los cambios
    let Keys = Object.keys(oldObj).filter(key => {
      if (newerObj[key] === null) {
        return false
      } else {
        return JSON.stringify(newerObj[key]) !== JSON.stringify(oldObj[key])
      }
    })
    let newDatos = {}
    Keys.forEach(key => (newDatos[key] = newerObj[key]))

    return newDatos
  },
  checkArray(arrayA = [], arrayB = []) {
    // retorna un array con items del arrayA + los items del Array B con el formato para guardar
    let rutas1 = arrayA.filter(rutaA => {
      return !arrayB.map(rutaB => rutaB.idRuta).includes(rutaA.idRuta)
    })
    let rutas2 = arrayB
      .filter(rutaB => {
        return rutaB.active
      })
      .map(ruta => {
        let newRuta = {
          idRuta: ruta.idRuta,
          idAmbiente: ruta.idAmbiente,
          idNormaTecnica: null
        }
        return newRuta
      })
    return [...rutas1, ...rutas2]
  }
}
