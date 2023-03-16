import { Mascota, Perro } from '../models'

export function mascotaToModel (data) {
  const {
    name,
    microchip,
    age,
    id,
    gender,
    type
  } = data

  return new Mascota({ nombre: name, microchip, edad: age, id, sexo: gender, tipo: type })
}

export function perroToModel (data) {
  const {
    name,
    microchip,
    age,
    id,
    gender,
    type,
    weight,
    food,
    race
  } = data

  return new Perro({ peso: weight, alimentacion: food, raza: race, nombre: name, microchip, edad: age, id, sexo: gender, tipo: type })
}
