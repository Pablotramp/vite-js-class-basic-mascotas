import { v4 as generarCodigo } from 'uuid'
import { Mascota } from './models/Mascota'
import formRaw from './templates/form-mascotas.html?raw'

/**
 * Gestionar los eventos del formulario
 * @param {HTMLFormElement} element
 */
function manipulacionFormulario (element) {
  element.addEventListener('submit', (e) => {
    e.preventDefault()

    // Validación datos
    const nombre = element.nombre.value.trim()
    const microchip = element.microchip.value.trim()
    const tipo = element.tipo.value.trim()
    const genero = element.genero.value
    const edad = Number(element.edad.value)

    // Instancias la clase y cargas datos
    const p1 = new Mascota({
      name: nombre,
      type: tipo,
      microchip,
      id: generarCodigo(),
      age: edad,
      sexo: genero
    })
    // Mostrar datos
    element.querySelector('#content').innerHTML = p1.getData()
  })
  element.querySelector('#rango-edad')
    .addEventListener('input', (e) => {
      const input = e.target
      element.querySelector('#edad').value = input.value
    })
}

/**
 * Punto de entrada de la aplicación
 * @param {HTMLDivElement} rootElement
 */
export function mascotaApp (rootElement) {
  if (!rootElement) throw new Error('Elemento raíz no encontrado')
  rootElement.innerHTML = '<h1>Mascotas</h1>'
  rootElement.innerHTML += formRaw
  manipulacionFormulario(rootElement.querySelector('#myForm'))
}
