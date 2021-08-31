<template>
    <section class="bg-white mt-40">
        <div class="grid md:grid-cols-12 gap-5 lg:gap-20 bg-white">
            <div class="md:col-span-6 lg:col-span-6 p-6 md:p-16">
                <p class="text-4xl font-casper c_2">
                    Frutos secos
                </p>
                <p class="mt-10 font-casper">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                
                <p class="mt-6 font-casper">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
                
                <div class="col-span-12">
                    <p class="c_2 mt-10 font-casper">BENEFICIOS</p>
                    
                    <div class="mt-6 flex flex-row">
                        <div class="mb-8">
                            <img src="../../assets/images/products_detail/benefits/3.gif" class="w-3/4">
                        </div>

                        <div class="mb-8">
                            <img src="../../assets/images/products_detail/benefits/1.gif" class="w-3/4">
                        </div>

                        <div class="mb-8">
                            <img src="../../assets/images/products_detail/benefits/8.gif" class="w-3/4">
                        </div>
                    </div>

                    <p class="c_2 mt-10 font-casper">USALOS EN </p>

                    <div class="mt-6 flex flex-row ">
                        <div class="mb-8">
                            <img src="../../assets/images/products_detail/benefits/7.gif" class="w-4/4">
                        </div>

                        <div class="mb-8">
                            <img src="../../assets/images/products_detail/benefits/2.gif" class="w-4/4">
                        </div>

                        <div class="mb-8">
                            <img src="../../assets/images/products_detail/benefits/5.gif" class="w-4/4">
                        </div>

                        <div class="mb-8">
                            <img src="../../assets/images/products_detail/benefits/1.gif" class="w-4/4">
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:col-span-6 lg:col-span-6 p-6 md:p-16">
                <img src="../../assets/images/products_detail/1.png" >              
            </div>
        </div>
    </section>

    <section class="bg-white">
        <p class="text-2xl font-casper p-6 md:p-16 c_2">
            CONOCE NUESTRO FRUTOS SECOS
        </p>
        <div class="mx-6 lg:mx-0">
            <div class="justify-center flex flex-wrap lg:flex-nowrap col-span-12">
                <div class="col-span-12 md:col-span-6 lg:col-span-3">
                    <div class="flex flex-col items-center">
                      <img class="mb-4 w-3/4 lg:w-4/4" src="../../assets/images/products_detail/3.png" />
                      <h4 class="text-xl font-medium mb-1 font-casper c_2">Nuez Western</h4>
                      <div class="text-gray-500 mb-1">Description Producto 1</div>
                    </div>
                </div>

                <div class="col-span-12 md:col-span-6 lg:col-span-3">
                    <div class="flex flex-col items-center">
                      <img class="mb-4 w-3/4 lg:w-4/4" src="../../assets/images/products_detail/4.png" />
                      <h4 class="text-xl font-medium mb-1 font-casper c_2">Pistaches</h4>
                      <div class="text-gray-500 mb-1">Description Producto 2</div>
                    </div>
                </div>

                <div class="col-span-12 md:col-span-6 lg:col-span-3">
                    <div class="flex flex-col items-center">
                      <img class="mb-4 w-3/4 lg:w-4/4" src="../../assets/images/products_detail/5.png" />
                      <h4 class="text-xl font-medium mb-1 font-casper c_2">Almendras</h4>
                      <div class="text-gray-500 mb-1">Description Producto 3</div>
                    </div>
                </div>

                <div class="col-span-12 md:col-span-6 lg:col-span-3">
                    <div class="flex flex-col items-center">
                      <img class="mb-4 w-3/4 lg:w-4/4" src="../../assets/images/products_detail/2.png" />
                      <h4 class="text-xl font-medium mb-1 font-casper c_2">Nuez de la india</h4>
                      <div class="text-gray-500 mb-1">Description Producto 4</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="col-span-12 bg-white p-6 md:p-16">
        <p class="c_2 text-2xl  font-casper text-center md:text-left">GALERÍA DE LOS PRODUCTOS</p>
        <div class="mt-6 flex flex-row flex-nowrap">
            <div class="mb-8">
                <img src="../../assets/images/products_detail/6.png" class="w-3/4">
            </div>

            <div class="mb-8">
                <img src="../../assets/images/products_detail/7.png" class="w-3/4">
            </div>

            <div class="mb-8">
                <img src="../../assets/images/products_detail/8.png" class="w-3/4">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'products-detail',
    data() {
      return {

      }
    }
  };
</script>

<style>
    .c_2 {
        color: #002554;
    }
</style>