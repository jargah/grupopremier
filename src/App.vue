<template>
    <div class="flex flex-col min-h-screen overflow-hidden color_gp">

        <!-- Page content -->
        <main class="flex-grow">
            <!-- Router Vue -->
            <router-view />
        </main>

        <!-- Site footer -->
        <Footer />
    </div>
</template>

<script setup>
    import { ref, watchEffect } from 'vue'
    import AOS from 'aos'
    import HeaderWhite from './components/header/detail.vue';
    import Footer from './components/footer/Index.vue';

    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })

    console.log("App Init");
</script>

<style>
    .color_gp {
        background: #002554;
    }
    .color_gpo {
        background: #FFFFFF;
    }
</style>
