import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '@/stores/counter'

describe('Counter Store', () => {
  beforeEach(() => {
    // Crear una nueva instancia de Pinia para cada prueba
    setActivePinia(createPinia())
  })

  it('Probar inicialización del contador en cero', () => {
    const store = useCounterStore()
    expect(store.count).toBe(0)
  })

  it('Probar que incrementa el contador', () => {
    const store = useCounterStore()
    // Verificar valor inicial
    expect(store.count).toBe(0)

    // Incrementar y verificar
    store.increment()
    expect(store.count).toBe(1)

    // Incrementar nuevamente y verificar
    store.increment()
    expect(store.count).toBe(2)
  })

  it('Probar el decremento del contador', () => {
    const store = useCounterStore()
    // Verificar valor inicial
    expect(store.count).toBe(0)

    // Decrementar y verificar
    store.decrement()
    expect(store.count).toBe(-1)

    // Decrementar nuevamente y verificar
    store.decrement()
    expect(store.count).toBe(-2)
  })
})
