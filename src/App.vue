<template>
    <div class="flex flex-col min-h-screen overflow-hidden color_gp">
        <!-- Site header -->
        <Header />
        <!-- v-if="!header_view" -->
        <!-- <HeaderWhite v-else /> -->
    
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
    import Header from './components/header/Index.vue';
    import HeaderWhite from './components/header/detail.vue';
    import Footer from './components/footer/Index.vue';

    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })

    // const header_view = ref(window.location.href.indexOf('detalle') > -1)

    // watchEffect(() => console.log(header_view.value))

    // //header_view.value =  window.location.href.indexOf('detalle') > -1

    console.log("App Init");
</script>

<style>
    .color_gp {
        background: #002554;
    }
</style>
