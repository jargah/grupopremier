<template>
    <section class="bg-white mt-40">
        <div class="grid md:grid-cols-12 gap-5 lg:gap-20 bg-white">
            <div class="md:col-span-6 lg:col-span-6 p-16">
                <p class="text-4xl c_2">
                    Frutos secos
                </p>
                <p class="mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                
                <p class="mt-6">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
                
                <div class="col-span-12">
                    <p class="c_2 mt-10">BENEFICIOS</p>
                    
                    <div class="mt-6 flex flex-row">
                        <div class="mb-8">
                            <img src="../../assets/images/products/benefits/3.gif" class="w-3/4">
                        </div>

                        <div class="mb-8">
                            <img src="../../assets/images/products/benefits/1.gif" class="w-3/4">
                        </div>

                        <div class="mb-8">
                            <img src="../../assets/images/products/benefits/8.gif" class="w-3/4">
                        </div>
                    </div>

                    <p class="c_2 mt-10">USALOS EN </p>

                    <div class="mt-6 flex flex-row ">
                        <div class="mb-8">
                            <img src="../../assets/images/products/benefits/7.gif" class="w-3/4">
                        </div>

                        <div class="mb-8">
                            <img src="../../assets/images/products/benefits/2.gif" class="w-3/4">
                        </div>

                        <div class="mb-8">
                            <img src="../../assets/images/products/benefits/5.gif" class="w-3/4">
                        </div>

                        <div class="mb-8">
                            <img src="../../assets/images/products/benefits/1.gif" class="w-3/4">
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:col-span-6 lg:col-span-6 p-16">
                <img src="../../assets/images/products/1.png" >              
            </div>
        </div>
    </section>

    <section class="bg-white">
        <div>
            <div class="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3">
                <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3">
                    <div class="flex flex-col items-center">
                      <img class="rounded-full mb-4" src="../../assets/images/products/3.png" width="120" height="120"/>
                      <h4 class="text-xl font-medium mb-1 c_2">Nuez Western</h4>
                      <div class="text-gray-500 mb-1">Description Producto 1</div>
                    </div>
                </div>

                <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos-delay="100">
                    <div class="flex flex-col items-center">
                      <img class="rounded-full mb-4" src="../../assets/images/products/4.png" width="120" height="120"/>
                      <h4 class="text-xl font-medium mb-1 c_2">Pistaches</h4>
                      <div class="text-gray-500 mb-1">Description Producto 2</div>
                    </div>
                </div>

                <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos-delay="200">
                    <div class="flex flex-col items-center">
                      <img class="rounded-full mb-4" src="../../assets/images/products/5.png" width="120" height="120"/>
                      <h4 class="text-xl font-medium mb-1 c_2">Almendras</h4>
                      <div class="text-gray-500 mb-1">Description Producto 3</div>
                    </div>
                </div>

                <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos-delay="200">
                    <div class="flex flex-col items-center">
                      <img class="rounded-full mb-4" src="../../assets/images/products/2.png" width="120" height="120"/>
                      <h4 class="text-xl font-medium mb-1 c_2">Nuez de la india</h4>
                      <div class="text-gray-500 mb-1">Description Producto 4</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="col-span-12 bg-white p-20">
        <p class="c_2">GALERÍA DE LOS PRODUCTOS</p>
        <div class="mt-6 flex flex-row flex-nowrap">
            <div class="mb-8">
                <img src="../../assets/images/products/6.png" class="w-3/4">
            </div>

            <div class="mb-8">
                <img src="../../assets/images/products/7.png" class="w-3/4">
            </div>

            <div class="mb-8">
                <img src="../../assets/images/products/8.png" class="w-3/4">
            </div>
        </div>
    </div>
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

<style>
    .c_2 {
        color: #002554;
    }
</style>