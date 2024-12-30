<script setup>
import { ref, defineProps } from 'vue'

const mensaje = ref('')

</script>

<template>
    <div class="container">
        <h2 class="text-center">Componenten hijo</h2>

        <div class="row">
            <div class="col-8 offset-2">
                <div class="container">
                    <div class="mb-3">
                        <input v-model="mensaje" type="text" class="form-control" placeholder="Escribe un mensaje">
                    </div>
                    <div class="mb-3 d-flex justify-content-center">
                        <button class="btn btn-success" @click="$emit('enviar', mensaje)">Enviar mensaje al
                            padre</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped></style>