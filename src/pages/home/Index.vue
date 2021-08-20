<template>
	<div>
		<div class="hidden flex md:flex md:flex-grow absolute left-6 mt-36 lg:mt-56 xl:mt-96">
			<img class="inline" src="../../assets/images/social/social_v.png">
		</div>

		<!-- Vidio Clip Home -->
		<div class="hidden lg:mt-40 mt-20 md:flex md:flex-grow">
			<!-- <Video :media="clip_1" /> -->
			<img src="../../assets/images/home/clip_home.png" class="px-24">
		</div>
		<div class="md:hidden lg:mt-40 md:mt-28 mt-20">
			<!-- <Video :media="clip_1" :padding="0"/> -->
			<img src="../../assets/images/home/clip_home.png">
		</div>
		

		<section class="rh">
	        <div class="container mx-auto">
	            <img src="../../assets/images/home/background_1.png" class="absolute flex right-0 w-3/5 md:2/5 opacity-40">
	            <img src="../../assets/images/home/background_2.png" class="absolute flex w-3/5 sm:w-2/5 right-10 mt-40 md:mt-52">
	            <div class="absolute md:mt-40 lg:mt-56 mt-20 md:p-2 p-2 lg:p-10">
	                <h4 class="text-sm sm:text-2xl lg:text-3xl text-white">La empresa #1 en Mexico en distribución <br> Premier de frutos secos y nueces a nivel <br> nacional.</h4>
	                <div class="text-left mt-10">
		              	<router-link to="/somos" class="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
			                <h6 class="text-gray-200 font-medium mb-1">VER MÁS</h6>
			            </router-link>
	              	</div>
	            </div>
	        </div>
	    </section>
		
		<section class="cnt_p bg-white">
			<div class="pt-32 mx-6 lg:mx-0">
		        <div class="justify-center flex flex-wrap lg:flex-nowrap col-span-12">
			        <div class="col-span-12 md:col-span-6 lg:col-span-3">
			            <div class="flex flex-col items-center">
			              <img class="rounded-full mb-4 w-3/4 lg:w-4/4" src="../../assets/images/home/1.png"/>
			              <h4 class="text-xl font-medium mb-1">Frutos secos</h4>
			              <div class="text-gray-500 mb-1">Description Producto 1</div>
			            </div>
			        </div>

			        <div class="col-span-12 md:col-span-6 lg:col-span-3">
			            <div class="flex flex-col items-center">
			              <img class="rounded-full mb-4 w-3/4 lg:w-4/4" src="../../assets/images/home/2.png"/>
			              <h4 class="text-xl font-medium mb-1">Frutas deshidratadas</h4>
			              <div class="text-gray-500 mb-1">Description Producto 2</div>
			            </div>
			        </div>

			        <div class="col-span-12 md:col-span-6 lg:col-span-3">
			            <div class="flex flex-col items-center">
			              <img class="rounded-full mb-4 w-3/4 lg:w-4/4" src="../../assets/images/home/3.png"/>
			              <h4 class="text-xl font-medium mb-1">Jamaica</h4>
			              <div class="text-gray-500 mb-1">Description Producto 3</div>
			            </div>
			        </div>

			        <div class="col-span-12 md:col-span-6 lg:col-span-3">
			            <div class="flex flex-col items-center">
			              <img class="rounded-full mb-4 w-3/4 lg:w-4/4" src="../../assets/images/home/4.png"/>
			              <h4 class="text-xl font-medium mb-1">Superfoods</h4>
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

	    <div>
			<!-- <Video :media="clip_1" :padding="0" /> -->
			<img src="../../assets/images/home/clip_home2.png">
		</div>
	</div>
</template>

<script>
	import clip_1 from '../../assets/videos/home/sale_jamaica.mp4';
	import Video from '../../components/media/Index.vue';

	export default {
		name: "home",
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
	.social_h {
		position: absolute;
		left: 2%;
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