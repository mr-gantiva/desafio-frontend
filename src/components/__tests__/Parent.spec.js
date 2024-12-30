import { shallowMount } from '@vue/test-utils'
import Parent from '@/components/Parent.vue'
import { describe, it, expect, test } from 'vitest'

describe('Componente Parent.vue', () => {
  test('Snapshot de Parent.vue', () => {
    // Selección del sujeto de pruebas
    const wrapper = shallowMount(Parent)
    // Validación de match con el snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })
})
