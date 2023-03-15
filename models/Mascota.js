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
   * @param {MascotaLike: object} Mascota
   * @param {string} Mascota.type Ejemplos: cánido, felino ...
   * @param {string} Mascota.name
   * @param {string} Mascota.microchip
   * @param {number} Mascota.edad En número entero
   * @param {string} Mascota.id Identificador único
   */

  constructor ({
    name = 'Desconocido',
    type = 'Cánido',
    microchip = '',
    age = 0,
    sexo = 'f',
    id = ''
  }) {
    this.#id = id
    this.tipo = type
    this.nombre = name
    this.age = age
    this.sexo = sexo
    this.microchip = microchip
  }

  /**
   * Función que permite meter el nombre de una mascota
   * @param {string} name Nombre de la mascota
   */
  setNombre (name) {
    if (typeof name === 'string' && name.length) this.nombre = name
    else throw new Error(`Formato no válido ${name}`)
  }

  /**
   * @param {number} edad
   */
  set age (edad) {
    if (Number.isInteger(Number(edad))) this.edad = edad
  }

  getId () {
    return this.#id
  }

  /**
   * Retorna una lista html con todas las propiedades de la clase
   * @returns {string}
   */
  getData () {
    return `
      <ul>
        <li><strong>Código</strong> ${this.#id}</li>
        <li><strong>microchip</strong> ${this.microchip}</li>
        <li><strong>Nombre</strong> ${this.nombre}</li>
        <li><strong>Tipo</strong> ${this.tipo}</li>
        <li><strong>Edad</strong> ${this.edad}</li>
        <li><strong>Sexo</strong> ${this.sexo === 'f' ? 'Hembra' : 'Macho'}</li>
      </ul>
    `
  }
}
