<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
            <div class="collapse navbar-collapse d-flex justify-content-center align-items-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink to="/"><a class="nav-link">Home</a></RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/about"><a class="nav-link">About</a></RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.nav-link {
    color: white;
    text-decoration: none;
    font-size: 1.25rem;
}

.nav-link:hover {
    color: yellowgreen !important;

}

a {
    color: white;
    text-decoration: none;
}
</style>