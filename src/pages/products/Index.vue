<template>
    <section>
        <div>
            <h4 class="absolute left-10 top-60 z-index-100 md:text-sm lg:text-3xl font-casper text-white">La empresa #1 en Mexico en distribución <br> Premier de frutos secos y nueces a nivel <br> nacional.</h4>
        </div>
        <Video :media="clip_1" :padding="0" />
    </section>
    <section class="cnt_p bg-white">
            <div class="mx-6 lg:mx-0">
                <div class="justify-center flex flex-wrap lg:flex-nowrap col-span-12">
                    <div class="col-span-12 md:col-span-6 lg:col-span-3">
                        <div class="flex flex-col items-center">
                            <img class="mb-4 w-3/4 lg:w-4/4" src="../../assets/images/products/1.png" />
                            <h4 class="text-xl font-medium mb-1 font-casper">Frutos secos</h4>
                            <div class="text-gray-500 mb-1">Description Producto 1</div>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-6 lg:col-span-3">
                        <div class="flex flex-col items-center">
                            <img class="mb-4 w-3/4 lg:w-4/4" src="../../assets/images/products/2.png" />
                            <h4 class="text-xl font-medium mb-1 font-casper">Frutas deshidratadas</h4>
                            <div class="text-gray-500 mb-1">Description Producto 2</div>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-6 lg:col-span-3">
                        <div class="flex flex-col items-center">
                            <img class="mb-4 w-3/4 lg:w-4/4" src="../../assets/images/products/3.png" />
                            <h4 class="text-xl font-medium mb-1 font-casper">Jamaica</h4>
                            <div class="text-gray-500 mb-1">Description Producto 3</div>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-6 lg:col-span-3">
                        <div class="flex flex-col items-center">
                            <img class="mb-4 w-3/4 lg:w-4/4" src="../../assets/images/products/4.png" />
                            <h4 class="text-xl font-medium mb-1 font-casper">Superfoods</h4>
                            <div class="text-gray-500 mb-1">Description Producto 4</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pt-32 mx-6 lg:mx-0">
                <div class="justify-center flex flex-wrap lg:flex-nowrap col-span-12">
                    <div class="col-span-12 md:col-span-6 lg:col-span-3">
                        <div class="flex flex-col items-center">
                            <img class="mb-4 w-3/4 lg:w-4/4" src="../../assets/images/products/2.png" />
                            <h4 class="text-xl font-medium mb-1 font-casper">Enchilados</h4>
                            <div class="text-gray-500 mb-1">Description Producto 1</div>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-6 lg:col-span-3">
                        <div class="flex flex-col items-center">
                            <img class="mb-4 w-3/4 lg:w-4/4" src="../../assets/images/products/1.png" />
                            <h4 class="text-xl font-medium mb-1 font-casper">Especias</h4>
                            <div class="text-gray-500 mb-1">Description Producto 2</div>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-6 lg:col-span-3">
                        <div class="flex flex-col items-center">
                            <img class="mb-4 w-3/4 lg:w-4/4" src="../../assets/images/products/5.png" />
                            <h4 class="text-xl font-medium mb-1 font-casper">Botanas</h4>
                            <div class="text-gray-500 mb-1">Description Producto 3</div>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-6 lg:col-span-3">
                        <div class="flex flex-col items-center">
                            <img class="mb-4 w-3/4 lg:w-4/4" src="../../assets/images/products/6.png" />
                            <h4 class="text-xl font-medium mb-1 font-casper">Cereales</h4>
                            <div class="text-gray-500 mb-1">Description Producto 4</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-10 text-center">
                <router-link to="/productos/detalle" class="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                    <h6 class="c_2 font-medium mb-1">VER MÁS</h6>
                </router-link>
            </div>
        </section>

</template>

<script>

    import clip_1 from '../../assets/videos/products/1.mp4';
    import Video from '../../components/media/Index.vue';
    export default {
        name: 'products',
        components: {
            Video
        },
        data() {
            return {
                clip_1
            }
        }
    };
</script>

<style scoped>
    .c_2 {
        color: #002554;
    }
/*
    .rh {
        height: 280px;
        left: 0px;
        background: #002554;
        box-shadow: inset 0px 34px 23px 10px rgba(0, 0, 0, 0.3);
    }


    @media (min-width: 400px) {
        .rh {
            height: 320px;
        }
    }

    @media (min-width: 600px) {
        .rh {
            height: 390px;
        }
    }

    @media (min-width: 800px) {
        .rh {
            height: 480px;
        }
    }

    @media (min-width: 1024px) {
        .rh {
            height: 600px;
        }
    }

    @media (min-width: 1400px) {
        .rh {
            height: 650px;
        }
    }

    @media (min-width: 1600px) {
        .rh {
            height: 800px;
        }
    }*/
</style>