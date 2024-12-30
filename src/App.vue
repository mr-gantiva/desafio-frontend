<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navegador from './components/Navegador.vue'
import Contador from './components/Contador.vue'
import Parent from './components/Parent.vue'
</script>

<template>
  <header>
    <Navegador />
  </header>

  <RouterView class="pt-5" />

  <main class="container">
    <div class="wrapper py-5">
      <Contador />
    </div>

    <section class="container">
      <Parent />
    </section>
  </main>


</template>

<style scoped></style>
