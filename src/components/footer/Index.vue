<template>
    <footer class="tr">
        <div class="py-12 lg:py-16">
            <div class="max-w-6xl mx-auto px-4 sm:px-6">
                <div class="grid lg:grid-cols-12 gap-5 lg:gap-20 mb-5 lg:mb-12">
                    <!-- Logos -->
                    <div class="lg:col-span-1 lg:col-span-2">
                        <div class="mb-4 text-left">
                            <h6 class="text-white font-casper font-medium mb-1">CORPORATIVO</h6>
                        </div>
                        <div class="flex flex-row lg:flex-col">
                            <div class="mb-8">
                                <img src="../../assets/images/logo/gpo-premier.png" class="w-4/4">
                            </div>
                            <div class="mb-8">
                                <img src="../../assets/images/logo/mercado-premier.png" class="w-4/4">
                            </div>
                            <div class="mb-8">
                                <img src="../../assets/images/logo/premier-nuts.png" class="w-4/4">
                            </div>
                        </div>
                    </div>

                    <div class="md:col-span-6 lg:col-span-6 grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                        <!-- Links -->
                        <div class="text-sm hidden lg:block">
                            <div class=" mb-2">
                                <router-link to="/">
                                    <h6 class="text-white font-casper font-medium mb-1">INICIO</h6>
                                </router-link>
                            </div>
                            <div class=" mb-2">
                                <router-link to="/somos">
                                    <h6 class="text-white font-casper font-medium mb-1">SOMOS</h6>
                                </router-link>
                            </div>
                            <div class=" mb-2">
                                <router-link to="/productos">
                                    <h6 class="text-white font-casper font-medium mb-1">PRODUCTOS</h6>
                                </router-link>
                            </div>
                            <div class=" mb-2">
                                <router-link to="/ocean_spray">
                                    <h6 class="text-white font-casper font-medium mb-1">OCEN SPRAY</h6>
                                </router-link>
                            </div>
                            <div class=" mb-2">
                                <router-link to="/contacto">
                                    <h6 class="text-white font-casper font-medium mb-1">CONTACTO</h6>
                                </router-link>
                            </div>
                            <div class=" mb-2">
                                <router-link to="#">
                                    <h6 class="text-white font-casper font-medium mb-1">TERMINOS Y <br> CONDICIONES</h6>
                                </router-link>
                            </div>
                            <div class=" mb-2">
                                <router-link to="#">
                                    <h6 class="text-white font-casper font-medium mb-1">POLITICAS</h6>
                                </router-link>
                            </div>
                            <div class=" mb-2">
                                <router-link to="#">
                                  <h6 class="text-white font-casper font-medium mb-1">AYUDA</h6>
                                </router-link>
                            </div>
                        </div>

                        <!-- Info Brands -->
                        <div class="text-sm">
                            <div class="mb-2 lg:mb-4">
                                <router-link to="#">
                                    <h6 class="text-white font-casper font-medium mb-1">SUC. GUADALAJARA</h6>
                                </router-link>
                            </div>
                            <div class="mb-2 lg:mb-4">
                                <span class="text-white font-casper">
                                    Mercado de Abastos, calle 7 Bloque G # 701, <br> Mercado de Abastos, Guadalajara, Jal.
                                </span> 
                                <br class="hidden lg:block">
                                <span class="text-white font-casper">
                                    <br>
                                    33 8000 8300 irr@gpopremier.com
                                </span>
                            </div>
                        </div>

                        <!-- Info Planta -->
                        <div class="text-sm mt-4 md:mt-0">
                            <div class="mb-2 lg:mb-4">
                                <router-link to="#">
                                    <h6 class="text-white font-casper font-medium mb-1">PLANTA <br class="hidden lg:block"> PROCESADORA</h6>
                                </router-link>
                            </div>
                            <div class="mb-2 lg:mb-4">
                                <span class="text-white font-casper">
                                    Camino Antiguo a San Isidro Mazatepec # 910, Col. Nicolás R. Casilla, C.P. 45645 Tlajomulco de Zuñiga, Jalisco, México.
                                </span> 
                                <br class="hidden lg:block">
                                <span class="text-white font-casper">
                                    <br>
                                    33 3686 1438 hrl@gpopremier.com
                                </span>
                            </div>
                        </div>
                    </div>
                     <!-- Social -->
                    <div class="md:col-span-3 lg:col-span-3 hidden lg:block">

                        <div class="mb-4 text-left">
                            <h6 class="text-white font-medium mb-1">SUSCRIBETE</h6>
                        </div>
                        <br class="hidden lg:block">
                        <div class="mb-8">
                            <img src="../../assets/images/social/social_h.png">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>