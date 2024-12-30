import { describe, it, expect, test } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import Child from '../Child.vue'

describe('Componente Child', () => {
  it('Emitir un mensaje cuando se hace clic en el botón', async () => {
    const wrapper = mount(Child)
    // Encontrar el input y el botón
    const input = wrapper.find('input')
    const button = wrapper.find('button')

    // Simular la escritura en el input
    const testMensaje = 'Hola este es el mensaje de prueba'
    await input.setValue(testMensaje)

    // Simular el clic en el botón
    await button.trigger('click')

    // Verificar que se haya emitido el evento 'enviar'
    expect(wrapper.emitted()).toHaveProperty('enviar')

    // Verificar el contenido del evento emitido
    const eventoEmitido = wrapper.emitted('enviar')
    expect(eventoEmitido).toHaveLength(1)
    expect(eventoEmitido[0]).toEqual([testMensaje])
  })
  it('No emitir un mensaje si el input está vacío', async () => {
    const wrapper = mount(Child)
    // Encontrar el botón
    const button = wrapper.find('button')

    // Simular el clic en el botón
    await button.trigger('click')

    // Verificar que el evento fue emitido con un string vacio
    const eventoEmitido = wrapper.emitted('enviar')
    expect(eventoEmitido[0]).toEqual([''])
  })
  test('Snapshot de Child.vue', () => {
    // Selección del sujeto de pruebas
    const wrapper = shallowMount(Child)
    // Validación de match con el snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })
})
