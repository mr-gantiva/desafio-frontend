<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

const mensajeHijo = ref('')

const enviar = (texto) => {
    mensajeHijo.value = texto;
}

</script>

<template>
    <div class="container">
        <div class="col-8 offset-2 box-mensaje py-5">
            <h2 class="text-center bg-titulo">Componenten padre</h2>

            <h3 class="text-center">Mensaje recibido: <span class="bg-mensaje px-5 mx-3">{{ mensajeHijo }}</span></h3>
            <Child :mensaje="mensaje" @enviar="enviar" />
        </div>
    </div>
</template>

<style scoped>
.box-mensaje {
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.bg-mensaje {
    background-color: #f0f0f0;
    border-radius: 5px;
}
</style>