/* eslint-disable accessor-pairs */
export class Mascota {
  #id = 1
  tipo = 'Sin definir'
  nombre = 'Sin nombre'
  microchip = ''
  sexo = 'f'
  edad = 0

  /**
   * Método constructor donde cargo mascota
   * @param {Like<Mascota>} Mascota
   * @param {string} Mascota.tipo Ejemplos: cánido, felino ...
   * @param {string} Mascota.nombre
   * @param {string} Mascota.microchip
   * @param {string} Mascota.sexo - Formato f|m
   * @param {number} Mascota.edad En número entero
   * @param {string} Mascota.id Identificador único
   */

  constructor ({
    nombre = 'Desconocido',
    tipo = 'Cánido',
    microchip = '',
    edad = 0,
    sexo = 'f',
    id = ''
  }) {
    this.#id = id
    this.tipo = tipo
    this.nombre = nombre
    this.edad = edad
    this.sexo = sexo
    this.microchip = microchip
  }

  /**
   * Función que permite meter el nombre de una mascota
   * @param {string} nombre Nombre de la mascota
   */
  setNombre (nombre) {
    if (typeof nombre === 'string' && nombre.length) this.nombre = nombre
    else throw new Error(`Formato no válido ${nombre}`)
  }

  /**
   * @param {number} edad
   */
  setEdad (edad) {
    if (Number.isInteger(Number(edad))) this.edad = edad
  }

  getId () {
    return this.#id
  }

  /**
   * Retorna una todas las propiedades públicas y privadas de la clase
   * @returns {object}
   */
  getData () {
    return {
      ...this,
      id: this.#id
    }
  }
}
