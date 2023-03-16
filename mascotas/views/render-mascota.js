import { mascotaToModel, perroToModel } from '../mappers/localMascotaToModel'

export function renderizarMascota (dataValue, tipo) {
  const mascota = (tipo === 'mascota')
    ? mascotaToModel(dataValue)
    : perroToModel(dataValue)
  const { id, nombre, raza, alimentacion, peso } = mascota.getData()
  const renderEL = document.querySelector('#content')
  renderEL.innerHTML = `Id: ${id}<br>`
  renderEL.innerHTML += `nombre: ${nombre}<br>`
  renderEL.innerHTML += mascota.raza ? `Raza: ${raza}<br>` : ''
  renderEL.innerHTML += mascota.alimentacion ? `Peso: ${alimentacion}<br>` : ''
  renderEL.innerHTML += mascota.peso ? `Peso: ${peso}<br>` : ''
}
