<template>
    <div class="flex flex-col min-h-screen overflow-hidden color_gp">
        <!-- Site header -->
        <Header />
    
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
    import Header from './components/header/Index.vue';
    import Footer from './components/footer/Index.vue';
    console.log("App Init");
</script>

<style>
    .color_gp {
        background: #002554;
    }
</style>
