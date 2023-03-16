import { v4 as generarCodigo } from 'uuid'
import formRaw from './mascotas/templates/form-mascotas.html?raw'
import { renderizarMascota } from './mascotas/views/render-mascota'

/**
 * Gestionar los eventos del formulario
 * @param {HTMLFormElement} element
 */
function gestionFormulario (element) {
  element.addEventListener('submit', (e) => {
    e.preventDefault()

    // Obtención datos formularios Validación datos
    const name = element.name.value.trim()
    const microchip = element.microchip.value.trim()
    const type = element.type.value.trim()
    const gender = element.gender.value
    const age = Number(element.age.value)
    
    const data = {
      name,
      microchip,
      type,
      gender,
      age,
      id: generarCodigo()
    }
    if (element['tipo-mascota'].value === 'mascota') {
      renderizarMascota(data, 'mascota')
    } else {
      const weight = Number(element.weight.value)
      const food = element.food.value
      const race = element.race.value
      renderizarMascota({ weight, food, race, ...data }, 'perro')
    }
  })
}

function manipulacionFormulario (element) {
  element.querySelector('#range-age')
    .addEventListener('input', (e) => {
      const input = e.target
      element.querySelector('#age').value = input.value
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
  gestionFormulario(rootElement.querySelector('#myForm'))
  manipulacionFormulario(rootElement.querySelector('#myForm'))
}
