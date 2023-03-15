import { v4 as generarCodigo } from 'uuid'
import { Mascota, Perro } from './models'
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
    let p1 = null

    if (element['tipo-mascota'].value === 'mascota') {
      // Instancias la clase y cargas datos
        p1 = new Mascota({
        name: nombre,
        type: tipo,
        microchip,
        id: generarCodigo(),
        age: edad,
        sexo: genero
      })
    } else {
      p1 = new Perro({
        name: nombre,
        type: tipo,
        microchip,
        id: generarCodigo(),
        age: edad,
        sexo: genero
      }, {raza: 'molo', peso: 343, alimentacion: 'lala'})
    }

    // Mostrar datos
    if (p1) element.querySelector('#content').innerHTML = p1.getData()
  })
  element.querySelector('#rango-edad')
    .addEventListener('input', (e) => {
      const input = e.target
      element.querySelector('#edad').value = input.value
    })
  element['tipo-mascota'].addEventListener('change', e => {
    const select = e.target
    const divElement = element.querySelector('#otros-campos')
    if (select.value === 'perro') {
      // Muestro campos
      divElement.classList.remove('oculto')
    } else {
      // oculto campos
      divElement.classList.add('oculto')
    }
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
