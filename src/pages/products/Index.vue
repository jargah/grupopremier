<template>
    <section class="rh">
        <div class="container mx-auto">
            <img src="../../assets/images/home/background_1.png" class="absolute flex right-0 w-3/5 md:2/5 opacity-40">
            <img src="../../assets/images/home/background_2.png" class="absolute flex w-3/5 sm:w-2/5 right-10 mt-40 md:mt-52">
            <div class="absolute md:mt-20 lg:mt-56 mt-20 md:p-2 p-2 lg:p-10">
                <h4 class="md:text-sm lg:text-3xl font-casper text-white">La empresa #1 en Mexico en distribución <br> Premier de frutos secos y nueces a nivel <br> nacional.</h4>
            </div>
        </div>
    </section>
    <section class="cnt_p bg-white">
            <div class="pt-32 mx-6 lg:mx-0">
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
                <router-link to="/productos" class="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                    <h6 class="c_2 font-medium mb-1">VER MÁS</h6>
                </router-link>
            </div>
        </section>

</template>

<script>
  export default {
    name: 'products',
    data() {
      return {

      }
    }
  };
</script>

<style scoped>
    .c_2 {
        color: #002554;
    }

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
    }
</style>