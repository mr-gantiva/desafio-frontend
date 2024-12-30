<script setup>
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter'

// Obtener el contador y las funciones para incrementar y decrementar
const contador = useCounterStore()

</script>

<template>
    <div class="container">
        <div class="col-8 offset-2">
            <div class="container box-contador d-flex flex-column justify-content-center align-items-center py-5">
                <h2>Contador</h2>
                <h3>{{ contador.count }}</h3>
                <div class="button-box">
                    <button @click="contador.increment" class="btn btn-success mx-2">Incrementar</button>
                    <button @click="contador.decrement" class="btn btn-warning mx-2">Decrementar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.box-contador {
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>